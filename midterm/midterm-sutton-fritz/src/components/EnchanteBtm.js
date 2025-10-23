import EnchanteList from "./EnchanteList";

const EnchanteBtm = () => {
  const data = [
    { title: "études", items: ["New York University (2026)", <div className="text-sm">⤷ Integrated Design & Media</div>, "Emergency Care Programs (2025)", "Badger High School, WI (2022)"] },
    { title: "compétences", items: ["Web Dev", "UX", "Problem Solving", "Product Design", "User Interviews"] },
    { title: "programmes", items: ["HTML5", "JavaScript", <div className="text-sm">⤷ React & Node</div>, "CSS", <div className="text-sm">⤷ Tailwind & Bootstap</div>, "Python"] },
    { title: "logiciels", items: ["Figma", "Adobe Creative Suite", "IBM SPSS Statistics", "AI/GPT"] },
    { title: "langues", items: ["English", "Français"] },
    { title: "expérience", items: ["NYU Media (2025-)", "CVS Pharmacy (2025-)"] },
    { title: "trouver-moi", items: [<a href="mailto:suttonfritz04@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted">Email</a>, <a href="https://www.linkedin.com/in/sutton-fritz" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted">LinkedIn</a>, <a href="https://github.com/SuttonKitty" target="_blank" rel="noopener noreferrer" className="text-[black] underline decoration-dotted">GitHub</a>, "⚲ Brooklyn, NY"] },
    // { title: "trouver-moi", items: ["⚲ Brooklyn", "New York", "USA", "Terre"] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full mt-[3rem]">
      {data.map((list, index) => (
        <EnchanteList key={index} title={list.title} items={list.items} />
      ))}
    </div>
  );
};

export default EnchanteBtm;
