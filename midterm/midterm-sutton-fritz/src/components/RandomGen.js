import cx from 'classnames'
import PropTypes from 'prop-types'
import {twMerge} from 'tailwind-merge'


const rg = (props) => {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...otherProps
  } = props


  const baseClass = 'flex items-center px-8 py-3 border'
  const classes = twMerge(
    cx(otherProps.className, baseClass, {
      'bg-blue-500 border-blue-500 text-white': primary,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
    })
  )

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

rg.propTypes = {
  primary: PropTypes.bool,
}

export default rg // random gen