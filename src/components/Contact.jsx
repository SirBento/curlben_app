import React from 'react'
import styles  from "../style";
import { email,phone,location} from "../assets";
import { socialMedia } from "../constants";

function Contact() {
  return (
   
         <div id="contact"  className="flex w-full min-h-screen justify-center items-center ">
            <div className = "flex flex-col md:flex-row md:space-x-6  md:space-y-0 space-y-6 bg-dimGreen w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">

            <div className="flex flex-col justify-between">
         <div>
            <h2 className={styles.heading2}> Contact Us </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Your satisfaction is our top priority. Don't hesitate to get in touch with us for any inquiries, feedback, or assistance you may need. We're committed to providing prompt and personalized support.
            </p>
         </div>
         <div className="mt-4">
            <div className={"w-[220px] h-[70px] rounded-full flex justify-center items-center"}>
                <img src={phone} alt="phone" className="w-[50%] h-[50%] object-contain" />
                <span className="ml-0"> +263 771 392 149 +263 786 291 896 +263 712 104 613</span>
            </div>
            <div className={`w-[230px] h-[64px] rounded-full ${styles.flexCenter}`}>
                <img src={email} alt="email" className="w-[50%] h-[50%] object-contain" />
                <span className="ml-0"> curlben2023@gmail.com</span>
            </div>
            <div className={`w-[240px] h-[70px] rounded-full ${styles.flexCenter}`}>
                <img src={location} alt="location" className="w-[50%] h-[50%] object-contain" />
                <span className="ml-0"> Cnr Josiah Tongogara & Vintcent Drive, Vintcent Court, Mutare, Zimbabwe</span>
            </div>
         </div>

         <div className="flex flex-row mt-10">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6 ml-4" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>


         <div className='bg-white rounded-xl shadow-lg p-8 mt-10 text-gray-700'>
            <form className='flex flex-col space-y-4'>
              <div>
                <label className='text-sm'>Your Name</label>
                <input type ='text' placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-500'></input>
              </div>
              <div>
                <label className='text-sm'>Email</label>
                <input type ='text' placeholder='Your Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-500'></input>
              </div>

              <div>
                <label className='text-sm'>Message</label>
                <textarea rows="4" 
                placeholder='Message'
                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-500'></textarea>
              </div>
              <button className="inline-block self-end text-white font-bold rounded-lg px-6 py-2 uppercase bg-dimGreen text-sm ">Send Message</button>
            </form>

         </div>
         </div>

            </div>
         
         </div>

  )
}

export default Contact



  
