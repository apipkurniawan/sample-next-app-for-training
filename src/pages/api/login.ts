import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Simulating delay of 2 seconds
    const asyncOperation = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Operation succeeded");
      }, 2000);
    });
    await Promise.race([asyncOperation]);

    const { username, password } = req.body;
    if (username === "apip_k" && password === "password123") {
      return res.status(200).json({
        code: "SC-11",
        message: "Login successful",
        token: "kA3jsh82i77",
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
