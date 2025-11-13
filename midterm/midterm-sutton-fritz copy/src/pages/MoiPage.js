import React, { useRef, useEffect, useCallback } from "react";
import MoiList from "../components/MoiList";
import MoiPic from "../assets/moipic.png";
import Moss from "../assets/moss.jpeg";

const MoiPage = () => {
  const natureRef = useRef(null);
  const nurtureRef = useRef(null);
  const nicheRef = useRef(null);
  const nowRef = useRef(null);
  const notesRef = useRef(null);
  const nextRef = useRef(null);

  const scrollTo = useCallback((key) => {
  const refMap = {
    nature: natureRef,
    nurture: nurtureRef,
    niche: nicheRef,
    now: nowRef,
    notes: notesRef,
    next: nextRef,
  };
  refMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
}, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        "1": "nature",
        "2": "nurture",
        "3": "niche",
        "4": "now",
        "5": "notes",
        "6": "next",
      };
      if (keyMap[e.key]) {
        scrollTo(keyMap[e.key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollTo]);

  const moiColsTop = [
    {
      title: "Studies",
      items: [
        "New York University (2026)",
        <a
          href="https://engineering.nyu.edu/academics/programs/integrated-design-media-bs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[black] underline decoration-dotted hover:bg-black hover:text-[#FAF8F1] p-[0.1rem]"
        >
          ⤷ Integrated Design & Media, B.S.
        </a>,
        "Emergency Care Programs (2025)",
        "Badger High School, WI (2022)",
      ],
    },
    {
      title: "Skills",
      items: ["Web Dev", "UX", "Product Design", "Problem Solving", "Organization", "Communication"],
    },
    {
      title: "Programs",
      items: [
        "HTML5",
        "JavaScript",
        <div className="text-sm">⤷ React & Node</div>,
        "CSS",
        <div className="text-sm">⤷ Tailwind & Bootstrap</div>,
        "Python",
      ],
    },
    {
      title: "Softwares",
      items: ["Figma", "Adobe Creative Suite", "IBM SPSS Statistics", "AI/GPT", "Cloud Storage"],
    },
  ];

  const indexEntries = [
    { number: "N°1", key: "nature", label: "Nature" },
    { number: "N°2", key: "nurture", label: "Nurture" },
    { number: "N°3", key: "niche", label: "Niche" },
    { number: "N°4", key: "now", label: "Now" },
    { number: "N°5", key: "notes", label: "Notes" },
    { number: "N°6", key: "next", label: "Next" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="w-full flex flex-col gap-3">
          {indexEntries.map((entry, i) => (
            <div
              key={i}
              className="w-full flex flex-row items-center gap-3 md:gap-9 flex-nowrap"
            >

              <span className="whitespace-nowrap select-none">{entry.number}</span>

              <div className="grow border-b border-dashed border-[black] pointer-events-none" />

              <button
                onClick={() => scrollTo(entry.key)}
                className="whitespace-nowrap underline decoration-dotted hover:bg-black hover:text-[#FAF8F1] p-[0.1rem]"
              >
                {entry.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-12 md:gap-[8rem]">
        {/* NATURE */}
        <div ref={natureRef} className="flex items-center flex-col w-full gap-6">
          <div id="mono" className="text-[#BF092F] font-semibold text-3xl mb-1">
            moi
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[85%] gap-9">
            <div className="flex gap-3 md:gap-6 flex-col">
              <div id="inter" className="font-semibold text-xl">
                NATURE
              </div>
              <div className="text-justify flex flex-col gap-3">
                <p>Enchanté, is simply dummy text...</p>
                <p>Enchanté, is simply dummy text...</p>
              </div>
            </div>

            {/* NURTURE */}
            <div ref={nurtureRef} className="flex gap-3 md:gap-6 flex-col">
              <div id="inter" className="font-semibold text-xl">
                NURTURE
              </div>
              <div className="text-justify flex flex-col gap-3">
                <p>Enchanté, is simply dummy text...</p>
                <p>Enchanté, is simply dummy text...</p>
              </div>
            </div>

            {/* NICHE */}
            <div ref={nicheRef} className="flex gap-3 md:gap-6 flex-col">
              <div id="inter" className="font-semibold text-xl">
                NICHE
              </div>
              <div className="text-justify flex flex-col gap-3">
                <p>Enchanté, is simply dummy text...</p>
                <p>Enchanté, is simply dummy text...</p>
              </div>
            </div>
          </div>
        </div>

        {/* NOW */}
        <div ref={nowRef} className="flex flex-col items-center w-full gap-6 md:gap-9">
          <img
            src={MoiPic}
            alt="Sutton holding a camera"
            className="w-full md:w-[75%] rounded-sm shadow-md"
          />
          <div className="w-full md:w-[75%] flex flex-col gap-3 md:gap-6 items-center">
            <div id="inter" className="font-semibold text-xl">
              NOW
            </div>
            <div className="w-full md:w-[80%] text-justify flex flex-col gap-3">
              <p>Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
              <p>Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
            </div>
          </div>
        </div>

        {/* NOTES */}
        <div ref={notesRef} className="flex flex-col gap-6 md:gap-9 justify-center w-full">
          <div id="inter" className="font-semibold text-xl">
            NOTES
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-10 md:gap-y-20 w-full">
            {moiColsTop.map((list, index) => (
              <MoiList key={index} title={list.title} items={list.items} />
            ))}
          </div>
        </div>

        {/* NEXT */}
        <div ref={nextRef} className="flex flex-col w-full gap-3 md:gap-6">
          <img
            src={Moss}
            alt="moss"
            className="w-full md:w-[75%] rounded-sm shadow-md"
          />
          <div className="flex flex-col md:w-[50%] gap-3 md:gap-6">
            <div id="inter" className="font-semibold text-xl">
              NEXT
            </div>
            <div className="flex flex-col gap-3 text-justify justify-start md:justify-center">
              <p>Enchanté, is simply dummy text...</p>
              <p>Enchanté, is simply dummy text...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoiPage;
