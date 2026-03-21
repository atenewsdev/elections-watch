import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import RoundedButton from "@/components/RoundedButton";
import ArticleCard_TBR from "@/components/ArticleCard_TBR";
import ArticleCard_Published from "@/components/ArticleCard_Published";
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
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-md sm:text-lg lg:text-xl">
          About Us Text
        </p>

      </div>

      {/* Know Your Leaders */}
      <div className="w-screen px-44 py-20 inline-flex flex-col items-center bg-[#E9EBFB] gap-8">

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
      <div className="w-screen px-44 py-20 inline-flex flex-col items-center gap-8">

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

        <div className="pt-12 pb-20 flex flex-col gap-12 lg:flex-row lg:gap-18">
          
          {/*Comment if the articles are available*/}
          <ArticleCard_TBR text="Editorial" color="red"/>
          <ArticleCard_TBR text="A Year in Review" color="yellow"/>
          
          {/*Uncomment if the articles are available*/}
          {/* <ArticleCard_Published 
            text="Editorial" 
            color="red" 
            header="Against the crackdown on campus press" 
            leading="Renowned for its unyielding credibility and firmness in releasing socially-inclined articles pushing for institutional reforms, 
                     the campus press has not steered away from expressing the viewpoints of the afflicted student body and the masses it serves. 
                     As this is the case, student publications have also helped the youth develop a stronger sense of social responsibility—eventually 
                     resulting in active student involvement in pressing national issues." 
            href="/editorial" image="/ArticleCard_BG.jpg"/>
            
          <ArticleCard_Published 
            text="A Year in Review" 
            color="yellow" 
            header="Against the crackdown on campus press" 
            leading="Renowned for its unyielding credibility and firmness in releasing socially-inclined articles pushing for institutional reforms, 
                     the campus press has not steered away from expressing the viewpoints of the afflicted student body and the masses it serves. 
                     As this is the case, student publications have also helped the youth develop a stronger sense of social responsibility—eventually 
                     resulting in active student involvement in pressing national issues." 
            href="/year-in-review" image="/ArticleCard_BG.jpg"/>             */}
        </div>

      </div>
  
    </div>
  );
}
