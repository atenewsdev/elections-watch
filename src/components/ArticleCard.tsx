import Link from 'next/link'

interface ArticleCardProps {
  status: "published" | "tbr";
  color?: "gray" | "yellow" | "red";
  text: string;
  header?: string;
  leading?: string;
  href?: string;
  image?: string;
}

const colors = {
  gray: "bg-gray-300",
  yellow: "bg-amber-400",
  red: "bg-red-400"
}

export default function ArticleCard({ status, text, color = "gray", header, leading, href, image }: ArticleCardProps) {

  if (status === "tbr") {
    return (
      <div className="relative w-90 h-80 sm:w-140 sm:h-70 lg:w-120 lg:h-80 rounded-xl flex flex-col items-center overflow-hidden shadow-[0_4px_18px_rgba(26,35,126,0.10)]">

        {/* Background image */}
        <img
          src="/ArticleCard_BG.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          alt=""
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-6 z-10">
          <div className={`px-6 py-1.5 rounded-full ${colors[color]} text-white font-semibold font-montserrat`}>
            {text}
          </div>
          <p className="self-stretch text-center text-slate-800 text-2xl lg:text-3xl font-bold font-montserrat">
            To be Released
          </p>
        </div>

      </div>
    );
  }

  return (
    <div className="relative w-90 sm:w-140 lg:w-120 rounded-xl flex flex-col overflow-hidden shadow-[0_4px_18px_rgba(26,35,126,0.10)]">

      {/* Image
      <img className="w-full h-64 object-cover" src={image} alt={header} /> */}

      {/* Content */}
      <div className="flex flex-col gap-8 p-6">
        <div className="flex flex-col gap-3">

          {/* Badge */}
          <div className={`self-start px-4 py-1 rounded-full ${colors[color]} text-white text-sm font-semibold font-montserrat`}>
            {text}
          </div>

          {/* Header */}
          <h3 className="text-blue-400 text-3xl font-bold font-montserrat">
            {header}
          </h3>

          {/* Leading */}
          <p className="text-neutral-500 text-sm font-publico-roman text-justify">
            {leading}
          </p>

        </div>

        {/* Link */}
        <Link
          href={href ?? "#"}
          className="self-stretch px-6 py-3 bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg text-center text-white font-semibold font-montserrat">
          Read Article
        </Link>

      </div>
    </div>
  );
}