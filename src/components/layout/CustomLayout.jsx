import Header from "./Header";
import Footer from "./Footer";

export default function CustomLayout({ children, logoVariant, headerColor, textColor, hideFooterJumbo }) {
  return (
    <>
      <Header logoVariant={logoVariant} bgColor={headerColor} textColor={textColor} />
      <main className="flex-grow">{children}</main>
      <Footer hideFooterJumbo={hideFooterJumbo} />
    </>
  );
}
