"use client";
import React, { useState,useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Image from "next/image";
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
    if (name === "startDate" || name === "endDate") {
  
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}-${month}-${year}`;
      setFormData({ ...formData, [name]: formattedDate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    // Dynamically load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadJQueryAndCheckout = async () => {
      try {
        await loadScript("https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js");
        await loadScript("https://www.paynimo.com/paynimocheckout/server/lib/checkout.js");
        console.log("Scripts loaded successfully.");
      } catch (err) {
        console.error("Error loading scripts:", err);
      }
    };

    loadJQueryAndCheckout();
  }, []);


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // console.log("Form Data Before Submission:");
    // for (const key in formData) {
    //   console.log(`${key}: ${formData[key]}`);
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

      //console.log("response",response);
      //console.log("token:", response.data.token);

      if (response.data && response.data.token) {
       // console
       
       await register(response.data.token,response.data.icsid);
        //alert("Registration successful!");
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

  const register = (token,id) => {
    console.log("token in register",token);
    console.log("id:",id);
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
        token,
        returnUrl: "https://pgproxyuat.in.worldline-solutions.com/linuxsimulator/MerchantResponsePage.jsp",
        responseHandler: handleResponse,
        paymentMode: "netBanking",
        merchantLogoUrl: "https://www.paynimo.com/CompanyDocs/company-logo-vertical.png",
        merchantId: "L1051856",
        currency: "INR",
        consumerId: id,
        consumerMobileNo: formData.phone,
        consumerEmailId: formData.email,
        txnId: formData.txnid,
        items: [
          {
            itemId: "FIRST",
            amount: formData.amount,
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
      <div className={`bg-[#FF6000] mt-16 md:mt-0 text-white p-10 md:p-16 rounded-[16px] shadow-lg w-[80%] md:w-[55%] lg:w-[38%] text-center flex flex-col gap-5 items-start justify-start h-[72%] md:h-[85%] overflow-y-scroll scrollbar-hide z-50`}>



      {
        amt=="rec"?(
          <div className="w-full flex flex-col gap-3">
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
              //value={formData.name}
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
        ):(
          <div className="flex flex-col gap-3.5 w-full items-center justify-center">
          <div className="flex items-end justify-end w-full">
          <RxCross2 className="text-white text-2xl font-bold " onClick={onClose} />
          </div>
          <Image src="/assets/qr.jpeg"
          alt="Donation"
          width={200}
          height={180}></Image>
          <h1 className="text-center text-white text-xl font-bold"> SCAN the QR to Pay</h1>
          <div className="flex flex-col gap-1 ">
          <h1 className="text-white font-semibold text-md">A/C NAME -ISKCON</h1>
          <h1 className="text-white font-semibold text-md">A/C NUMBER -048901003308</h1>
          <h1 className="text-white font-semibold text-md">IFSC CODE-ICIC0000489</h1>
          </div>

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
          <button
          className="w-full p-5 text-orange-600 font-semibold text-xl text-center bg-white rounded-[40px]"
          
        >
         Submit
        </button>
          </div>
          </div>
        )
      }
        
      </div>
    </div>
  );
}

export default DonationModal;