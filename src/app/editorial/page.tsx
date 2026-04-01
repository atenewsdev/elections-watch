import ToBeReleased from "@/components/ToBeReleased"

export const linkStyles = "text-blue-300 underline hover:text-blue-400 transition-colors";

export default function EditorialPage() {
  return (
    <main className="w-full flex flex-col items-center">

      {/* <ToBeReleased /> */}

      {/* Uncomment the code below when the article is ready to be published */}
      {/* <div className="w-full h-133.5 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/ArticleCard_BG.jpg"
          alt="Article hero"
          height={1536}
          width={2048}
        />
      </div> */}

      <article className="w-full max-w-271 px-10 flex flex-col gap-10 py-14">

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">

            <span className="self-start px-6 py-2.5 bg-red-400 rounded-full text-white text-2xl font-semibold font-montserrat">
              Editorial
            </span>

            <h1 className="text-blue-400 text-5xl lg:text-7xl font-bold font-montserrat leading-tight">
              All but a numbers game
            </h1>

            <p className="text-gray-600 text-base font-semibold font-montserrat">
              By Atenews
            </p>
          </div>
        </div>

        <hr className="border-blue-400" />

        <div className="text-gray-600 text-md lg:text-xl font-['Publico_Text'] leading-6 lg:leading-8 flex flex-col gap-6 pb-24">

          <p>
            A new round of political reckoning begins—this time within the university. With the 2026 SAMAHAN Central Board (SCB) Elections set to select the next SCB on March 28 to 31, Ateneo de Davao University (AdDU) students will weigh which bets can truly steer campus politics in the right direction amid an increasingly polarized nation.
          </p>

          <p>
            It has been a loud campaign period for all parties running for a position in the SCB, and within the noise are the candidates’ promises, commitments, and platforms, backed with testimonies from their colleagues, that they will enact should they be given the chance to lead in the upcoming academic year. In the nature of politics and partisanship, they have imprinted their identity signifying their association with a political party, or the lack thereof. 
          </p>

          <p>
            The university’s political landscape over the past five years has been shaped by three parties: Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista (PIGLASAPAT), BAHAGHARI, and Ateneans for Governance, Innovation, Leadership, and Service (AGILAS). In the recent election cycles, PIGLASAPAT fields the overwhelming majority of candidates, while opposition presence remains sparse. AGILAS is also noticeably absent from the race this year.
          </p>

          <p>
            Out of the total positions open for this year’s elections, <a href="https://elections-watch.vercel.app/candidates-profile " className={linkStyles}>11 remain uncontested</a>. Across the SCB, all four top positions are occupied by aspirants from PIGLASAPAT, with no opposing bets fielded against them. Meanwhile, for the cluster representatives, only the Social Sciences cluster has two contenders; the others are unopposed, and no candidates have filed for the Natural Sciences and Mathematics and the School of Education clusters. 
          </p>

          <p>
            This is also not without precedent. <a href="https://atenews.ph/scb-25-takes-office-outlines-student-centered-governance" className={linkStyles}>Last year</a>, we saw PIGLASAPAT securing all four core positions, ushering in a Central Board led by incumbent president Hannah Aquino. The party’s slate extended beyond, securing a significant portion of cluster representative seats and reestablishing its dominance after a brief interruption <a href="https://atenews.ph/bahaghari-ends-ten-year-dry-spell-in-scb-elections-24-sweeps-top-3" className={linkStyles}>in 2024</a> when BAHAGHARI swept the top three seats. Opposition parties maintained limited footholds: BAHAGHARI secured two cluster seats, while AGILAS won one in a competitive three-way race. Despite these wins, they remained numerically outpaced by PIGLASAPAT’s majority.
          </p>

          <p>
            This year’s roster reflects a continuation—and arguably an intensification—of this imbalance.
          </p>

          <p>
            Over the years, several candidates vying for higher office are not newcomers but familiar figures within the same political network. But this year, what emerges, then, is not simply a list of candidates, but a clearer picture of the electoral landscape itself—one where the outcome of several races is determined less by contestation, and more by the absence of it.
          </p>

          <p>
            The lack of multi-party competition recently has created a soft hegemony over the top seats in SCB elections. In the absence of competition, PIGLASAPAT has created a vague legitimate form of succession, in which the chances of an aspiring candidate winning the position also rest on incumbent officers from the same political party's endorsements and overall competence while in office, rather than on the candidate's personal platforms and values. 
          </p>

          <p>
            Although a political party could clinch the SCB top posts, this does not automatically translate into winning more seats–possibly affecting how they could fulfill campaign promises. Despite PIGLASAPAT having a monopolistic grip on student governance for decades, a political party’s ability to sway students to vote for their whole slate does not only determine the number of victors and vanquished they will get in an election. 
          </p>

          <p>
            Of course, there’s no argument to be made against PIGLASAPAT on the other parties' incapacity to mobilize a strong opposing force to check, and even shatter, the current status quo of AdDU’s political space. Moreso, as long as those elected to the positions—despite the evident lack of competition and near single-party hegemony—did so through due process and ‘democratic’ means, there should be no cause for concern, should there?
          </p>

          <p>
            However, a ‘minimalist view’ of democracy constitutes that its clearest manifestation in elections lies not in the legitimacy (de jure) of the candidates or the common democratic representative structures, but in the presence of a healthy competition. 
          </p>

          <p>
            Under such a view, all aspects of what is perceived as ‘democratic’ are all for naught if the only other option available on the ballot box is to abstain. An illusion of choice, per se: a democratic procedure exists on the surface, yet democracy itself erodes and blurs in substance.
          </p>

          <p>
            While Ateneans retain the option to not vote, this choice remains fundamentally limited. Although the right not to participate constitutes a valid alternative, it functions merely as a refusal rather than a substantive “competition” in its truest sense—one that proposes no alternative platform or mounts a critique of the opposing force’s action. 
          </p>

          <p>
            In contrast to other <a href="https://theguidon.com/2025/03/beyond-the-ballot-unpacking-the-relevance-of-student-governments/" className={linkStyles}>Philippine Higher Education Institutions</a> (HEIs), AdDU has a notably <a href="https://www.facebook.com/share/p/1Cdpmihtjb/" className={linkStyles}>high student voter turnout</a>. This is no longer an issue of student participation alone. The overall turnout reached 57.6% before the initial voting period ended on March 31 at 8:00 PM. However, at 7:30 PM, the period was extended to April 1 at 8:00 PM due to several clusters failing to achieve the required valid turnout by the original deadline. Nevertheless, Article XVII Section 1 of the <a href="https://drive.google.com/file/d/1XsqbH-ReaIdrKgQTNizU39ZptpW8IjFZ/view?fbclid=IwY2xjawQ5kfVleHRuA2FlbQIxMABicmlkETFITTVRWXNHVldRdEh0bVZBc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHi5Igw3XEs2EmycmNDGiQzKRwi7lBghLJ78BAvbwPjxTaBZ1Xq38XoRgIZ35_aem_2duIydPd8u_7yf9iQQk_oQ" className={linkStyles}>2026 SAMAHAN Central Board Electoral Code</a> promulgated by the  Ateneo de Davao University Commission on Elections (ADDU-COMELEC) stipulates that elections are validated only if at least fifty percent plus one (50%+1) of the total voting population has cast ballots by the designated deadline; failure to meet this threshold constitutes a failure of elections, with votes tallied but no victors declared.
          </p>

          <p>
            The exercise to vote is associated with the freedom to select student leaders who genuinely represent the students’ clamor on societal, political, and economic issues both within and beyond the University. Yet with neither re-election mechanisms nor alternatives in place, Ateneans are left with no choice but to abstain or choose students leaders who are merely available but may not be the most qualified in representing them in student matters. Even conceding varying degrees of competence among contenders, the electorate is compelled to participate merely to conclude the process—a far cry from a truly productive election. 
          </p>

          <p>
            The act of abstaining simply does not carry the weight and burden of competition. As such, if continued, the SAMAHAN Central Board will only serve as a game of Trip to Jerusalem, where positions are merely passed around from one person to another within the confines of a single dominant political party. 
          </p>
          
          <p>
            But even if only one party remains, this does not mean that the student body will simply accept whoever it chooses to run for. It is always appropriate to assess whether the candidates from here are truly worthy of being installed in the position. Scrutinize them and go beyond the façade of their personas. Thereupon, the existence of the option to abstain can also be attributed to the lack of an opposing party, to check the pulse of the student body.
          </p>

          <p>
            To be for the students and the people that all candidates claim to be means more than <a href="https://atenews.ph/why-political-parties-are-becoming-more-senseless" className={linkStyles}>repeating the slogan during campaigns</a>; it requires these student leaders to become more than mere mouthpieces, to embody transparency even when it is uncomfortable. For SAMAHAN to persist, the primary question that they answer must always be, “To whom do we serve?” And if left barren, how can this question be answered? A barren student government can only serve the interests of the University administration and a reactionary government whose anti-student and anti-democratic policies thrive at the waning resistance they can easily drown out and silence.
          </p>

          <p>
            After all, this election was less about inevitable victories and more about what these SCB aspiring candidates will do for the community that entrusted them, however cautiously, with power.
          </p>

          <p className="italic mt-16">
            Editor's Note: This article has also been crossposted here: 
            <a href="https://atenews.ph/all-but-a-numbers-game" className={linkStyles}> https://atenews.ph/all-but-a-numbers-game</a>.
          </p>


        </div>
      </article>
    </main>
  )
}