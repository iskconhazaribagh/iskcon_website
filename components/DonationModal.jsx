"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
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
  });

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const PLAN_IDS = {
    101: "plan_QyQC5lyxzzlE11",
    251: "plan_QyQBmzuzaV6EYY",
    501: "plan_QyQBLgRqIeeJih",
    1001: "plan_QyQCNf4APXGov1",
    2001: "plan_QyQCVmLg7mqnsX",
    5001: "plan_QyQCf4sFHldB5T",
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
    console.log("Calling createSubscription with:", {
      plan_id: planId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      amount:
        formData.amount === "custom" ? formData.customAmount : formData.amount,
      address: formData.address,
      pincode: formData.pincode,
      pan: formData.pan,
      city,
      state,
    });
    try {
      const res = await axios.post("/api/createRazorpaySubscription", {
        plan_id: planId,
        ...formData,
        amount:
          formData.amount === "custom"
            ? formData.customAmount
            : formData.amount,
        city,
        state,
      });

      const { subscription_id, razorpay_key } = res.data;

      const options = {
        key: razorpay_key,
        subscription_id,
        name: "ISKCON Hazaribagh",
        description: "Monthly Donation",
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
          <RxCross2 className="text-white text-2xl" onClick={onClose} />
        </div>

        {amt === "rec" ? (
          <div className="flex flex-col gap-4 items-start justify-start w-full">
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
            <input
              type="text"
              name="pincode"
              placeholder="PIN Code"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN Number [Optional]"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
            <select
              name="amount"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            >
              <option value="">Select Amount</option>
              <option value="101"> Sudama Seva - ₹101</option>
              <option value="251">Prabhupada Seva - ₹251</option>
              <option value="501">Sudarshan Seva - ₹501</option>
              <option value="1001">Balaram Seva - ₹1001</option>
              <option value="2001">Subhadra Seva - ₹2001</option>
              <option value="5001">
                Sri Jagannath Mahaprabhu Seva - ₹5001
              </option>
              <option value="custom">Other Seva - Custom Amount</option>
            </select>
            {formData.amount === "custom" && (
              <input
                type="number"
                name="customAmount"
                placeholder="Enter custom amount"
                className="p-2 w-full rounded-[8px] text-black"
                onChange={handleChange}
              />
            )}

            <button
              className="w-full p-4 text-orange-600 font-semibold text-xl bg-white rounded-[40px]"
              onClick={handleSubmit}
            >
              Proceed to Donate Monthly
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
