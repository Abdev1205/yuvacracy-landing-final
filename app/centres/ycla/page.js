"use client";
import React from "react";
import CentreLayout from "../Layout";
import SubHead from "@/components/common/SubHeadings/SubHead";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import { MeetingImg, PeopleGroup1, PeopleGroup2 } from "@/public/assetManager";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";

const DevelopmentData = [
  {
    title: "Core Modules: ",
    desc: "Topics include Ethical Leadership, Community Organizing, and Conflict Resolution.",
  },
  {
    title: "Specialized Tracks: ",
    desc: "Participants can choose to focus on areas such as Environmental Leadership, Social Entrepreneurship, or Public Health.",
  },
];

const DevelopmentData1 = [
  {
    title: "Project Examples: ",
    desc: "From organizing community clean-ups to leading health awareness campaigns, our participants tackle projects that address the most pressing needs of their communities.",
  },
  {
    title: "Before and After Photos: ",
    desc: "Show the impact of these projects with before-and-after images that tell a powerful story of transformation.",
  },
];

const DevelopmentData2 = [
  {
    title: "Mentorship Program: ",
    desc: "Each participant is paired with a mentor who guides them through their leadership journey, offering support and practical advice.",
  },
  {
    title: "Networking Events: ",
    desc: "We organize events where participants can connect with leaders from various sectors, expanding their professional network.",
  },
];

const Ycla = () => {
  return (
    <CentreLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="ycla-div"
        className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] flex flex-col"
      >
        <SubHead
          title={"YuvaCracy Centre for Legal Affairs (YCLA)"}
          subtitle={
            "YuvaCracy Centre for Legal Affairs (YCLA) invites you to explore the dynamic world of law and governance. Our mission is to bridge the gap between academic learning and real-world expertise, shaping the next generation of legal professionals who are ready to lead and innovate."
          }
        />

        <ImageTextComp1
          title={"Legal Research"}
          subtitle={""}
          imgSrc={MeetingImg}
          customTextStyle="md:pt-12"
          desc={
            <div>
              {/* <span className="text-xl font-bold">Legal Research</span>
              <br /> */}
              <span className="text-xl">
                Dive deep into the frameworks of law, governance, policy, and
                justice. Our research initiatives encourage exploration,
                analysis, and innovation to tackle contemporary legal
                challenges. Our programs guide students and young professionals
                in conducting meaningful, application-based legal research.
              </span>
            </div>
          }
          data={""}
        />

        <ImageTextComp1
          mirror={true}
          title={"Quality Internships"}
          subtitle={"Turning knowledge into Action"}
          customTextStyle="md:pt-12"
          desc={
            <span className="text-xl">
              We connect motivated law students with high-impact internships that offer real-world legal exposure. These experiences are carefully curated to enhance skills, build confidence, and help define career paths.
            </span>
          }
          data={""}
          imgSrc={PeopleGroup1}
        />

        <ImageTextComp1
          title={"Skill-Building & Practical Training"}
          subtitle={""}
          customTextStyle="md:pt-12"
          desc={
            <span className="text-xl">
              From legal writing and reading bare acts to mooting, advocacy, and legal reasoning, our hands-on workshops are designed to translate classroom theory into courtroom and professional readiness.
            </span>
          }
          data={""}
          imgSrc={PeopleGroup2}
        />

        <ImageTextComp1
          mirror={true}
          title={"Community & Events"}
          customTextStyle="md:pt-12"
          subtitle={"Be part of a vibrant network"}
          desc={
            <span className="text-xl">
              YCLA hosts interactive legal seminars, panel discussions, and policy conferences that bring together students, advocates, researchers, and educators. These platforms spark dialogue, encourage collaboration, and build a vibrant legal community.
            </span>
          }
          data={""}
          imgSrc={PeopleGroup1}
        />
      </div>
    </CentreLayout>
  );
};

export default Ycla;
