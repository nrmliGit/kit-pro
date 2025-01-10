import styles from "../styles/style.module.css";

export default function Accounts() {
  return (
    <div className={styles.accountsDiv}>
      <div className="px-[40px] py-[40px] mx-[25px] border-r border-[#ccc] ">
        <h1 className="text-[48px] font-semibold text-[#ccc]">Google</h1>
        <p className="text-[1.4rem] font-[400] text-[#0061f2] pb-[12px]">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error
          vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum."
        </p>
        <h3 className="text-[#69707A] text-[16px] font-bold">Adam Hall</h3>
        <p className="font-[300] text-[16px]">Head of Engineering</p>
      </div>
      <div className="px-[40px] py-[40px]  mx-[25px]">
        <h1 className="text-[48px] font-semibold text-[#ccc]">Instagram</h1>
        <p className="text-[1.4rem] font-[400] text-[#0061f2] pb-[12px]">
          "Adipisci mollitia nemo magnam iure, temporibus molestiae odit, sit
          harum dolores neque maiores quo eligendi nam corrupti."
        </p>
        <h3 className="text-[#69707A] text-[16px] font-bold">Lia Peterson</h3>
        <p className="font-[300] text-[16px]">Technical Project Manager</p>
      </div>
    </div>
  );
}
