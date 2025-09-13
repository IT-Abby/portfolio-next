import Navbar from "@/app/assets/components/navbar";
import { Button } from "./assets/components/custombutton";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";
import TypingText from "@/components/ui/shadcn-io/typing-text";

import Link from "next/link";
function App() {
  return (
    <>
      <pre>
        <code>
          <div className="relative min-h-screen bg-black text-white">
            <ShootingStars
              starColor="#FFFFFF"
              trailColor="#FFFFFF"
              minSpeed={13}
              maxSpeed={13}
              minDelay={120}
              maxDelay={420}
            />
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_100%)] blur-4xl" />

            <Navbar />

            {/* Intro */}
            <main className="relative z-10 flex items-start mt-24 ml-55 font-code">
              <div className="flex-col">
                <h1 className="text-3xl">
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
                  className="mt-5  text-lg text-left"
                  textColors={["#FFFFFFF"]}
                  loop={true}
                />

                <div className="ml-5 mt-10">
                  <Button variant="outline" asChild>
                    <Link href={"#"}> Learn More</Link>
                  </Button>
                </div>
              </div>
              {/* About Me */}
              <div className=" flex-start ml-200">
                <h2 className="text-2xl mt-4">
                  {"<"}About me{"/>"}
                </h2>

                <TypingText
                  text={[
                    " > Im a Front-End Web & Mobile Developer \n with a passion for building and \n intuitive a responsive apps.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={13}
                  showCursor={true}
                  cursorCharacter="|"
                  className="mt-2 ml-4 text-left"
                  textColors={["#FFFFFFF"]}
                  loop={true}
                />

                <div className="ml-4 mt-5">
                  <Button variant="outline" asChild>
                    <Link href={"#"}> Learn More</Link>
                  </Button>
                </div>

                <h2 className="text-2xl mt-30">
                  {"<"}My Skills{"/>"}
                </h2>
                <TypingText
                  text={[
                    " > Im a Front-End Web & Mobile Developer \n with a passion for building and \n intuitive a responsive apps.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={13}
                  showCursor={true}
                  cursorCharacter="|"
                  className="mt-2 ml-4 text-left"
                  textColors={["#FFFFFFF"]}
                  loop={true}
                />

                <div className="ml-2 mt-5">
                  <Button variant="outline" asChild>
                    <Link href={"#"}> Learn More</Link>
                  </Button>
                </div>

                <h2 className="text-2xl mt-25">
                  {"<"}Follow Me{"/>"}
                </h2>

                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://www.facebook.com/gabsenar" target="_blank">
                    <img src="/fb.svg" alt="Facebook" width={30} height={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabriel-señar-it/"
                    target="_blank"
                  >
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="https://www.instagram.com/gabsenar" target="_blank">
                    <img src="/ig.svg" alt="Instagram" width={30} height={30} />
                  </a>
                  <a href="https://github.com/IT-Abby" target="_blank">
                    <img
                      src="/github.svg"
                      alt="Github"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </main>
          </div>
        </code>
      </pre>
    </>
  );
}

export default App;
