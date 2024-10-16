import React from 'react'
import CustomTitle from '@/components/docs/CustomTitle'
import Image from 'next/image'
import { GetInvolved1Image, GetInvolvedImage } from '@/public/assetManager'
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';


const HomeGetInvolved = () => {
  return (
    <div className=' w-[100%] flex justify-center xl:px-[8rem] md_desktop:px-[6rem] lg:px-[5rem] md:px-[3rem] md_phone:px-[2rem] px-[1rem]  mt-[8rem] md:h-[22rem]  ' >
      <div className='rounded-[.9rem] relative  bg-primary md:w-[100%] w-[30rem] flex md:flex-row flex-col-reverse justify-between  ' >

        <div className='flex flex-col  md:w-[50%]  lg:pl-[4.5rem] md:pl-[2.5rem] px-[2rem] py-[2rem]  ' >
          <div>
            <div className="flex py-8 pt-2">
              <div>
                {/* <CustomTitle title={"Get Involved"} subtitle={"Get Involved"} /> */}
                <span className="text-3xl font-bold text-[#E0E0E0] font-montserrat">{"Get Involved"}</span>
                <div className="flex items-center py-2">
                  <div className="h-[0.3rem] max-w-[50%]  bg-[#E0E0E0] flex-grow mt-1 mr-2" />
                </div>
              </div>
            </div>
          </div>
          <p className=' text-[#DDD] font-openSans line-clamp-4 ' >Your support is vital to our mission. Whether you choose to donate, volunteer, or partner with us, your involvement helps us continue to empower young leaders.</p>
          <Link href={'/get-involved'} className='mt-[3rem] bg-white text-primary flex items-center gap-[.3rem] rounded-md font-montserrat font-[600]  px-[2.5rem] py-[.5rem] w-fit '>Learn More <MdOutlineArrowOutward /> </Link>
        </div>

        <div className='hidden md:block' >
          <Image
            src={GetInvolvedImage}
            alt='get Involved'
            className=' w-[20rem] pointer-events-none select-none '
          />

        </div>
        <div className='flex md:hidden' >
          <Image
            src={GetInvolved1Image}
            alt='get Involved'
            className=' w-[100%] rounded-t-[.9rem] pointer-events-none select-none '
          />

        </div>


      </div>

    </div>
  )
}

export default HomeGetInvolved
