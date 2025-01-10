import {
  Book,
  ChevronsLeftRight,
  Gavel,
  Layers,
  Package,
  PanelsTopLeft,
} from "lucide-react";
import styles from "../styles/style.module.css";

export default function Carts() {
  return (
    <div className="bg-[#f2f6fc]  py-[96px] w-[100%]">
      <p className={styles.heading}>APPLICATION FEATURES</p>
      <h2 className="text-[22.4px] tracking-wide text-center mb-[40px] font-medium text-[#363D47]">
        We have a simple solution to a complex problem
      </h2>

      <div className={styles.carts}>
        <div className={styles.cart}>
          <div className="bg-[#daefed]">
            <Layers color="#00ac69" />
          </div>
          <h5>Components</h5>
          <p>Our product is full of customized and extendable components.</p>
        </div>
        <div className={styles.cart}>
          <div className="bg-[#f1e0e3]">
            <Gavel color="#e81500" />
          </div>
          <h5>Utilities</h5>
          <p>
            Powerful utility classes makes it easy to customize your product.
          </p>
        </div>
        <div className={styles.cart}>
          <div className="bg-[#f2eee3]">
            <PanelsTopLeft color="#f4a100" />
          </div>
          <h5>Layouts</h5>
          <p>Our flex based layouts offer a beautifully reponsive approach.</p>
        </div>
        <div className={styles.cart}>
          <div className="bg-[#e4ddf7]">
            <Book color="#6900c7" />
          </div>
          <h5>Documentation</h5>
          <p>
            Our code is fully documented with instructions and usage examples.
          </p>
        </div>
        <div className={styles.cart}>
          <div className="bg-[#dae7fb]">
            <ChevronsLeftRight color="#0061f2" />
          </div>
          <h5>Code Snippets</h5>
          <p>
            Use code snippets to easily drop new components into your project.
          </p>
        </div>
        <div className={styles.cart}>
          <div className="bg-[#f3e7e3]">
            <Package color="#f76400" />
          </div>
          <h5>Plugins</h5>
          <p>
            We've implemented powerful third party plugins for added
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
