import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-12 bg-orange-300 fixed w-full flex flex-row items-center justify-end gap-8 p-8">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/blog">Blog Post</Link>
      {/* <Link href="/shallow">shallow</Link> */}
      <Link href="/login" className="font-bold">
        Logout
      </Link>
    </div>
  );
}

export default Navbar;
