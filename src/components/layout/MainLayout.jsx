export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--background)" }}>
      {children}
    </div>
  );
}
