import styles from "./style";
<<<<<<< HEAD
import { Business, CTA, Footer, Navbar, Stats, Testimonials, Hero, Clients, Contact } from "./components";
=======
import { Business, CTA, Footer, Navbar, Stats, Testimonials, Hero, Clients } from "./components";
>>>>>>> 1ebd793cfd4cdef18ec1865c4a6a35fea1e3130b
import React from "react";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
        <Clients/>
        <CTA />
        <Contact/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
