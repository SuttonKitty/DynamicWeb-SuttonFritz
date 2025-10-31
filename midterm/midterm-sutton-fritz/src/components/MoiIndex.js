const MoiIndex = () => {
  return (
    <div id="inter" className="flex flex-col gap-3 w-full">
      {[
        // { number: "[ 1 ]", scrollTo: ["Now"] },
        // { number: "[ 2 ]", scrollTo: ["Niches"] },
        // // what makes me special
        // { number: "[ 3 ]", scrollTo: ["Nature"] },
        // // where i gre up (things no of my choice)
        // { number: "[ 4 ]", scrollTo: ["Nurture"] },
        // // what ive done to develope myself
        // { number: "[ 5 ]", scrollTo: ["Next"] },

        { number: "N°1", scrollTo: ["Nature"] },
        // where i gre up (things no of my choice)
        { number: "N°2", scrollTo: ["Nurture"] },
        // what ive done to develope myself
        { number: "N°3", scrollTo: ["Niche"] },
        // what makes me special
        { number: "N°4", scrollTo: ["Skills"] },
        { number: "N°5", scrollTo: ["Next"] },
        // next steps for my career
      ].map((entry, i) => (
        <div
          key={i}
          className="w-full flex flex-row items-center gap-3 md:gap-9 flex-nowrap"
        >
          <div className="whitespace-nowrap">{entry.number}</div>

          <div className="grow border-b border-dashed border-[black]" />

          <div className="flex flex-row gap-3 flex-nowrap overflow-x-auto md:overflow-visible">
            {entry.scrollTo.map((link, j) => (
              <a
                key={j}
                href={`#${entry.number}-${link}`}
                className="underline decoration-dotted text-[black] hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem] whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MoiIndex