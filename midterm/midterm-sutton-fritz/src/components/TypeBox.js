const TypeBox = ({ prop }) => {
  return (
    <div>
      <textarea
        defaultValue={prop}
        className="bg-[#FAF8F1] border-none focus:outline-none focus:ring-0 h-[4rem] w-fit resize-none"
      />
    </div>
  )
}

export default TypeBox