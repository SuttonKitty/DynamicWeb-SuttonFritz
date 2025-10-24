import EnchanteList from "./EnchanteList";

const EnchanteBtm = () => {
  const data = [
    { title: "études", items: ["New York University (2026)", <a href="https://engineering.nyu.edu/academics/programs/integrated-design-media-bs" target="_blank" rel="noopener noreferrer" className="text-sm text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">⤷ Integrated Design & Media, B.S.</a>, "Emergency Care Programs (2025)", "Badger High School, WI (2022)"] },
    { title: "compétences", items: ["Web Dev", "UX", "Problem Solving", "Product Design", "User Interviews"] },
    { title: "programmes", items: ["HTML5", "JavaScript", <div className="text-sm">⤷ React & Node</div>, "CSS", <div className="text-sm">⤷ Tailwind & Bootstap</div>, "Python"] },
    { title: "logiciels", items: ["Figma", "Adobe Creative Suite", "IBM SPSS Statistics", "AI/GPT"] },
    { title: "trouver-moi", items: [<a href="mailto:suttonfritz04@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">Email</a>, <a href="https://www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">LinkedIn</a>, <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">GitHub</a>, "⚲ Brooklyn, NY"] },
    { title: "expérience", items: ["NYU Media (2025-)", "CVS Pharmacy (2025-)"] },
    { title: "langues", items: ["English", "Français"] },
    { title: "pages", items: [<a href="N°1 moi" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°1 moi</a>, <a href="N°2 projets" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°2 projets</a>, <a href="N°3 revue" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°3 revue</a>, <a href="N°4 photos" rel="noopener noreferrer" className="text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">N°4 photos</a>] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-15 w-full mt-[3rem]">
      {data.map((list, index) => (
        <EnchanteList key={index} title={list.title} items={list.items} />
      ))}
    </div>
  );
};

export default EnchanteBtm;
