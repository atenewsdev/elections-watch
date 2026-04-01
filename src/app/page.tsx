import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import RoundedButton from "@/components/RoundedButton";
import Image from "next/image";
import ArticleCard from '@/components/ArticleCard'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start bg-[#F3F4FF] overflow-x-hidden">
    
      <PageHeader heading={"Elections\nWatch"} showLogo/>

      {/* Our Purpose */}
      <div className="w-full px-32 py-20 inline-flex flex-col items-center gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 text-4xl font-bold font-montserrat leading-tight">
            Our Purpose
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-md sm:text-lg lg:text-xl">
          An informed vote is a powerful one. Elections Watch exists to hold the electoral process accountable, 
          spotlight the platforms that shape student governance, and ensure that every Atenean voice is heard.
        </p>

      </div>

      {/* Know Your Leaders */}
      <div className="w-screen px-32 py-20 inline-flex flex-col items-center bg-[#E9EBFB] gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 text-4xl font-bold font-montserrat leading-tight text-center">
            Know your Leaders
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-md sm:text-lg lg:text-xl">
          Look into the candidate profiles and their platforms because an informed vote is a powerful one
        </p>

        {/* Carousel */}
        <Carousel />
        <RoundedButton href="/candidates-profile">
          View All Candidates
        </RoundedButton>

      </div>

      {/* Deep Dive */}
      <div className="w-screen px-32 py-20 inline-flex flex-col items-center gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 text-4xl font-bold font-montserrat leading-tight">
            The Deep Dive
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-md sm:text-lg lg:text-xl">
          Look into the critical analysis and in-depth discussion on the SAMAHAN Central Board
        </p>

        <div className="pt-12 pb-20 flex flex-col gap-12 lg:flex-row lg:gap-18 items-center">
                             
          <ArticleCard
            status="published"
            text="Editorial"
            header="All but a numbers game"
            leading="A new round of political reckoning begins—this time within the university. With the 2026 SAMAHAN Central Board (SCB) Elections set to select the next SCB on March 28 to 31, Ateneo de Davao University (AdDU) students will weigh which bets can truly steer campus politics in the right direction amid an increasingly polarized nation."
            color="red"
            href="/editorial"
          />

          <ArticleCard
            status="tbr"
            text="Year in Review"
            color="yellow"
          />

        </div>

      </div>
  
    </div>
  );
}
