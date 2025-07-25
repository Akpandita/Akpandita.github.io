"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="my-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <h2 className="major text-2xl font-semibold mb-4">Education</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image src="/images/education.jpg" width={300} height={200} alt="Education" className="rounded-lg object-cover" />
        <div>
          <p className="font-bold">Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
          <Image src="/images/img2.jpeg" width={300} height={200} alt="Education 2" className="rounded-lg object-cover my-2" />
          <p>I was born and brought up in Jammu, J&amp;K, India. Since childhood, I liked playing chess and watching Cartoon. All the studies upto higher secondary school, I have completed in Jammu. I completed my studies till class 10th in <b>SOS HERMANN GMIENER School</b>.Being an average student, I managed to score <b>10 CGPA</b> in my <b>Seconday School Certification (SSC)</b>.</p>
          <p>After that I completed my Higher Seconday School Certificate in <b>STEPHENS INTERNATIONAL PUBLIC SCHOOL</b>. In my <b>Higher Secondary School Certificate (HSSC)</b> I scored <b>93%</b> with <b>95.5%</b> in <b>PCM</b>.</p>
          <p>Currently, I&apos;m pursuing B.Tech. in INFORMATION TECHNOLOGY from <b>National Institute of Technology Karnataka, Surathkal</b> which is one of the best colleges in India. I&apos;m in the pre-final year with interest in coding and developement.</p>
        </div>
      </div>
    </motion.section>
  );
}
