import cx from 'classnames'

const Panel = (props) => {
  const {className, children, ...rest} = props
  const finalClassNames = cx(
    className,
    // 'p-3  h-2/3 overflow-y-auto',
    'w-[100%] h-fit overflow-y-none border-[#F5F5DC]  rounded-lg border-double',
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

export default Panel
