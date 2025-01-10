import { Code, Layers, Smartphone } from "lucide-react";

export default function HeaderBottom() {
  return (
    <div className="flex items-center justify-between bg-white py-[96px] mx-[40px] px-[40px]">
      <div className="flex flex-col text-center items-center w-[466px] px-[20px]">
        <div className="bg-[#0061f2] w-[80px] h-[80px] mb-[24px] rounded-[50%] flex justify-center items-center text-white ">
          <Layers />
        </div>
        <h3 className="text-[20px] mb-[8px]">Built for developers</h3>
        <p className="text-[#69707a]">
          Our customizable, block-based build system makes creating your next
          project fast and easy!
        </p>
      </div>
      <div className="flex flex-col text-center items-center w-[466px] px-[20px]">
        <div className="bg-[#0061f2] w-[80px] h-[80px] mb-[24px] rounded-[50%] flex justify-center items-center text-white ">
          <Smartphone />
        </div>
        <h3 className="text-[20px] mb-[8px]">Modern responsive design</h3>
        <p className="text-[#69707a]">
          Featuring carefully crafted, mobile-first components, your end product
          will function beautifully on any device!
        </p>
      </div>
      <div className="flex flex-col text-center items-center w-[466px] px-[20px]">
        <div className="bg-[#0061f2] w-[80px] h-[80px] mb-[24px] rounded-[50%] flex justify-center items-center text-white">
          <Code />
        </div>
        <h3 className="text-[20px] mb-[8px]">Complete documentation</h3>
        <p className="text-[#69707a]">
          All of the layouts, page sections, components, and utilities are fully
          covered in this products docs.
        </p>
      </div>
    </div>
  );
}
