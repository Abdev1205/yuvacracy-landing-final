import React from "react";
import PrimaryButton from "../common/Button/PrimaryButton";
import { MdOutlineCallMade } from "react-icons/md";
import CustomTitle from "../docs/CustomTitle";

const data = {
  title: "Get in Touch",
  execute: () => { },
}

const GetInTouchCard = () => {
  return (
    <div className="pt-20">
      <CustomTitle title={"Get In Touch"} subtitle={"Contact Us"} />
      <span className="text-lg text-textSecond font-openSans">
        If you're ready to co-create impact, let's connect. <br/>
        Fill out our <b>Partnership Interest Form</b> below.
        <br/>
        <br/>
        Together, let's <b>educate</b>, <b>empower</b>, and <b>evolve</b> a generation that leads with law, policy, and purpose.
      </span>
      <div className="pt-8">
        <PrimaryButton data={data} icon={<MdOutlineCallMade />} />
      </div>
    </div>
  );
};

export default GetInTouchCard;
