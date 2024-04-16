import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full greenish__gradient bottom-40" />

    <div className="w-full flex justify-center items-center md:flex-col flex-row sm:mb-16 mb-6 relative z-[1]">
  <div className="w-full md:w-auto md:mt-0 mt-6">
    <h2 className={`${styles.heading2} text-center md:text-center`}>
      What People are saying about us
    </h2>
    <p className={`${styles.paragraph} text-center md:text-center`}>
      Discover the success stories of our valued clients and witness the transformative power of our services firsthand.
    </p>
  </div>
</div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;



