"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
function DonationModal({ isOpen, onClose, amt }) {


  const generateUID = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
  };



  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    cn:'schemeMember',
    an:'enroll',
    enach: 'true',
    schemeName: 'General', //ideally should be user input
    name: "",
    lname: "sa",
    email: "",
    phone: "",
    account_number: "",
    ifsc: "",
    bank_name: "",
    amount: "",
    startDate: "",
    endDate: "",
    txnid: generateUID(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data Before Submission:");
    // for (const key in formData) {
    //   console.log(${key}: ${formData[key]});
    // }
    try {
        const url = 'https://server.iskconapp.com/ics/api/actionHandler'
        const response = await axios.post(url, 
           formData,
           {
            withCredentials: true,
            auth: {
                username: 'hazsmadmin',
                password: 'hazsmadmin'
            }
           }
        );
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      
      console.log("token:", response.data.token);

      if (response.data && response.data.token) {
       // console
       
          const resp=await axios.post("https://server.iskconapp.com/ics/api/submit_enach",
            formData
          ).then(data => {
            console.log('Success:', data);
            register(resp.data.token.token);
            alert('Registration successful!');
        })

        // register(response.data.token);
        // alert("Registration successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed!");
    }
  };


  const handleResponse = (res) => {
    if (
      res?.paymentMethod?.paymentTransaction?.statusCode === "0300"
    ) {
      console.log("Payment successful");
    } else if (
      res?.paymentMethod?.paymentTransaction?.statusCode === "0398"
    ) {
      console.log("Payment initiated");
    } else {
      console.log("Payment error");
    }
  };

  const register = (token) => {
    console.log("token in register",token);
    const reqJson = {
      features: {
        enableAbortResponse: true,
        enableExpressPay: true,
        enableMerTxnDetails: true,
        siDetailsAtMerchantEnd: true,
        enableSI: true,
      },
      consumerData: {
        deviceId: "WEBSH2",
        token: token,
        returnUrl: "https://www.iskconhazaribagh.com/",
        responseHandler: handleResponse,
        paymentMode: "netBanking",
        merchantLogoUrl: "https://www.paynimo.com/CompanyDocs/company-logo-vertical.png",
        merchantId: "T1051856",
        currency: "INR",
        consumerId: "ICS108",
        consumerMobileNo: formData.phone,
        consumerEmailId: formData.email,
        txnId: formData.txnid,
        items: [
          {
            itemId: "FIRST",
            amount: "10",
            comAmt: "0",
          },
        ],
        customStyle: {
          PRIMARY_COLOR_CODE: "#45beaa",
          SECONDARY_COLOR_CODE: "#FFFFFF",
          BUTTON_COLOR_CODE_1: "#2d8c8c",
          BUTTON_COLOR_CODE_2: "#FFFFFF",
        },
        accountNo: formData.account_number,
        accountHolderName: formData.name,
        ifscCode: formData.ifsc,
        accountType: "Saving",
        debitStartDate: formData.startDate,
        debitEndDate: formData.endDate,
        maxAmount: formData.amount,
        amountType: "M",
        frequency: "MNTH",
      },
    };

    console.log(reqJson);

    window.$.pnCheckout(reqJson);
    if (reqJson.features.enableNewWindowFlow) {
      window.pnCheckoutShared.openNewWindow();
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#FF6000] mt-16 md:mt-0 text-white p-10 md:p-16 rounded-[16px] shadow-lg w-[80%] md:w-[55%] lg:w-[38%] text-center flex flex-col gap-5 items-start justify-start h-[72%] md:h-[85%] overflow-y-scroll scrollbar-hide z-50">
        <span className="flex items-center justify-between w-full">
          <h1 className="font-semibold text-xl md:text-2xl">Details</h1>
          <RxCross2 className="text-white text-2xl" onClick={onClose} />
        </span>

        {/* Info form */}
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Legal Name</label>
            <input
              type="text"
              name="lname"
              placeholder="Legal Name"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email@example.com"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+1234567890"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Account Number</label>
            <input
              type="text"
              name="account_number"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>IFSC code</label>
            <input
              type="text"
              name="ifsc"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Bank Name</label>
            <input
              type="text"
              name="bank_name"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              className="p-2 w-full rounded-[8px] text-black"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Payment button */}
        <button
          className="w-full p-5 text-orange-600 font-semibold text-xl text-center bg-white rounded-[40px]"
          onClick={handleSubmit}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

export default DonationModal;