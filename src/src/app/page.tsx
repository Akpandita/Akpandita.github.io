
import Image from "next/image";

export default function Home() {
  return (
    <div id="wrapper" className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-black">
      {/* Header */}
      <header id="header" className="w-full max-w-4xl mx-auto py-8 flex flex-col items-center">
        <div className="logo mb-4">
          <span className="icon fa-diamond text-5xl text-blue-600" aria-hidden="true"></span>
        </div>
        <div className="content text-center">
          <div className="inner">
            <h1 className="text-3xl font-bold mb-2">Welcome to my personal website!</h1>
            <p className="mb-2">Hi! I am Akshay, PRE-FINAL YEAR INFORMATION TECHNOLOGY STUDENT AT NITK, SURATHKAL.<br />
              I LOVE COMPETITIVE CODING AND ANDROID DEVELOPMENT.</p>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex flex-wrap gap-4 justify-center">
            <li><a href="#about" className="hover:underline">ABOUT ME</a></li>
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#education" className="hover:underline">Education</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main" className="w-full max-w-4xl mx-auto flex-1 px-4">
        {/* About Section */}
        <section id="about" className="my-12">
          <h2 className="major text-2xl font-semibold mb-4">ABOUT ME</h2>
          <div className="inner mb-6">
            <p className="font-bold">Hii!! I'm Akshay, INFORMATION TECHNOLOGY Student at NITK, Surathkal. I was born and brought up in Talab Tillo, Jammu, J&K, India. I like playing chess, rules of survival and solving puzzles. Regarding tech skills, I do competitive coding a lot. I also like doing web developement and app developement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image src="/images/prog.jpg" width={600} height={400} alt="Programming" className="rounded-lg object-cover w-full h-64" />
              <div className="inner mt-4">
                <h3 className="text-xl font-semibold">Languages/Markups</h3>
                <p>C, C++, C#, Python2, Python3, Java, HTML, CSS, Socket Programming</p>
                <p>For competitive coding, I use Python and sometimes C. I have basic understanding of Java as I haven't used it a lot but Android whatever is needed I have learnt. Rest three I have used many times in web developement.</p>
              </div>
            </div>
            <div>
              <img src="/images/unity.gif" width={600} height={400} alt="Game Development" className="rounded-lg object-cover w-full h-64" />
              <div className="inner mt-4">
                <h3 className="text-xl font-semibold">GAME DEVELOPMENT</h3>
                <p>UNITY-3D, BLENDER, MONODEVELOP</p>
                <p>I've used UNITY-3D in making many VIRTUAL REALITY(VR) games and an android application for improving the speaking skills of a person (SPEECHMASTER).</p>
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
        </section>

        {/* Work Section */}
        <section id="work" className="my-12">
          <h2 className="major text-2xl font-semibold mb-4">Work</h2>
          <div className="inner">
            <h3 className="text-xl font-semibold mb-2">PROJECTS</h3>
            <p className="font-bold mb-4">In my current B.Tech., I have done some projects under various courses during college year. List of the projects I've done is mentioned below with GitHub link.</p>
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
                  <p>Its a student management system completely made in java with ellipse IDE. I didn't use database here to store information. Instead, I used files and its handling.<br /><a href="https://github.com/Akpandita/Student-management-system" target="_blank" className="text-blue-600 underline ml-2">GitHub</a></p>
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
        </section>

        {/* Education Section */}
        <section id="education" className="my-12">
          <h2 className="major text-2xl font-semibold mb-4">Education</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image src="/images/education.jpg" width={300} height={200} alt="Education" className="rounded-lg object-cover" />
            <div>
              <p className="font-bold">Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
              <Image src="/images/img2.jpeg" width={300} height={200} alt="Education 2" className="rounded-lg object-cover my-2" />
              <p>I was born and brought up in Jammu, J&K, India. Since childhood, I liked playing chess and watching Cartoon. All the studies upto higher secondary school, I have completed in Jammu. I completed my studies till class 10th in <b>SOS HERMANN GMIENER School</b>.Being an average student, I managed to score <b>10 CGPA</b> in my <b>Seconday School Certification (SSC)</b>.</p>
              <p>After that I completed my Higher Seconday School Certificate in <b>STEPHENS INTERNATIONAL PUBLIC SCHOOL</b>. In my <b>Higher Secondary School Certificate (HSSC)</b> I scored <b>93%</b> with <b>95.5%</b> in <b>PCM</b>.</p>
              <p>Currently, I'm pursuing B.Tech. in INFORMATION TECHNOLOGY from <b>National Institute of Technology Karnataka, Surathkal</b> which is one of the best colleges in India. I'm in the pre-final year with interest in coding and developement.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-12">
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
                <span>H.NO.31,Opp. Amar Colony,<br />Talab Tillo,Jammu<br />J&K, India-180002</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="w-full py-4 text-center text-gray-500">
        <p className="copyright">&copy;Design: Akshay Pandita.</p>
      </footer>
    </div>
  );
}
