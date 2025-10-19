import cx from 'classnames'
import PropTypes from 'prop-types'
// some of you may need to install and import twMerge so that your white text
// does not overwrite your outline button text styles
// to install, make sure you are in your project in terminal and enter:
// npm i tailwind-merge
// then import it like the next line below
// we only need to import PropTypes here if we are using their PropType validation
// for example PropTypes.bool,
// import PropTypes from 'prop-types' // ES6

const Button = (props) => {
  const { children } = props
  

  const baseClass = ' my-1  p-1 hover:bg-[black] hover:text-[#FAF8F1] flex items-center  font-semibold focus:outline focus:outline-[black]'
  

  return (
    <button className={baseClass}>
      {children}
    </button>
  )
}

// validating props by type, this is the most common reason for using this library
// typscript is also used for this more recently and a lot more
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
}

export default Button
