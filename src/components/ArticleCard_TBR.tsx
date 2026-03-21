interface ArticleCard_TBRProps {
    color?: "gray" | "yellow" | "red"
    text: string;
}

const colors = {
    gray: "bg-gray-300",
    yellow: "bg-amber-400",
    red: "bg-red-400"
}

export default function ArticleCard_TBR({ text, color = "gray" }: ArticleCard_TBRProps) {
  return (
      <div className="relative w-72 sm:w-140 lg:w-120
                h-72 rounded-xl flex flex-col items-center gap-4 
                overflow-hidden shadow-[0_4px_18px_rgba(26,35,126,0.10)]">
      
      {/* Background image with independent opacity */}
      <img
        src="/ArticleCard_BG.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        alt=""
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-6 z-10">

        {/* Article Badge */}
        <div className={`px-6 py-1.5 rounded-full ${colors[color]} text-white font-semibold font-montserrat`}>
          {text}
        </div>

        <p className="self-stretch text-center text-slate-800 text-3xl font-bold font-montserrat">
          To be Released
        </p>

      </div>
    </div>
  )
}
