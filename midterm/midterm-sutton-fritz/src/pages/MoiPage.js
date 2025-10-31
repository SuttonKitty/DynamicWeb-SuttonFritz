import MoiList from "../components/MoiList";
import MoiIndex from "../components/MoiIndex";


import MoiPic from '../assets/moipic.png'
import Moss from '../assets/moss.jpeg'

const MoiPage = () => {
  const moiColsTop = [
    { title: "Studies", items: ["New York University (2026)", <a href="https://engineering.nyu.edu/academics/programs/integrated-design-media-bs" target="_blank" rel="noopener noreferrer" className="text-sm text-[black] underline decoration-dotted hover:bg-[black] hover:text-[#FAF8F1] p-[0.1rem]">⤷ Integrated Design & Media, B.S.</a>, "Emergency Care Programs (2025)", "Badger High School, WI (2022)"] },
    { title: "Skills", items: ["Web Dev", "UX", "Product Design", "Problem Solving", "Organization", "Communication"] },
    { title: "Programs", items: ["HTML5", "JavaScript", <div className="text-sm">⤷ React & Node</div>, "CSS", <div className="text-sm">⤷ Tailwind & Bootstap</div>, "Python"] },
    { title: "Softwares", items: ["Figma", "Adobe Creative Suite", "IBM SPSS Statistics", "AI/GPT", "Cloud Storage"] },
  ];



  return (
    <div className='flex flex-col gap-6'>
      <div className="flex flex-col items-start gap-3 w-100">
        <div className="w-full">
          <MoiIndex />
        </div>
      </div>
      <div className="flex flex-col gap-12 md:gap-[8rem]">

      
      

      <div className="flex items-center flex-col w-full gap-6">
        <div id="mono" className="text-[#BF092F] font-semibold text-3xl mb-1 ">
          moi
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[85%] gap-9">
          <div className="flex gap-3 md:gap-6 flex-col">
            <div id="inter" className="font-semibold text-xl">
              NATURE
            </div>
            <div className="text-justify flex flex-col gap-3">
              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>

              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:gap-6 flex-col">
            <div id="inter" className="font-semibold text-xl">
              NURTURE
            </div>
            <div className="text-justify flex flex-col gap-3">
              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>

              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:gap-6 flex-col">
            <div id="inter" className="font-semibold text-xl">
              NICHE
            </div>
            <div className="text-justify flex flex-col gap-3">
              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>

              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>
            </div>
          </div>
        </div>
        
      </div>

    
        <div className="flex flex-col items-center w-full gap-6 md:gap-9">
          <img
            src={MoiPic}
            alt="Sutton holding a camera"
            className="w-full md:w-[75%] rounded-sm shadow-md"
          />

          <div className=" w-full md:w-[75%] flex flex-col flex wrap gap-3 md:gap-6 justify-center items-center">
            <div id="inter" className="font-semibold text-xl">
              NEXT
            </div>
            <div className="w-full md:w-[80%]">
              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>

              <div>
                Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
              </div>
            </div>
          </div>
        </div>
        

        


      

      <div className="flex flex-col gap-6 md:gap-9 justify-center w-full">
        <div id="inter" className="font-semibold text-xl">
            SKILLS
        </div>
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-10 md:gap-y-20 w-full">
          {moiColsTop.map((list, index) => (
            <MoiList key={index} title={list.title} items={list.items} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 md:gap-6">
        

        {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
          <img
            src={Moss}
            alt="moss"
            className="w-full md:w-[75%] rounded-sm shadow-md"
          />

          {/* <div>
            hello
          </div> */}
        {/* </div> */}
        
        {/* add tower text to rigthight */}

      <div className="flex flex-col md:w-[50%] gap-3 md:gap-6">

        <div id="inter" className="font-semibold text-xl">
          NEXT
        </div>
        
        <div className="flex flex-col gap-3">
          <div >
            Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </div>

          <div>
            Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </div>

          <div>
            Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </div>

          <div>
            Enchanté, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </div>
        </div>
        
      </div>
        
      </div>

      </div>

      
    </div>
  )
}

export default MoiPage