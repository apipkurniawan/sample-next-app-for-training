import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactElement;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
