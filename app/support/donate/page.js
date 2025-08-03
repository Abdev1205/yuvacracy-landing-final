"use client";
import React from "react";
import SupportLayout from "../Layout";
import { DonateImg2, DonateUs } from "@/public/assetManager";
import { BsBarChartLine } from "react-icons/bs";
import Image from "next/image";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import { TbPointFilled } from "react-icons/tb";
import ImageTextComp1 from "@/components/common/TextComponents/ImageTextComp1";
import SubHead from "@/components/common/SubHeadings/SubHead";

const data = [
  {
    desc: "Research fellowships, internships, and workshops for law and policy students.",
  },
  { desc: "Legal awareness programs in colleges and communities." },
  {
    desc: "Youth-led initiatives on governance, justice, and civic participation.",
  },
  {
    desc: "Operational support to ensure continuity, outreach, and scale of our programs.",
  },
];

const donateHelpsUsPoints = [
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          <b>Educate and empower future legal professionals</b> through YCLA
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          <b>Train young changemakers in policy and governance</b> via YCPR
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Offer <b>free legal literacy programs</b> to students and communities
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex flex-row">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Provide <b>internships, research fellowships</b>, and{" "}
          <b>skill-building opportunities</b>
        </span>
      </div>
    ),
  },
  {
    desc: (
      <div className="flex">
        <TbPointFilled className="mt-[0.3rem] mr-2" />
        <span>
          Expand our impact as a growing platform for{" "}
          <b>legal and civic advocacy</b>
        </span>
      </div>
    ),
  },
];

const Donate = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div className="xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20 flex flex-col">
        <ImageTextComp1
          title={
            "Invest in India’s Legal and Policy Future. Donate to YuvaCracy"
          }
          subtitle={"Support Us"}
          desc={
            <>
              Every program we run whether it's a{" "}
              <b>research project, legal awareness workshop, </b>a{" "}
              <b>policy training fellowship, </b>or a{" "}
              <b>community outreach project</b> is powered by the commitment of
              people like you.
            </>
          }
          imgSrc={DonateUs}
          data={donateHelpsUsPoints}
        />

        {/* Why donate to YuvaCracy Section */}
        <SubHead
          title={"Why Donate to YuvaCracy?"}
          subtitle={
            <span>
              <b>Registered Section 8 Non-Profit</b> (under Companies Act, 2013)
              Recognized by <b>MCA</b>, <b>MSME</b>, and{" "}
              <b>NGO Darpan (NITI Aayog)</b>
              <b>ISO 9001:2015 Certified</b> for quality and transparency 100%
              of your contribution goes toward youth-centred programs and
              outreach.
            </span>
          }
        />

        <div className="flex flex-col md:flex-row items-center md:h-[38rem] mt-[6rem] md:mt-[12rem]">
          {/* Image Section */}
          <Image
            alt="YuvaCracy is a foundation for youth"
            className="w-full md:w-[50%] h-[20rem] md:h-[38rem] object-cover"
            src={DonateImg2}
          />

          {/* Donation Info Section */}
          <div className="bg-primary h-full flex flex-col justify-around text-white py-8 px-4 md:px-12 rounded-none md:rounded-r-lg w-full md:w-[50%]">
            <div>
              <span className="text-2xl font-bold sm:text-3xl font-montserrat">
                How your donation helps
              </span>
              <div className="flex items-center py-2">
                <div className="h-[0.3rem] max-w-[50%] bg-white flex-grow mt-1 mr-2" />
                <span className="italic text-nowrap text-white text-[1.1rem]">
                  YuvaCracy
                </span>
              </div>
            </div>
            <div className="font-montserrat text-[#E0E0E0] text-md">
              Your support directly funds:
            </div>
            {/* Donation Details */}
            <div className="flex flex-col p-2 space-y-4 md:p-4">
              {data.map((item, ind) => (
                <div
                  key={ind}
                  className="flex font-montserrat items-center text-md text-[#E0E0E0]"
                >
                  <BsBarChartLine className="w-6 h-6 m-2 mr-4" /> {item.desc}
                </div>
              ))}
            </div>

            {/* Amount Buttons */}
            <div className="flex flex-wrap justify-around gap-4 px-4 mt-4 md:px-10 sm_desktop:w-full">
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 100
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 500
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1000
              </button>
              <button className="border-2 border-[#B3B3B3] hover:bg-[#2d3a8d] font-openSans text-lg md:text-xl text-[#B3B3B3] py-2 px-4 rounded-xl">
                ₹ 1500
              </button>
            </div>

            {/* Donate Button */}
            <button className="w-full py-2 mt-6 font-bold text-blue-900 bg-white rounded md:mt-8">
              DONATE
            </button>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
};

export default Donate;
