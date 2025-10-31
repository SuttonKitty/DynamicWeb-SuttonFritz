import MoiList from "./MoiList";
const Footer = () => {
    const colsBtm = [
        { title: "Experience", items: ["NYU Media (2025-)", "CVS Pharmacy (2025-)"] },
        { title: "Research", items: ["WiFi & Internet", "User Interviews", "Social Media Analytics"] },
        { title: "Pages", items: [<a href="/" className="text-[#BF092F] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">Enchanté</a>, <a href="N°1 moi" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°1 moi</a>, <a href="N°2 projets" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°2 projets</a>, <a href="N°3 scrapbook" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°3 scrapbook</a>] },
        { title: "@", items: [<a href="mailto:suttonfritz04@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">Email</a>, <a href="https://www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">LinkedIn</a>, <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">GitHub</a>, "⚲ Brooklyn, NY"] },
        ];
    return (
    <div className="mb-6 flex flex-col">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-10 md:gap-y-20 w-full mt-14 md:mt-20">
            {colsBtm.map((list, index) => (
                <MoiList key={index} title={list.title} items={list.items} />
            ))}
        </div>

        <hr className='border-dotted border-[black] mb-3 mt-3'/>
        
        <div className="flex text-s flex-row text-[black] justify-between">
            {/* <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a rel="me" href="mailto:sutton.fritz04@gmail.com" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    Email
                </a>
            </div>

            <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    GitHub
                </a>
            </div>

            <div id="mono" className="flex justify-end gap-5 font-semibold">
                <a href="https://www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" className="hover:bg-[black] hover:text-[#FAF8F1] flex items-center p-[0.1rem] font-semibold focus:outline focus:outline-[black]">
                    LinkedIn
                </a>
            </div>  */}

            <div id="mono" className="font-semibold text-sm">
                © 2025, Sutton Fritz
            </div>

            <div id="inter" className="font-semibold text-sm">
                =^._.^=
            </div>
        </div>

        
    </div>
  )
}

export default Footer