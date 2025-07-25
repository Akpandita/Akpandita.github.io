"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <motion.section
      id="work"
      className="my-12 rounded-2xl shadow-xl bg-black/80 text-white backdrop-blur-md border border-white/20 px-6 py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h2 className="major text-2xl font-semibold mb-4">Work</h2>
      <div className="inner">
        <h3 className="text-xl font-semibold mb-2">PROJECTS</h3>
        <p className="font-bold mb-4">In my current B.Tech., I have done some projects under various courses during college year. List of the projects I&apos;ve done is mentioned below with GitHub link.</p>
        <div className="space-y-8">
          {/* Project 1 */}
          <div>
            <h4 className="font-semibold">MINI ROUTER USING VAN-EMDE-BOAS TREE</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/rout.jpeg" width={200} height={120} alt="Mini Router" className="rounded-lg object-cover" />
              <p>The project involved the implementation of Van Emde Boas trees (all of its functions) in python and its usage to assign different ports to devices having different IP addresses..<br /><a href="https://github.com/Akpandita/Mini-Router" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 2 */}
          <div>
            <h4 className="font-semibold">MINESWEEPER GAME IN BASH</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/mine.PNG" width={200} height={120} alt="Minesweeper" className="rounded-lg object-cover" />
              <p>The project involved making a minesweeper game using shell commands. This game had various levels for the user to choose and x-coordinate and y-coordinate for choosing various elements of matrix.<br /><a href="https://github.com/Akpandita/Minesweeper-Game" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 3 */}
          <div>
            <h4 className="font-semibold">FIRST PERSON SHOOTING GAME IN VIRTUAL REALITY</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/fps.jpg" width={200} height={120} alt="FPS VR Game" className="rounded-lg object-cover" />
              <p>This was a VR Game in which graphics were made in blender and unity 3D was used as the environment. In this game, the enemies will come from all directions and we need to aim and kill them in virtual reality.<br /><a href="https://github.com/Akpandita/fps-vr-game" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 4 */}
          <div>
            <h4 className="font-semibold">PLAGIARISM DETECTOR</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/plag.png" width={200} height={120} alt="Plagiarism Detector" className="rounded-lg object-cover" />
              <p>This was a project on using the Rabin-karp algorithm and ahocorasick algorithm with bloom filter data structure to check the percentage of plagiarism of one file with respect to the source file and vice versa.<br /><a href="https://github.com/Akpandita/Plagarism-Detector" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 5 */}
          <div>
            <h4 className="font-semibold">STUDENT MANAGEMENT SYSTEM</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/stud.png" width={200} height={120} alt="Student Management System" className="rounded-lg object-cover" />
              <p>Its a student management system completely made in java with ellipse IDE. I didn&apos;t use database here to store information. Instead, I used files and its handling.<br /><a href="https://github.com/Akpandita/Student-management-system" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 6 */}
          <div>
            <h4 className="font-semibold">YET ANOTHER COMPILER COMPILER</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/yacc.jpg" width={200} height={120} alt="YACC" className="rounded-lg object-cover" />
              <p>This was a project to make your own compile using lex and yacc. A grammar was given and we just needed to make a language out of that grammar.<br /><a href="https://github.com/Akpandita/yacc" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
          {/* Project 7 */}
          <div>
            <h4 className="font-semibold">BLACKJACK GAME</h4>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Image src="/images/black.jpg" width={200} height={120} alt="Blackjack Game" className="rounded-lg object-cover" />
              <p>This was a game to make used to blackjack game between server and clients. It was basically a game between 1 master and 3 slaves.<br /><a href="https://github.com/Akpandita/BlackJack-Game" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
