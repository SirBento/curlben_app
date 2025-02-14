import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import React from "react";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
   <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
  <div className="flex-[1] flex flex-col md:mr-10">
    <img
      src={logo}
      alt="CurlBen"
      className="w-[200px] h-[100px] relative"
    />
    <p className={`${styles.paragraph}max-w-[400px] mt-5`}>
      Innovative software solutions, cutting-edge web services, and reliable telecommunication technologies to empower businesses and individuals in the digital age.
    </p>
  </div>

  <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
    {footerLinks.map((footerlink) => (
      <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
        <h4 className="font-nutino font-bold text-[18px] leading-[27px] text-white">
          {footerlink.title}
        </h4>
        <ul className="list-none mt-4">
          {footerlink.links.map((link, index) => (
            <li
              key={link.name}
              className={`font-nutino font-normal text-[16px] leading-[24px] text-dimWhite hover:text-dimGreen cursor-pointer ${
                index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 CurlBen Solutions. All Rights Reserved.
     
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[35px] h-[35px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
