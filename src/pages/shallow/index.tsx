// shallow routing
import { useEffect } from "react";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render

    // router.push("/?counter=10", undefined, { shallow: true });
    router.push("/?counter=10", "/shallow?counter=10", { shallow: true });
  }, []);

  useEffect(() => {
    // The counter changed!
    console.log("counter...", router.query.counter);
  }, [router.query.counter]);
}

export default Page;
