"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="my-12 rounded-2xl shadow-xl bg-black/80 text-white backdrop-blur-md border border-white/20 px-6 py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      <h2 className="major text-2xl font-semibold mb-4">Contact</h2>
      <div className="inner">
        <form id="gform" method="post" action="https://script.google.com/macros/s/AKfycbwlGBvs2vZ_-09ww_vHm_cvMIyw8_L7jb2GZf9E/exec" className="space-y-4 max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium">Name</label>
              <input type="text" name="name" id="name" className="w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <input type="text" name="email" id="email" className="w-full border rounded px-2 py-1" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block font-medium">Message</label>
              <textarea name="message" id="message" rows={6} className="w-full border rounded px-2 py-1"></textarea>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <button type="submit" className="primary bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
            <button type="reset" className="bg-gray-200 text-black px-4 py-2 rounded">Clear</button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="contact-method">
            <span className="icon alt fa-envelope" aria-hidden="true"></span>
            <h3 className="font-semibold">Email</h3>
            <span>akshaypandita20000@gmail.com</span>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-phone" aria-hidden="true"></span>
            <h3 className="font-semibold">Contact</h3>
            <span>+91 8825079635</span><br />
            <span>+91 9686191588</span>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-home" aria-hidden="true"></span>
            <h3 className="font-semibold">Address</h3>
            <span>H.NO.31,Opp. Amar Colony,<br />Talab Tillo,Jammu<br />J&amp;K, India-180002</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
