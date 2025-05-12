"use client";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const EdcLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden">
      <Navbar />

      <div className="relative flex flex-1 overflow-hidden">
        <div className="overflow-auto flex-1 bg-[#F3F3F3]">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default EdcLayout;
