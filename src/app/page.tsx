import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import RoundedButton from "@/components/RoundedButton";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start bg-[#F3F4FF] overflow-x-hidden">
    
      <PageHeader heading={"Elections\nWatch"} showLogo/>

      {/* Our Purpose */}
      <div className="w-screen px-44 py-20 inline-flex flex-col items-center gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 text-4xl font-bold font-montserrat leading-tight">
            Our Purpose
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 text-xl font-normal font-montserrat text-center">
          About Us Text
        </p>

      </div>

      {/* Know Your Leaders */}
      <div className="w-screen px-44 py-20 inline-flex flex-col items-center bg-[#E9EBFB] gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 text-4xl font-bold font-montserrat leading-tight">
            Know your Leaders
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 text-xl font-normal font-montserrat text-center">
          Look into the candidate profiles and their platforms because an informed vote is a powerful one
        </p>

        {/* Carousel */}
        <Carousel />
        <RoundedButton text="View All Candidates" href="/candidates-profile" />

      </div>


      {/* Deep Dive */}
  
    </div>
  );
}
