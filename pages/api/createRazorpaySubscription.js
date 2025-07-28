// pages/api/createRazorpaySubscription.js

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    plan_id,
    name,
    email,
    phone,
    amount,
    address,
    pincode,
    pan,
    city,
    state,
  } = req.body;

  console.log("➡️ Received in API:", req.body);

  if (!plan_id || !name || !email || !phone || !amount) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const subscription = await razorpay.subscriptions.create({
      plan_id,
      total_count: 240,
      customer_notify: 1,
      notes: {
        name,
        email,
        phone,
        amount,
        address,
        pincode,
        pan,
        city,
        state,
      },
    });

    console.log("✅ Subscription created:", subscription);

    return res.status(200).json({
      subscription_id: subscription.id,
      razorpay_key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("❌ Razorpay error:", error?.response?.data || error);
    return res.status(500).json({
      error: "Subscription creation failed",
      details: error?.response?.data || error.message,
    });
  }
}

