/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header, Sidebar } from "../subcomponents";

const Layout = ({ children }: any) => {
  return (
    <main className="flex h-[100vh] bg-[#F7F8FA] font-[pjs]">
      <div className="w-[80px] max-lg:hidden">
        <Sidebar />
      </div>
      <div className="flex-1 h-full overflow-y-scroll">
        <Header />
        <div className="p-[20px]">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
