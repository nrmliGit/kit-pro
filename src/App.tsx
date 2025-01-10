import Accounts from "./components/Accounts";
import Carts from "./components/Carts";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import HeaderMiddle from "./components/HeaderMiddle";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeaderMiddle />
      <HeaderBottom />
      <Accounts />
      <Carts />
      <FooterTop />
      <Footer />
    </>
  );
}
