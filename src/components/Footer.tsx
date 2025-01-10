import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-[96px] pb-[40px] bg-[rgb(33,40,50)] text-[#ffffff99]">
      <div className=" px-[40px] mx-[40px]">
        <div className="flex">
          <div className="px-[20px] w-[350px]">
            <div className="mb-[4px] font-bold">SB UI Kit Pro</div>
            <div className="mb-[16px] text-[14px]">Build better websites</div>
            <div className="flex mb-[40px]">
              <Instagram className="w-[17px] h-[17px] mr-[8px] cursor-pointer" />
              <Facebook className="w-[17px] h-[17px] mr-[8px] cursor-pointer" />
              <Github className="w-[17px] h-[17px] mr-[8px] cursor-pointer" />
              <Twitter className="w-[17px] h-[17px] mr-[8px] cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="px-[20px]">
              <div className="mb-[24px] text-[12px] uppercase font-bold">
                Product
              </div>
              <ul>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Landing
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Pages
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Section
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Documentation
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Changelog
                </li>
              </ul>
            </div>
            <div className="px-[20px]">
              <div className="mb-[24px] text-[12px] uppercase font-bold">
                Technical
              </div>
              <ul>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Documentation
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Changelog
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Theme Customizer
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  UI Kit
                </li>
              </ul>
            </div>
            <div className="px-[20px]">
              <div className="mb-[24px] text-[12px] uppercase font-bold">
                Includes
              </div>
              <ul>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Utilities
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Components
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Layouts
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Code Samples
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Products
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Affilites
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Updates
                </li>
              </ul>
            </div>
            <div className="px-[20px]">
              <div className="mb-[24px] text-[12px] uppercase font-bold">
                legal
              </div>
              <ul>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Privacy Policy
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  Terms and Conditions
                </li>
                <li className="text-[14px] mb-[8px] hover:underline cursor-pointer font-semibold">
                  License
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#ffffff99] my-[40px] px-[20px]">
          <hr />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="px-[20px]">
            <p className="text-[12px]">Copyright © Your Website 2022</p>
          </div>
          <div className="px-[20px]">
            <p className="text-[12px]">Privacy Policy · Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
