import Layout from "@/components/layout";
import { useRouter } from "next/router";
import React from "react";

function DynamicPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <p>Post: {router.query.slug}</p>
      </div>
    </Layout>
  );
}

export default DynamicPage;
