import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter}`}>
    <div className={`${styles.flexCenter} max-w-90% flex-wrap md:flex-row flex-col`}>
      {clients.map((client) => (
        <>
         <div key={client.id} className={`${styles.flexCenter} w-[100px] h-[100px] rounded-3xl bg-dimGreen m-5 justify-center`}>
          <img src={client.logo} alt="client_logo" className="w-[90%] h-[90%] object-contain  " />
        </div>
       <span className="font-poppins font-semibold xs:text-[42.45px] text-[20.45px] text-gradient  ml-2 text-wrap max-w-30px">{client.name}</span>
      </>
       
      ))}
    </div>
  </section>
);

export default Clients;


