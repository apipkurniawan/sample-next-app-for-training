import { useIdleTimer } from "react-idle-timer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactElement;
};
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const onIdle = () => {
    router.push("/login");
  };

  useIdleTimer({
    onIdle,
    timeout: 60000,
    throttle: 500,
  });

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
