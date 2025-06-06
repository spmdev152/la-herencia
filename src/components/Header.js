import { motion } from 'framer-motion'
import './Header.css'

function Header() {
  return (
    <header className="header-container hero-container">
      <div className="header-top-lines">
        <div className="header-line header-line-1"></div>
        <div className="header-line header-line-2"></div>
      </div>
      <motion.img
        src="/images/header.png"
        alt="Alma de Feria"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 24, delay: 0.2, duration: 1.5 }}
        className="logo-alma-img"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="event-info-bar"
      >
        <div className="event-info-left">
          <span className="titulo rojo">SÁBADO<br/>28 DE JUNIO</span>
        </div>
        <div className="event-info-center">
          <span className="subtitulo rojo">PRIMERA GALA BENÉFICA “ALMA DE FERIA”</span>
        </div>
        <div className="event-info-right">
          <span className="titulo rojo">13:00<br/>HORAS</span>
        </div>
      </motion.div>
    </header>
  )
}

export default Header 