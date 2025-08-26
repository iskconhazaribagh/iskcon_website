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
    startDate, // coming as "YYYY-MM-DD" from frontend
  } = req.body;

  console.log("➡️ [API] Received in API:", req.body);

  if (!plan_id || !name || !email || !phone || !amount) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // convert startDate -> epoch seconds at midnight
    let start_at;
    if (startDate) {
      const selectedDate = new Date(startDate + "T00:00:00");
      const now = new Date();

      // If selected date is today or in the past, set start_at a minute ahead to avoid Razorpay error
      if (selectedDate <= now) {
        start_at = Math.floor(now.getTime() / 1000) + 120; // 120 seconds ahead
      } else {
        start_at = Math.floor(selectedDate.getTime() / 1000);
      }
    }

    const payload = {
      plan_id,
      total_count: 240,
      customer_notify: 1,
      start_at,
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
    };

    console.log("📦 [API] Final payload to Razorpay:", payload);

    const subscription = await razorpay.subscriptions.create(payload);

    console.log("✅ [API] Subscription created:", subscription);

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
