import Footer from "./footer";
import Navbar from "./navbar";

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
