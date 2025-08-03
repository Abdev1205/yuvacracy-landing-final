"use client";
import React from "react";
import SupportLayout from "../Layout";
import CustomTitle from "@/components/docs/CustomTitle";
import GetInTouchCard from "@/components/support/GetInTouchCard";
import { GetInvolved } from "@/public/assetManager";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SuspenseHandler from "@/utils/SuspenseHandler";
import ScrollHandler from "@/utils/ScrollHandler";
import { TbPointFilled } from "react-icons/tb";
import SubHead from "@/components/common/SubHeadings/SubHead";

const points = [
  {
    desc: (
      <>
        Registered with <b>Ministry of Corporate Affairs</b>, <b>MSME</b>, and{" "}
        <b>NITI Aayog</b> (NGO Darpan)
      </>
    ),
  },
  {
    desc: (
      <>
        Strong foothold in <b>policy and legal education</b>
      </>
    ),
  },
  {
    desc: <>Youth-driven, impact-oriented, and future-facing</>,
  },
  // { desc: "Safe & Inclusive" },
  // { desc: "Community Impact" },
];

const PartnerWithUs = () => {
  return (
    <SupportLayout>
      <SuspenseHandler>
        <ScrollHandler />
      </SuspenseHandler>
      <div
        id="partner-div"
        className="flex flex-col xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem] pt-20"
      >
        <CustomTitle
          title={"Partner with Us"}
          subtitle={"Partner with YuvaCracy"}
        />
        <span className="text-lg font-montserrat text-textSecond">
          At <b>YuvaCracy,</b> we believe that meaningful change happens when
          passionate minds and visionary institutions come together. Whether
          you're an <b>educational institution</b>, a{" "}
          <b>non-profit organization</b>, a <b>corporate entity</b>, or a{" "}
          <b>government body</b>, there's a place for you in our mission.{" "}
        </span>

        <div className="pt-12">
          <CustomTitle title={"Who Can Partner?"} subtitle={""} />
          <SubHead
            title={"Educational Institutions"}
            subtitle={
              <>
                Collaborate with us to deliver hands-on legal and policy
                education through guest lectures, faculty exchanges, joint
                research, internships, legal awareness drives, and certificate
                programs. Let’s co-create a next-generation learning experience
                that goes beyond the classroom.
              </>
            }
          />
          <SubHead
            title={"Corporate Partners"}
            subtitle={
              <>
                Join us in building a socially responsible legal and civic
                ecosystem. Through CSR programs, employee engagement, and
                sponsored initiatives, you can help drive legal literacy, policy
                innovation, and grassroots impact. Align your CSR goals with
                real change on the ground.
              </>
            }
          />
          <SubHead
            title={"NGOs & Civil Society"}
            subtitle={
              <>
                Team up for advocacy, legal aid outreach, and policy dialogues. We welcome collaborations on workshops, field projects, and issue-based campaigns that promote justice, rights, and governance reform.
              </>
            }
          />
          <SubHead
            title={"Legal Bodies & Law Firms"}
            subtitle={
              <>
                Let’s strengthen the legal profession together. Mentor our students, host practical workshops, co-organize legal research projects, or support our litigation and awareness initiatives through strategic alliances.
              </>
            }
          />
          <SubHead
            title={"Government & Policy Institutions"}
            subtitle={
              <>
                Work with us to amplify youth voices in public decision-making. Through policy consultations, youth parliaments, research partnerships, and capacity-building programs, we aim to create a bridge between the citizen and the state.
              </>
            }
          />
        </div>

        <div className="flex flex-col w-full py-24 md:flex-row">
          <div className="md:w-[40%] md:mr-12 w-full flex md:justify-left justify-center">
            <Image
              alt="YuvaCracy is a foundation for youth"
              className="md:w-[28rem] w-[20rem]"
              src={GetInvolved}
            />
          </div>
          <div className="md:w-[40%] w-full flex flex-col gap-4 px-4">
            <CustomTitle
              title={"Why Partner With Us?"}
              subtitle={"YuvaCracy"}
            />
            <div className="pt-4">
              {points.map((item, ind) => (
                <div key={ind} className="flex items-center py-4">
                  <TbPointFilled className="mt-[0.3rem] mr-2" />
                  <span className="w-full text-lg font-openSans">
                    {" "}
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <GetInTouchCard />
      </div>
    </SupportLayout>
  );
};

export default PartnerWithUs;
