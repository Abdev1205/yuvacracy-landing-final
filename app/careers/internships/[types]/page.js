"use client";
import React from "react";
import InternComponent from "@/components/careers/internships/internships-provided/InternComponent";
import nitiData from "@/components/careers/internships/internships-provided/(Internship-Data)/niti-data";
import vidhiData from "@/components/careers/internships/internships-provided/(Internship-Data)/vidhi-data";
import CareerLayout from "../../Layout";
import InternshipNav from "@/components/careers/internships/internships-provided/internshipNav";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import Process from "@/components/careers/internships/process/process";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const InternshipTypes = ({ params }) => {
  const router = useRouter();
  const path = usePathname();

  switch (params.types) {
    case "niti":
      return (
        <CareerLayout>
          <div
            id="niti"
            className="w-[100%] xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem]"
          >
            <SuspenseHandler>
              <ScrollHandler />
            </SuspenseHandler>
            <InternshipNav router={router} path={path} />
            <InternComponent {...nitiData} />
          </div>
          <Process />
        </CareerLayout>
      );
    case "vidhi":
      return (
        <CareerLayout>
          <div
            id="vidhi"
            className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem]"
          >
            <SuspenseHandler>
              <ScrollHandler />
            </SuspenseHandler>
            <InternshipNav router={router} path={path} />
            <InternComponent {...vidhiData} />
          </div>
          <Process />
        </CareerLayout>
      );
  }
};

export default InternshipTypes;
