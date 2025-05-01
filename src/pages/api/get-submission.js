import { kv } from "@vercel/kv";
export default async function handler(req, res) {
  try {
    const keys = await kv.keys("submission:*");
    const submissions = await Promise.all(keys.map((key) => kv.get(key)));
    res.status(200).json({ submissions });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
}
