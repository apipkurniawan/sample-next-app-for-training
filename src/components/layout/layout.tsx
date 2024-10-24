import { useIdleTimer } from "react-idle-timer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useSessionStore } from "@/store/useSessionStore";
import idLocale from "@/locales/id";
import enLocale from "@/locales/en";

type LayoutProps = {
  children: React.ReactElement;
};
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const text = router.locale === "id" ? idLocale : enLocale;

  const { setErrorMessage } = useSessionStore();

  const onIdle = () => {
    setErrorMessage(text.message.session_end);
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
