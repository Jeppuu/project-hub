import React from "react";
import Header from "./header";

export const mainBgColor = "bg-surface-1";
const borderColor = "border-crust";

const Layout = React.memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main
        className={`w-[80%] max-w-5xl mx-auto border-2 ${borderColor} rounded-xl ${mainBgColor} drop-shadow-solid-crust relative overflow-hidden`}
      >
        <div
          className={`p-4 relative top-0 left-0 w-full h-auto gradient-to-r-custom rounded-t-lg shadow-md border-b-2 ${borderColor} gradient-to-r-custom flex flex-row gap-2 items-start`}
        >
          <div
            className={`p-2 rounded-full bg-red border-2 ${borderColor} shadow-md`}
          ></div>
          <div
            className={`p-2 rounded-full bg-yellow border-2 ${borderColor} shadow-md`}
          ></div>
          <div
            className={`p-2 rounded-full bg-green border-2 ${borderColor} shadow-md`}
          ></div>
        </div>
        <div className="px-4 py-6">{children}</div>
      </main>
    </div>
  );
});
Layout.displayName = "Layout";

export default Layout;
