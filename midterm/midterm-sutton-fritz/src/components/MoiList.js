const MoiList = ({ 
  title, 
  items, 
  titleFont = "font-sacr font-semibold",
  itemFont = "font-sacr " 
}) => {
  return (
    <div className="flex flex-col">
      {title && <div className={`${titleFont} mb-5`}>{title}</div>}
      {items.map((item, index) => (
        <div key={index} className={`${itemFont} mb-3`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default MoiList;
