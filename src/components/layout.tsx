import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="px-4 py-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
