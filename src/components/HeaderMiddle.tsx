export default function HeaderMiddle() {
  return (
    <section className="  bg-gradient-to-b from-[#0061f2] to-[rgba(105,0,199,.8)] py-[128px]">
      <div className="flex items-center px-[40px] mx-[40px]">
        <div className="w-[700px] px-[20px]">
          <h1 className="text-[40px] mb-[8px] text-white font-medium font-sans">
            Build a landing page for your mobile app
          </h1>
          <p className="text-[17px] mb-[40px] text-[#ffffff80] font-sans">
            Marketing pages for your mobile app have never been easier. Get
            started now!
          </p>
          <div>
            <div className="flex">
              <img
                src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/app-badges/app-store-badge.svg"
                alt=""
                className="w-[142px] h-[48px] mr-[15px]"
              />
              <img
                src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/app-badges/google-play-badge.svg"
                alt=""
                className="w-[152px] h-[48px]"
              />
            </div>
            <div className="text-[12px] mt-[8px] text-[#ffffff80] font-sans">
              * Requires Android OS 4.3+ or Apple iOS 9.3+
            </div>
          </div>
        </div>
        <div className="w-[700px] px-[20px] flex items-center justify-center">
          <div>
            <img
              src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/device-mockups/iPhoneX/portrait.png"
              alt=""
              className="w-[270px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
