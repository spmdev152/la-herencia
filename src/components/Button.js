import { motion } from 'framer-motion'
import './Button.css'

function Button({ children, onClick, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      {...props}
      className="main-button"
    >
      {children}
    </motion.button>
  )
}

export default Button 