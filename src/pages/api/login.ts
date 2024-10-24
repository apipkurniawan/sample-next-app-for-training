import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("req", req);
  if (req.method === "POST") {
    const { username, password } = req.body;

    console.log("username", username);
    console.log("password", password);
    if (username === "apip_k" && password === "password123") {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
