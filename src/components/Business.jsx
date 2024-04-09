import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-5 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGreen`}>
      <img src={icon} alt="service" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-nunito font-semibold text-dimGreen text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-nunito font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The entire cycle of digital  <br className="sm:block hidden" />  transformation effortlessly handled for you.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Embark on a hassle-free journey of web and mobile app development, backed by our reliable hosting services. Experience the expertise of our team in UX/UI design, graphics design, E-commerce solutions, systems maintenance, and CCTV installations. Additionally, we offer seamless web reselling services. Our company is committed to delivering top-quality solutions tailored to meet your every requirement, guaranteeing an outstanding online presence for your business. Entrust us with your Tech-related concerns, allowing you to concentrate on expanding your brand. Select us for a flawlessly smooth experience!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
