import PageHeader from "@/components/PageHeader";
import Carousel from "@/components/Carousel";
import RoundedButton from "@/components/RoundedButton";
import Image from "next/image";
import ArticleCard from '@/components/ArticleCard'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-start bg-[#F3F4FF] overflow-x-hidden">
    
      <PageHeader heading={"Elections\nWatch 2026"} showLogo/>

      {/* Our Purpose */}
      <div className="w-full px-12 md:px-16 lg:px-32 xl:px-64 py-20 inline-flex flex-col items-center gap-8 text-center">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 font-bold font-montserrat leading-tight text-2xl md:text-4xl lg:text-4xl">
            VISION
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-sm sm:text-lg md:text-xl">
          To achieve an advocacy-oriented student government centered on pro-student and pro-people governance, the social context warrants an unrelenting act of challenging the status quo—fighting back against oppressors and rallying along with the underserved. 
          <br /> <br /> In the following days, students will assess the candidates vying for the mantle of genuine student leadership and select whom they deem fit to spearhead their campaigns.
          <br /> <br /> This year, Atenews presents #AtenewsElectionsWatch, the publication’s special coverage of the SAMAHAN Central Board Elections. <span className="font-semibold">The election will run from March 28-31, 2026.</span> 
        </p>

      </div>

      {/* Know Your Leaders */}
      <div className="w-screen px-12 md:px-16 lg:px-32 xl:px-64 py-20 inline-flex flex-col items-center bg-[#E9EBFB] gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 font-bold font-montserrat leading-tight text-center text-2xl md:text-4xl lg:text-4xl">
            KNOW YOUR STUDENT LEADERS
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-md sm:text-lg md:text-xl">
          Look into the candidates' profiles and platforms here.
        </p>

        {/* Carousel */}
        <Carousel />
        <RoundedButton href="/candidates-profile">
          View All Candidates
        </RoundedButton>

      </div>

      {/* Deep Dive */}
      <div className="w-full px-12 lg:px-32 py-20 inline-flex flex-col items-center gap-8">

        {/* Section Heading */}
        <div className="self-stretch flex flex-col items-center gap-6">
          <p className="text-blue-400 font-bold font-montserrat leading-tight text-2xl md:text-4xl lg:text-4xl">
            INQUEST
          </p>
          <div className="w-40 border-t-2 border-blue-400"/>
        </div>

        {/* Section Body */}
        <p className="self-stretch text-blue-400 font-normal font-montserrat text-center leading-snug
                     text-sm sm:text-lg lg:text-xl">
          Look into the critical analysis and in-depth discussion on the SAMAHAN Central Board.
        </p>

        <div className="pt-12 pb-20 flex flex-col gap-12 lg:flex-row lg:gap-18">
                             
          <ArticleCard
            status="tbr"
            text="Editorial"
            color="red"
          />

          <ArticleCard
            status="tbr"
            text="AY in Review"
            color="yellow"
          />

        </div>

      </div>
  
    </div>
  );
}
