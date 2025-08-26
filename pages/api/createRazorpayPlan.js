import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { amount } = req.body;
  try {
    const plan = await razorpay.plans.create({
      period: "monthly",
      interval: 1,
      item: {
        name: `Monthly Donation - ₹${amount}`,
        amount: parseInt(amount) * 100,
        currency: "INR",
        description: "Other Seva [ISKCON Hazaribagh]"
      },
    });

    res.status(200).json({ plan_id: plan.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Plan creation failed" });
  }
}
