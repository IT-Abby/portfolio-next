import Navbar from "@/app/assets/components/navbar";
import { Button } from "./assets/components/custombutton";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { Meteors } from "@/components/magicui/meteors";
import Card from "@/app/assets/components/card";
import { Marquee } from "@/components/magicui/marquee";

import Link from "next/link";

function App() {
  const cards = [
    {
      title: "<What Can I Do/>",
      subtitle:
        "> I can help develop solutions that\n  will help you grow your business",
      items: ["Front-end", "Info Sec & Sys Ad.", "Design"],
    },
    {
      title: "<Tools I Use/>",
      subtitle:
        "> I can help develop solutions that\n  will help you grow your business",
      items: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "<Other Skills/>",
      subtitle:
        "> I can help develop solutions that\n  will help you grow your business",
      items: ["Git", "Figma", "Testing"],
    },
  ];

  return (
    <>
      <pre className=" relative overflow-y-auto h-screen w-full scroll-smooth">
        <code>
          <div className="min-h-screen bg-black text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_80%)] blur-lg" />
            <Meteors />
            <ShootingStars
              starColor="#FFFFFF"
              trailColor="#FFFFFF"
              minSpeed={13}
              maxSpeed={13}
              minDelay={120}
              maxDelay={420}
            />
            <Navbar
              links={[
                { label: "Home", href: "#Home" },
                { label: "About", href: "#About" },
                { label: "Skills", href: "#Skills" },
                { label: "Projects", href: "#Projects" },
              ]}
            />

            {/* Main Content */}
            <main>
              {/* Home Section */}
              <section
                id="Home"
                className="relative z-10 flex flex-col lg:flex-row items-start mt-24 px-6 sm:px-10 lg:px-20 font-code gap-12 min-h-screen"
              >
                <div className="flex-col w-full lg:w-1/2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl">
                    {"<"}Hello I’m Gabriel{"/>"}
                  </h1>

                  <TypingText
                    text={[
                      " > Im a Front-End Web & Mobile Developer \n with a passion for building and \n intuitive a responsive apps.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={13}
                    showCursor={true}
                    cursorCharacter="|"
                    className="mt-5 text-base sm:text-lg md:text-xl text-left leading-relaxed"
                    textColors={["#FFFFFFF"]}
                    loop={true}
                  />

                  <div className="ml-2 sm:ml-5 mt-6 sm:mt-10">
                    <Button className="bg-black" variant="outline" asChild>
                      <Link href={"#About"}> Learn More</Link>
                    </Button>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-full lg:w-1/2 lg:ml-150">
                  {/* About Me */}
                  <h2 className="text-xl sm:text-2xl mt-8 sm:mt-10">
                    {"<"}About me{"/>"}
                  </h2>
                  <TypingText
                    text={[
                      " > A Web and Mobile Front-End Developer who is passionate about turning UI designs into interactive and user-friendly experiences.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={13}
                    showCursor={true}
                    cursorCharacter="|"
                    className="mt-3 sm:mt-4 ml-2 sm:ml-4 text-left text-sm sm:text-base md:text-lg leading-relaxed"
                    textColors={["#FFFFFFF"]}
                    loop={true}
                  />

                  <div className="ml-2 sm:ml-4 mt-5">
                    <Button className="bg-black" variant="outline" asChild>
                      <Link href={"#Skills"}> Learn More </Link>
                    </Button>
                  </div>

                  {/* My Skills */}
                  <h2 className="text-xl sm:text-2xl mt-12 sm:mt-16">
                    {"<"}My Skills{"/>"}
                  </h2>
                  <TypingText
                    text={[
                      " > I specialized in front-end development for web and mobile, with skills in React, Next.js, & React Native.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={13}
                    showCursor={true}
                    cursorCharacter="|"
                    className="mt-3 sm:mt-4 ml-2 sm:ml-4 text-left text-sm sm:text-base md:text-lg leading-relaxed"
                    textColors={["#FFFFFFF"]}
                    loop={true}
                  />

                  <div className="ml-2 sm:ml-4 mt-5">
                    <Button className="bg-black" variant="outline" asChild>
                      <Link href={"#Follow"}> Learn More</Link>
                    </Button>
                  </div>
                </div>
              </section>

              <section
                id="About"
                className=" relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-30 "
              >
                <Meteors />

                <h1 className="text-3xl mb-8">
                  {"<"}About Me{"/>"}
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-48 h-48 border rounded-lg overflow-hidden flex-shrink-0 lg:mr-50">
                    <img
                      src="/me.jpg"
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <p className="mt-3 lg:mr-40 sm:mt-4 ml-2 sm:ml-4 text-left text-sm sm:text-base md:text-lg leading-relaxed">
                      {">"} A fourth-year undergraduate BS IT student at{"\n"}
                      Ateneo de Naga University.
                    </p>
                    <p className="mt-3 lg:mr-40 sm:mt-4 ml-2 sm:ml-4 text-left text-sm sm:text-base md:text-lg leading-relaxed">
                      {">"} A front-end web and mobile developer that is very
                      {"\n"}
                      optimistic and enthusiast when it comes to technologies.
                    </p>

                    <p className="mt-3 lg:mr-40 sm:mt-4 ml-2 sm:ml-4 text-left text-sm sm:text-base md:text-lg leading-relaxed">
                      {">"} Currently focusing on developing my skills in
                      {"\n"}
                      front-end to have a solid foundation and skills when
                      {"\n"}
                      developing website's front-end.
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills*/}
              <section
                id="Skills"
                className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center gap-30 "
              >
                <ShootingStars
                  starColor="#FFFFFF"
                  trailColor="#FFFFFF"
                  minSpeed={13}
                  maxSpeed={13}
                  minDelay={120}
                  maxDelay={420}
                />

                <h1 className="text-3xl">
                  {"<"}What Can I Offer?{"/>"}
                </h1>
                <div className=" flex flex-col sm:flex-row flex-wrap gap-7 justify-center items-start">
                  {cards.map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      subtitle={card.subtitle}
                      items={card.items}
                    />
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section
                id="Projects"
                className="min-h-screen flex items-center justify-center"
              >
                <h2 className="text-3xl">
                  {"<"}Projects Section Content Here{"/>"}
                </h2>
              </section>

              {/* Contact */}
              <section
                id="Contact"
                className="min-h-screen flex items-center justify-center"
              >
                <h2 className="text-3xl">
                  {"<"}Let's Work Together!{"/>"}
                </h2>

                <div className=""></div>
              </section>

              <footer className="justify-end align-center">
                {/* Follow Me */}
                <h2 id="Follow" className="text-xl sm:text-2xl mt-10 sm:mt-25">
                  {"<"}Follow Me{"/>"}
                </h2>
                <div className="flex flex-row flex-wrap mt-4 gap-4">
                  <a href="https://www.facebook.com/gabsenar" target="_blank">
                    <img src="/fb.svg" alt="Facebook" width={40} height={40} />
                  </a>
                  <a
                    className="bg-black text-white rounded-lg hover:bg-white transition-colors duration-200 ease-in-out"
                    href="https://www.linkedin.com/in/gabriel-señar-it/"
                    target="_blank"
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://www.instagram.com/gabsenar" target="_blank">
                    <img src="/ig.svg" alt="Instagram" width={40} height={40} />
                  </a>
                  <a href="https://github.com/IT-Abby" target="_blank">
                    <img
                      src="/github.svg"
                      alt="Github"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </footer>
            </main>
          </div>
        </code>
      </pre>
    </>
  );
}

export default App;
