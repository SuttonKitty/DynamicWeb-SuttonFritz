import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

const RevueAccordion = ({ items }) => {
  const [expandedIndexes, setExpandedIndexes] = useState([])

  const handleClick = (index) => {
    setExpandedIndexes((currentIndexes) => {
      if (currentIndexes.includes(index)) {
        return currentIndexes.filter((i) => i !== index)
      } else {
        return [...currentIndexes, index]
      }
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndexes.includes(index)

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    )

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          id="mono"
          className="flex justify-between items-center p-3 border-b border-black border-dotted cursor-pointer font-semibold hover:bg-black hover:text-[#FAF8F1]"
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="border-b border-black border-dotted p-5">
            {item.content}
          </div>
        )}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default RevueAccordion
