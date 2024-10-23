import { useRouter } from "next/router";
import React from "react";

function DynamicPage() {
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center items-center">
      <p>Post: {router.query.slug}</p>
    </div>
  );
}

export default DynamicPage;
