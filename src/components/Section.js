import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Section.css'

function Section({ children, className = '', ...props }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`section ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section 