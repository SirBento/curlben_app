import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-green-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-3`}>
      Experience the power of CurlBen Solutions to empower your business, unlock its full potential, and reach new heights in the digital age. With our diverse range of services and unwavering support, we are committed to helping you thrive and succeed. CurlBen Solutions is your trusted partner in achieving digital success. Together, let's embark on a journey towards growth, innovation, and lasting success for your business.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;

