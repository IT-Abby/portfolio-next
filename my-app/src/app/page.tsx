"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Navbar from "@/app/assets/components/navbar";
import { Button } from "./assets/components/custombutton";
import { Meteors } from "@/components/magicui/meteors";
import LottiePlayer from "./assets/components/LottiePlayer";
import Socials from "./assets/components/socials";
import Logo from "./assets/components/logo";
import ExperienceCard from "./assets/components/expcard";
import ProjectCard from "./assets/components/projectcard";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const projects = [
    {
      image: "/bdle.png",
      title: "BDLE: Beadle/Attendance Management System",
      description:
        "BDLE, an AdNU-based Beadle Attendance System which digitalizes the current system to streamline the process of checking attendance. With this it will increase the productivity and efficiency while saving lots of time and paperwork for both the students and the OSA Employees",
      tools: ["React", "CSS", "TypeScript", "Firebase"],
      link: "https://bdle.onrender.com/",
      status: "Completed",
    },
    {
      image: "/beepney project.png",
      title:
        "Beepney: Enhancing Commuter Experience and Safety Through Mobile Platform",
      description:
        "Beepney, is a web and mobile application that enhances your commuting experience. It offers several features Fare Calculator, Cashless Fare Payment, View Stations",
      tools: [
        "Next.Js",
        "React Native",
        "CSS",
        "TailWind",
        "TypeScript",
        "Supabase",
      ],
      link: "https://example.com",
      status: "In-Progress",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav>
        <Navbar
          links={[
            { label: "Home", href: "#Home" },
            { label: "About", href: "#About" },
            { label: "Skills", href: "#Skills" },
            { label: "Projects", href: "#Projects" },
          ]}
        />
      </nav>

      <main className="min-h-screen bg-black text-white overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Home Section */}
        <section
          id="Home"
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-6 sm:px-10 pt-10 sm:pt-20 max-w-7xl mx-auto"
        >
          <Meteors />
          <FadeInSection>
            <div className="flex-1 text-left w-full sm:max-w-[550px]">
              <h1 className="font-bold sm:text-5xl text-3xl leading-tight">
                WEB AND MOBILE APP SOFTWARE DEVELOPER
              </h1>
              <p className="sm:mt-5 mt-3 text-gray-300">
                Passionate developer crafting sleek, functional, user-focused
                <br className="hidden sm:block" />
                digital experiences, developing with modern tech stack tools
                <br className="hidden sm:block" /> and uses AI tools to boost
                production.
              </p>
              <div className="flex flex-row gap-2 mt-4">
                <Socials
                  href="https://facebook.com/gabsenar"
                  src="fb.svg"
                  alt="facebook"
                />
                <Socials
                  href="https://instagram.com/gabsenar"
                  src="ig.svg"
                  alt="instagram"
                />
                <Socials
                  href="https://github.com/IT-Abby"
                  src="github.svg"
                  alt="github"
                />
                <Socials
                  href="https://linkedin.com/in/gabriel-señar-it"
                  src="linkedin.svg"
                  alt="linkedin"
                />
              </div>
              <div className="mt-5">
                <Button className="bg-black" variant="outline" asChild>
                  <a
                    href="#About"
                    onClick={(e) => handleSmoothScroll(e, "#About")}
                    className="inline-flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex-1 flex justify-center items-center w-full sm:max-w-[600px] max-w-[700px]">
              <div className="w-full aspect-square">
                <LottiePlayer />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* About Section */}
        <section
          id="About"
          className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-15"
        >
          <FadeInSection>
            <h1 className="font-bold sm:text-5xl text-3xl leading-tight">
              About
            </h1>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-row gap-10">
              <Logo src="/adnu.png" alt="ck" />
              <Logo src="codekada.svg" alt="ck" />
              <Logo src="beepney.svg" alt="ck" />
            </div>
          </FadeInSection>

          <Image
            src="/star.svg"
            alt="star"
            width={32}
            height={32}
            className="absolute top-1/4 left-10 w-8 h-8 opacity-70"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={24}
            height={24}
            className="absolute top-1/3 right-20 w-6 h-6 opacity-50"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={40}
            height={40}
            className="absolute bottom-1/4 left-20 w-10 h-10 opacity-60"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={28}
            height={28}
            className="absolute bottom-1/3 right-10 w-7 h-7 opacity-80"
          />

          <FadeInSection>
            <p className="text-center max-w-[700px] leading-relaxed text-gray-300">
              I&apos;m Gabriel V. Señar a fourth-year undergraduate BS
              Information Technology student from Ateneo de Naga University — a
              passionate website and mobile application software developer
              turning ideas into functional systems that solve real problems and
              make life convenient for people.
              <br />
              <br />
              My journey started with HTML, CSS, and JavaScript, and I&apos;ve
              been exposed to modern dev tools during my senior year (Present)
              expanded to React, Next.js, React Native, Tailwind, TypeScript,
              and Supabase. Also, I learned how to use Github.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-row gap-10">
              <ExperienceCard label="Years Experience" value={2} />
              <ExperienceCard label="Projects Completed" value={2} />
              <ExperienceCard label="Certification" value={0} />
            </div>
          </FadeInSection>
        </section>

        {/* Skills Section */}
        <section
          id="Skills"
          className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-20"
        >
          <FadeInSection>
            <h1 className="font-bold sm:text-5xl text-3xl leading-tight">
              Skills & Experience
            </h1>
          </FadeInSection>

          <FadeInSection>
            <p className="text-center max-w-[750px] leading-relaxed text-gray-300">
              The main area of expertise is front-end development for both web
              and mobile apps. Building small or medium projects with
              Next.js/React (Web) and React Native (Mobile) with Tailwind,
              TypeScript, and Supabase.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-row flex-wrap gap-10 justify-center">
              {[
                { src: "/HTML logo.svg", alt: "HTML" },
                { src: "/CSS.svg", alt: "CSS" },
                { src: "/JS.svg", alt: "JavaScript" },
                { src: "/TS.svg", alt: "TypeScript" },
                { src: "/React.svg", alt: "React" },
                { src: "/Next.js logo.svg", alt: "Next.js" },
              ].map((icon) => (
                <motion.div
                  key={icon.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </motion.div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-row flex-wrap gap-10 justify-center">
              {[
                { src: "/React Native.svg", alt: "React Native" },
                { src: "/SB.svg", alt: "Supabase" },
                { src: "/Mongo.svg", alt: "MongoDB" },
                { src: "/Node.svg", alt: "Node.js" },
                { src: "/Figma.svg", alt: "Figma" },
                { src: "/Git.svg", alt: "Git" },
              ].map((icon) => (
                <motion.div
                  key={icon.src}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={80}
                    height={80}
                    className="w-20 h-20"
                  />
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Projects Section */}
        <section
          id="Projects"
          className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-20"
        >
          <FadeInSection>
            <h1 className="self-center font-bold sm:text-5xl text-3xl leading-tight mb-10">
              My Projects
            </h1>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-row gap-5">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  link={project.link}
                />
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section
          id="Contact"
          className="relative flex flex-col sm:flex-row items-center h-screen w-full justify-between gap-8 px-6 sm:px-10 pt-10 sm:pt-20 max-w-7xl mx-auto"
        >
          <Image
            src="/star.svg"
            alt="star"
            width={32}
            height={32}
            className="absolute top-1/4 left-10 w-8 h-8 opacity-70"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={24}
            height={24}
            className="absolute top-1/3 right-5 w-6 h-6 opacity-50"
          />
          <Image
            src="/star.svg"
            alt="star"
            width={40}
            height={40}
            className="absolute bottom-1/4 left-20 w-10 h-10 opacity-60"
          />
          <Image
            src="/star 2.svg"
            alt="star"
            width={28}
            height={28}
            className="absolute bottom-1/3 right-3 w-7 h-7 opacity-80"
          />

          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl z-0 pointer-events-none">
            <ShootingStars />
          </div>

          <FadeInSection>
            <div className="relative z-10 text-left mb-10 sm:mb-0">
              <h1 className="font-bold sm:text-5xl text-3xl leading-tight mb-6">
                Let&apos;s Build Something Great
              </h1>
              <p className="text-gray-300 text-lg max-w-md">
                Have a project in mind or just want to say hi? Fill out the form
                and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-100 max-w-md shadow-lg">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("THIS FEATURE IS NOT YET IMPLEMENTED!");
                }}
                className="flex flex-col gap-5"
              >
                <div>
                  <label className="block text-sm mb-2 text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-200">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-200">
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-white text-black font-semibold py-2 rounded-md hover:bg-white/80 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeInSection>
        </section>
      </main>
    </>
  );
}

export default App;
