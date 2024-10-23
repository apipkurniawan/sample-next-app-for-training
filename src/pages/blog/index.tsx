import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const POST = [
  { id: "1", slug: "address", title: "Address" },
  { id: "2", slug: "projects", title: "Projects" },
  { id: "3", slug: "reward", title: "Rewards" },
];
function Blog() {
  const router = useRouter();

  return (
    <Layout>
      <div className="h-screen justify-center items-center flex flex-col gap-4">
        <h1>Contact Page</h1>
        {/* dynamic route */}
        <button
          className="bg-slate-300 rounded-lg p-3"
          onClick={() => router.push("/blog/1")}
        >
          Go to 1
        </button>
        <button
          className="bg-slate-300 rounded-lg p-3"
          onClick={() => router.push("/blog/2")}
        >
          Go to 2
        </button>

        {/* nested dynamic route */}
        <button
          className="bg-slate-300 rounded-lg p-3"
          onClick={() => router.push("/blog/detail/4")}
        >
          Go to detail 4
        </button>

        {/* linking dynamic route */}
        {POST.map((post) => (
          <div key={post.id}>
            <Link
              href={{
                pathname: "/blog/[slug]",
                query: { slug: post.slug },
              }}
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
