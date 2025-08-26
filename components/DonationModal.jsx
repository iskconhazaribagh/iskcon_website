"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { HelpCircle } from "lucide-react"; // ✅ for tooltip
import axios from "axios";
import Image from "next/image";

function DonationModal({ isOpen, onClose, amt }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    pan: "",
    amount: "",
    customAmount: "",
    startDate: new Date().toISOString().split("T")[0], // default today's date
  });

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const PLAN_IDS = {
    101: "plan_QyQC5lyxzzlE11",
    251: "plan_QyQBmzuzaV6EYY",
    501: "plan_QyQBLgRqIeeJih",
    1001: "plan_QyQCNf4APXGov1",
    2001: "plan_QyQCVmLg7mqnsX",
    5001: "plan_QyQCf4sFHldB5T",
  };

  const SEVA_NAMES = {
    101: "Sudama Seva",
    251: "Prabhupada Seva",
    501: "Sudarshan Seva",
    1001: "Balaram Seva",
    2001: "Subhadra Seva",
    5001: "Jagannath Seva",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (formData.pincode.length === 6) {
      axios
        .get(`https://api.postalpincode.in/pincode/${formData.pincode}`)
        .then((res) => {
          const info = res.data[0]?.PostOffice?.[0];
          if (info) {
            setCity(info.District);
            setState(info.State);
          }
        })
        .catch(() => {
          setCity("");
          setState("");
        });
    }
  }, [formData.pincode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amt === "rec") {
      const finalAmount =
        formData.amount === "custom" ? formData.customAmount : formData.amount;
      const fixedPlanId = PLAN_IDS[finalAmount];

      if (fixedPlanId) {
        createSubscription(fixedPlanId);
      } else {
        try {
          const planRes = await axios.post("/api/createRazorpayPlan", {
            amount: finalAmount,
          });

          const newPlanId = planRes.data.plan_id;
          createSubscription(newPlanId);
        } catch (err) {
          console.error("Plan creation failed", err);
          alert("Could not create plan. Try again.");
        }
      }
    } else {
      window.location.href = "https://rzp.io/rzp/ISKCONHazaribagh";
    }
  };

  const createSubscription = async (planId) => {
    const finalAmount =
      formData.amount === "custom" ? formData.customAmount : formData.amount;

    const sevaName =
      formData.amount === "custom"
        ? `Other Seva (₹${finalAmount})`
        : SEVA_NAMES[finalAmount] || "Seva";

    let startAtTimestamp;

    const selectedDate = new Date(formData.startDate);
    const now = new Date();

    if (selectedDate.toDateString() === now.toDateString()) {
      // If start date is today, set it a few seconds ahead of current time
      startAtTimestamp = Math.floor(Date.now() / 1000) + 120; // 120 seconds in future
    } else {
      // For future dates, use midnight of that date
      startAtTimestamp = Math.floor(selectedDate.getTime() / 1000);
    }

    try {
      const res = await axios.post("/api/createRazorpaySubscription", {
        plan_id: planId,
        ...formData,
        amount: finalAmount,
        city,
        state,
        start_at: startAtTimestamp,
        description: `Monthly Donation - ${sevaName}`,
      });

      const { subscription_id, razorpay_key } = res.data;

      const options = {
        key: razorpay_key,
        subscription_id,
        name: "ISKCON Hazaribagh",
        description: `Monthly Donation - ${sevaName}`,
        handler: function (response) {
          alert("Subscription successful! ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          PAN: formData.pan || "N/A",
          Address: formData.address,
          Pincode: formData.pincode,
          City: city,
          State: state,
        },
        theme: {
          color: "#FF6000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Subscription creation failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#FF6000] mt-16 md:mt-0 text-white p-10 md:p-16 rounded-[16px] shadow-lg w-[80%] md:w-[55%] lg:w-[38%] text-center flex flex-col gap-5 items-start justify-start h-[72%] md:h-[85%] overflow-y-scroll scrollbar-hide">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-semibold text-xl md:text-2xl">
            {amt === "rec" ? "Monthly Donation Details" : "One Time Donation"}
          </h1>
          <RxCross2
            className="text-white text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>

        {amt === "rec" ? (
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            {/* Inputs */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email ID"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Full Postal Address"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />

            {/* Pincode */}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="p-2 w-full rounded-md border border-gray-300 text-black"
              onChange={async (e) => {
                const value = e.target.value;
                setFormData((prev) => ({ ...prev, pincode: value }));
                if (value.length === 6) {
                  try {
                    const res = await fetch(
                      `https://api.postalpincode.in/pincode/${value}`
                    );
                    const data = await res.json();
                    if (data[0].Status === "Success") {
                      const postOffice = data[0].PostOffice[0];
                      setFormData((prev) => ({
                        ...prev,
                        city: postOffice.District,
                        state: postOffice.State,
                      }));
                    }
                  } catch (err) {
                    console.error("PIN lookup failed", err);
                  }
                } else if (value === "") {
                  setFormData((prev) => ({ ...prev, city: "", state: "" }));
                }
              }}
              value={formData.pincode}
            />

            {/* Compact City + State */}
            <div className="h-4 flex items-center text-xs text-gray-600">
              {formData.city && formData.state && (
                <span className="flex items-center">
                  📍 {formData.city}, {formData.state}
                </span>
              )}
            </div>

            {/* PAN (separate line) */}
            <input
              type="text"
              name="pan"
              placeholder="PAN (optional)"
              className="p-2 w-full rounded-md border border-gray-300 text-black"
              value={formData.pan}
              onChange={handleChange}
            />

            {/* Start Date with Tooltip */}
            <div className="flex items-center space-x-2 w-full justify-center relative">
              <label
                htmlFor="startDate"
                className="text-sm font-medium text-gray-700"
              >
                Start Date:
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="p-1 w-28 text-sm rounded-md border border-gray-300 text-center text-black"
                value={formData.startDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <HelpCircle
                className="w-4 h-4 text-white cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              />
              {showInfo && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs rounded-md shadow-md px-3 py-2 w-60 z-10">
                  Every month on this date your donation will be deducted.
                </div>
              )}
            </div>

            {/* Seva Options */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1">
              {[
                {
                  label: "Sudama Seva",
                  value: "101",
                  bg: "bg-gradient-to-r from-yellow-200 to-orange-300 text-black",
                  img: "/icons/sudama.png",
                },
                {
                  label: "Prabhupada Seva",
                  value: "251",
                  bg: "bg-gradient-to-r from-amber-300 to-orange-500 text-black",
                  img: "/icons/prabhupada.png",
                },
                {
                  label: "Sudarshan Seva",
                  value: "501",
                  bg: "bg-gradient-to-r from-cyan-500 to-blue-700",
                  img: "/icons/sudarshan.png",
                },
                {
                  label: "Balaram Seva",
                  value: "1001",
                  bg: "bg-gradient-to-r from-gray-100 to-gray-300 text-orange-700",
                  img: "/icons/balaram.png",
                },
                {
                  label: "Subhadra Seva",
                  value: "2001",
                  bg: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black",
                  img: "/icons/subhadra.png",
                },
                {
                  label: "Jagannath Seva",
                  value: "5001",
                  bg: "bg-gradient-to-r from-zinc-800 to-zinc-900 text-white",
                  img: "/icons/jagannath.png",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      amount: option.value,
                      customAmount: "",
                    }))
                  }
                  className={`w-full flex items-center gap-2 px-2 py-1 rounded-md font-medium shadow border border-white hover:scale-[1.01] transition text-xs sm:text-sm
                  ${
                    formData.amount === option.value ? "ring-2 ring-white" : ""
                  } ${option.bg}`}
                >
                  <Image
                    src={option.img}
                    alt={option.label}
                    width={18}
                    height={18}
                  />
                  <span className="truncate">
                    {option.label} – ₹{option.value}
                  </span>
                </button>
              ))}

              {/* Other Seva */}
              <div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center w-full mt-1">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, amount: "custom" }))
                  }
                  className={`px-2 py-1 text-xs sm:text-sm rounded-lg border font-medium shadow-sm transition
                  ${
                    formData.amount === "custom"
                      ? "bg-white text-orange-600 border-white ring-1 ring-white"
                      : "border-white text-black hover:bg-white hover:text-orange-600"
                  }`}
                >
                  Other Seva – Custom Amount
                </button>

                {formData.amount === "custom" && (
                  <input
                    type="number"
                    name="customAmount"
                    placeholder="Amount (₹)"
                    className="mt-1 p-1 w-20 rounded-md text-xs text-black shadow-inner border border-gray-300 text-center"
                    onChange={handleChange}
                    value={formData.customAmount}
                  />
                )}
              </div>
            </div>
            <button
              className="w-full flex items-center justify-center gap-1 px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
              onClick={handleSubmit}
            >
              💳 Donate Monthly 💳
            </button>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-lg">
              You will be redirected to our secure payment gateway for one-time
              donation.
            </p>
            <button
              className="w-full mt-6 p-4 text-orange-600 font-semibold text-xl bg-white rounded-[40px]"
              onClick={handleSubmit}
            >
              Donate Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationModal;
