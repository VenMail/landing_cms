import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header logoVariant="dark" />
      <main className="flex-grow py-5">{children}</main>
      <Footer />
    </>
  );
}
