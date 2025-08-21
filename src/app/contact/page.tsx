"use client";



import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone , FaCheckCircle , FaTimesCircle} from "react-icons/fa";
import {motion} from "framer-motion";
import { fadeInUp, scaleIn } from "../utils/animations";


interface FormData{
  name : string;
  email : string;
  message : string;
}

type FormStatus= "idle" | "loading" | "success" | "error" ;

export default function ContactPage() {

  const [FormData , setFormData] =useState<FormData>({
    name : "",
    email : "",
    message : "",
  })

  const [status , setStatus] = useState("idle")

  const handleSubmit =async(e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading")
    try{
      const response = await fetch ("/api/contact" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(FormData)
      })
      if(!response.ok){
        throw new Error("Failed to send message")
      }

      setStatus("success");
      setFormData({
        name : "",
        email : "",
        message : "",
      })

    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,[e.target.name] : e.target.value
    }))
  }

  return (
    <section className="container max-w-7xl mx-auto py-20">
      <motion.h1 
      {...scaleIn}
      transition={{delay: 0.2}}
      className="text-4xl font-bold mb-20 text-center">Contact Me</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <motion.div
        {...fadeInUp}
        transition={{delay: 0.6}}
        className="space-y-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="text-secondary md:w-2/3">
            I&apos;m always open to discussing exciting projects, innovative
            ideas, or meaningful opportunities where I can contribute and add
            value.
          </p>
          <div className="space-y-4 ">
            <div className="flex items-center gap-4 transform transition-transform duration-300 hover:translate-x-2
            bg-white dark:bg-dark/50 p-6 rounded-lg">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:mr.rossy2020@gmail.com"
                  className="text-secondary 
                        hover:text-primary"
                >
                  Mr.rossy2020@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 transform transition-transform duration-300 hover:translate-x-2
            bg-white dark:bg-dark/50 p-6 rounded-lg">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <Link
                  href="tel:+201553936668"
                  className="text-secondary 
                        hover:text-primary"
                >
                  +201553936668
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 transform transition-transform duration-300 hover:translate-x-2
            bg-white dark:bg-dark/50 p-6 rounded-lg">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <div
                  className="text-secondary 
                        hover:text-primary"
                >
                  Egypt, New Cairo , Al Rehab City
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* contact info */}

        {/* contact form */}
        <motion.div
        {...fadeInUp}
        transition={{delay: 0.9}}
        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                required
                type="text"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                value={FormData.name}
                onChange={handleChange}
                className="h-16
              w-full px-4 py-2 rounded-md 
              border border-gray-300 focus:outline-none
              focus:border-0 focus:border-b-2 focus:border-primary 
              text-black placeholder:text-gray-500 
              dark:bg-dark dark:text-white dark:placeholder:text-gray-400"
              />
            </div>

            <div>
              <input
                required
                type="email"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                className="h-16
              w-full px-4 py-2 rounded-md 
              border border-gray-300 focus:outline-none
              focus:border-0 focus:border-b-2 focus:border-primary 
              text-black placeholder:text-gray-500 
              dark:bg-dark dark:text-white dark:placeholder:text-gray-400"
              />
            </div>

            <div>
            <textarea value={FormData.message}
                onChange={handleChange} required name="message" id="message" placeholder="Enter Your Message" className="resize-none w-full px-4 py-2 rounded-md 
              border border-gray-300 focus:outline-none h-36
              focus:border-0 focus:border-b-2 focus:border-primary 
              text-black placeholder:text-gray-500 
              dark:bg-dark dark:text-white dark:placeholder:text-gray-400"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary btn cursor-pointer font-bold text-1xl h-14 mt-3">
              {status === 'loading' ? "Sending..." : "Send Message"}
            </button>

            {
              status === "success" && (
                <span className="text-green-500 text-center flex items-center justify-center">Message Sent Successfully <FaCheckCircle className="
                ml-1"/></span>
              )
            }

{
              status === "error" && (
                <span className="text-red-500 text-center flex items-center justify-center">Failed to send message. Please try again <FaTimesCircle className="
                ml-1"/></span>
              )
            }

          </form>
        </motion.div>
        {/* contact form */}
      </div>
    </section>
  );
}
