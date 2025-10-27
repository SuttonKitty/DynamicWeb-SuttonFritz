import PicDeMoi from '../assets/moi.png'

const EnchanteTop = () => {
  return (
    <div className="gap-10">
      <div className="mt-[2rem] gap-10">

        <div className="w-full flex justify-start">
          <img
            src={PicDeMoi}
            alt="PicDeMoi"
            className="w-full md:w-3/4 rounded-sm shadow-md"
          />
        </div>

        <div id="cursive" className="text-[#BF092F] text-3xl mt-10">
          Enchanté
        </div>

        <div id="inter" className="w-full md:w-1/2 text-base leading-relaxed">
          I am an Integrated Design & Media student at New York University, Tandon School of Engineering. I specialize in front-end web development.
        </div>

      </div>
    </div>
  )
}

export default EnchanteTop
