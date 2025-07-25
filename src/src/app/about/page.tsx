"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="major text-2xl font-semibold mb-4">ABOUT ME</h2>
      <div className="inner mb-6">
        <p className="font-bold">Hii!! I&apos;m Akshay, INFORMATION TECHNOLOGY Student at NITK, Surathkal. I was born and brought up in Talab Tillo, Jammu, J&amp;K, India. I like playing chess, rules of survival and solving puzzles. Regarding tech skills, I do competitive coding a lot. I also like doing web developement and app developement.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image src="/images/prog.jpg" width={600} height={400} alt="Programming" className="rounded-lg object-cover w-full h-64" />
          <div className="inner mt-4">
            <h3 className="text-xl font-semibold">Languages/Markups</h3>
            <p>C, C++, C#, Python2, Python3, Java, HTML, CSS, Socket Programming</p>
            <p>For competitive coding, I use Python and sometimes C. I have basic understanding of Java as I haven&apos;t used it a lot but Android whatever is needed I have learnt. Rest three I have used many times in web developement.</p>
          </div>
        </div>
        <div>
          <img src="/images/unity.gif" width={600} height={400} alt="Game Development" className="rounded-lg object-cover w-full h-64" />
          <div className="inner mt-4">
            <h3 className="text-xl font-semibold">GAME DEVELOPMENT</h3>
            <p>UNITY-3D, BLENDER, MONODEVELOP</p>
            <p>I&apos;ve used UNITY-3D in making many VIRTUAL REALITY(VR) games and an android application for improving the speaking skills of a person (SPEECHMASTER).</p>
          </div>
        </div>
        <div>
          <Image src="/images/tools.png" width={600} height={400} alt="Tools and Framework" className="rounded-lg object-cover w-full h-64" />
          <div className="inner mt-4">
            <h3 className="text-xl font-semibold">Tools and Framework</h3>
            <p>Android Studio, Unity-3D, Cisco Packet Tracer, Socket Programming, Git, Matlab.</p>
            <p>I have used android studio quite a lot in android basic as well as advance projects. I have used Unity-3D in many games like First Person Shooting. Remaining framework I have used quite a lot. I have used Matlab in my Summer Internship project.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
