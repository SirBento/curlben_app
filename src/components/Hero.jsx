import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Transforming <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Dreams</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
           Into Digital Reality
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        CurlBen Solutions stands as a rapidly expanding IT company, offering a diverse range of solutions and services across multiple industries. We specialize in comprehensive offerings such as mobile app development, web app development, and web hosting, among others. Our team comprises highly skilled experts who employ a meticulously crafted, collaborative, and client-centric approach, ensuring the flawless delivery of our projects. Our foremost objective is to empower businesses and individuals to navigate the digital age with resounding success.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="building" className="w-[80%] h-[100%] relative z-[5]" />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
