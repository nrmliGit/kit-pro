import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router";
import styles from "../styles/style.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="flex mx-auto w-[90%] justify-between py-[35px] ">
        <Link to="/" className="text-[#0061f2] text-[18px] font-bold">
          SB UI Kit Pro
        </Link>
        <div className={styles.menu}>
          <Menu size={20} color="#0000008c" />
        </div>
        <div className={styles.nav}>
          <nav className="flex gap-[52px]">
            <ul className="flex text-[#0000008c] text-[16px] [&>li]:p-[8px] [&>li]:font-medium gap-1 [&>li]:flex">
              <li className="hover:text-black">Home</li>
              <li className="hover:text-black">
                Landings <ChevronRight className="w-[15px]" />
              </li>
              <li className="hover:text-black">
                Pages <ChevronRight className="w-[15px]" />
              </li>
              <li className="hover:text-black">
                Documentations <ChevronRight className="w-[15px]" />
              </li>
            </ul>

            <button className="bg-[#0061f2] hover:bg-[#1c4178]  rounded-md flex text-[#ffffff] font-medium py-[10px] text-[14px] px-[18px]">
              Buy Now
              <ArrowRight className="w-[15px] ml-[7px]" />
            </button>
          </nav>
        </div>
      </div>
      <div className={styles.littleNav}>
        <nav className="px-[20px]">
          <ul className=" text-[#0000008c] text-[16px] [&>li]:p-[8px] [&>li]:font-medium gap-1 [&>li]:flex">
            <li className="hover:text-black">Home</li>
            <li className="hover:text-black">
              Landings <ChevronRight className="w-[15px]" />
            </li>
            <li className="hover:text-black">
              Pages <ChevronRight className="w-[15px]" />
            </li>
            <li className="hover:text-black">
              Documentations <ChevronRight className="w-[15px]" />
            </li>
          </ul>

          <button className="bg-[#0061f2] hover:bg-[#1c4178]  mt-[20px] rounded-md flex text-[#ffffff] font-medium py-[10px] text-[14px] px-[18px]">
            Buy Now
            <ArrowRight className="w-[15px] ml-[7px]" />
          </button>
        </nav>
      </div>
    </div>
  );
}
