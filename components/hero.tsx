"use client";
import { Image } from "@nextui-org/react";

import { Spotlight } from "./ui/spotlight";
import { FlipWords } from "./ui/flip-words";

import { title } from "@/components/primitives";

export const Hero = () => {
  const words = ["better.", "cute ^^", "beautiful.", "modern."];

  return (
    <section className="md:my-20">
      <Spotlight className="-top-20 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-lg text-left justify-center z-10">
          <h1 className={title()}>Meet&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>Hanif.&nbsp;</h1>
          <br />
          <h1 className={title()}>
            I develop digital things and make it&nbsp;
          </h1>
          {/* <h1 className={title({ color: "blue" })}>
            make&nbsp;
          </h1>
          <h1 className={title()}>
            it&nbsp;
          </h1> */}
          <h1 className={title({ color: "blue" })}>
            <FlipWords
              className="text-blue-500 dark:text-blue-500"
              words={words}
            />{" "}
            <br />
          </h1>
          <div className="my-5" />
          {/* <Link
            role="button"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/blog"
          >
            <SearchIcon size={20} />
            Explore
          </Link> */}
        </div>
        <Image
          isBlurred
          alt="NextUI Album Cover"
          className="m-5"
          src="/images/me.png"
          width={240}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-8" />
    </section>
  );
};
