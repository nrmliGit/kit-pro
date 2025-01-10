export default function FooterTop() {
  return (
    <section className="bg-white py-[96px]">
      <div className="  flex justify-between px-[40px] mx-[40px]">
        <div className="px-[20px]">
          <h4 className="text-[20px] mb-[8px] ">Get the app now!</h4>
          <p className="text-[17px] text-[#69707a]">
            Ready to get started? Download the app now!
          </p>
        </div>
        <div className="flex px-[20px]">
          <img
            src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/app-badges/app-store-badge.svg"
            alt=""
            className="w-[142px] h-[48px] mr-[15px] cursor-pointer"
          />
          <img
            src="https://sb-ui-kit-pro-angular.startbootstrap.com/assets/img/app-badges/google-play-badge.svg"
            alt=""
            className="w-[152px] h-[48px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
