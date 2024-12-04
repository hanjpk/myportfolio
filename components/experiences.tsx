"use client";
import React from "react";
import { Image } from "@nextui-org/react";

import { Timeline } from "./ui/timeline";

export const Experiences = () => {
  const data = [
    {
      title: "Aug 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Me and my friends joined a hackathon called AI Datathon 2024. This
            event was focusing on using AI for an action of a climate change. We
            built a machine learning model to enhance or downscale the current
            weather data grid.
          </p>
          <Image
            isBlurred
            isZoomed
            alt="startup template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            height={900}
            src="/images/datathon.jpg"
            width={670}
          />
          <div className="my-5" />
        </div>
      ),
    },
    {
      title: "July 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Built and launched a display website for marine weather and a air
            quality (also with the sensor) of Kamal Muara. This is a part of
            community service program from my campus. This website uses ajax so
            it will automatically up to the date.
          </p>
          <Image
            isBlurred
            isZoomed
            alt="startup template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            height={420}
            src="/images/kkn.png"
            width={670}
          />
          <div className="my-5" />
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            I completed a 4-month internship at Network and Communication Center
            (Pusjarkom) of BMKG. During this time, I worked on various projects,
            including fullstack development, UI/UX design, network
            troubleshooting, multimedia and streaming, and server management. I
            also gained valuable experience in team collaboration and project
            management.
          </p>
          <Image
            isBlurred
            isZoomed
            alt="startup template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            height={420}
            src="/images/magang.JPG"
            width={670}
          />
          <div className="my-5" />
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            I and my team ran a research about making a flood early warning
            system. I built the data transimission code, so i code the
            microcontroller in the monitoring tool, code the API, and also the
            database. That was very backend development.
          </p>
          <Image
            isBlurred
            isZoomed
            alt="startup template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            height={700}
            src="/images/pupt.jpeg"
            width={670}
          />
          <div className="my-5" />
        </div>
      ),
    },
    {
      title: "Oct 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            I became the person in charge of Wisuda STMKG 2023&apos;s streaming.
            That was so much fun. I learned how to integrate video input from
            camera to the video controller.
          </p>
          <Image
            isBlurred
            isZoomed
            alt="startup template"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            height={700}
            src="/images/wisuda.jpeg"
            width={670}
          />
          <div className="my-5" />
        </div>
      ),
    },
  ];

  return (
    <section>
      <Timeline data={data} />
    </section>
  );
};
