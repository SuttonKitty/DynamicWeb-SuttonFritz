import EnchanteList from "./EnchanteList";

const EnchanteBtm = () => {
  const enchanteCols = [
    { title: "Studies", items: ["New York University (2026)", <a href="https://engineering.nyu.edu/academics/programs/integrated-design-media-bs" target="_blank" rel="noopener noreferrer" className="text-sm text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">⤷ Integrated Design & Media, B.S.</a>, "Emergency Care Programs (2025)", "Badger High School, WI (2022)"] },
    { title: "Skills", items: ["Web Dev", "UX", "Product Design", "Problem Solving", "Organization", "Communication"] },
    { title: "Programs", items: ["HTML5", "JavaScript", <div className="text-sm">⤷ React & Node</div>, "CSS", <div className="text-sm">⤷ Tailwind & Bootstap</div>, "Python"] },
    { title: "Softwares", items: ["Figma", "Adobe Creative Suite", "IBM SPSS Statistics", "AI/GPT", "Cloud Storage"] },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-10 md:gap-y-20 w-full mt-14 md:mt-20">
      {enchanteCols.map((list, index) => (
        <EnchanteList key={index} title={list.title} items={list.items} />
      ))}
    </div>
  );
};

export default EnchanteBtm;
