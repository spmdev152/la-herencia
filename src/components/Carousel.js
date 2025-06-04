import { useEffect, useRef, useState } from 'react'
import './Carousel.css'

const items = [
  { src: '/images/DJ.jpg', title: 'DJ' },
  { src: '/images/img-1.jpg', title: 'Jauja Espectáculos' },
  { src: '/images/img-2.jpg', title: 'Cuadro flamenco Jesús Quiles' },
  { src: '/images/img-3.jpg', title: 'De Norte a Sur' },
  { src: '/images/img-4.jpg', title: 'Grupo Brumas' },
  { src: '/images/marta-rodriguez.jpg', title: 'Marta Rodríguez' },
]

function Carousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const SLIDE_WIDTH = 400 + 48; // 400px ancho + 24px margen a cada lado
  const maxIndex = items.length - Math.floor(document.querySelector('.carousel-container')?.offsetWidth / SLIDE_WIDTH);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (index < items.length - 1) {
        setIndex((prev) => prev + 1)
      } else {
        setIndex(0)
      }
    }, 2500)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  // Calcular el desplazamiento máximo para que la última slide quede justo al borde derecho
  const containerWidth = typeof window !== 'undefined' ? document.querySelector('.carousel-container')?.offsetWidth || 0 : 0;
  const visibleSlides = containerWidth ? Math.floor(containerWidth / SLIDE_WIDTH) : 1;
  const maxTranslate = (items.length - visibleSlides) * SLIDE_WIDTH;
  const translateX = Math.min(index * SLIDE_WIDTH, maxTranslate);

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${translateX}px)` }}>
        {items.map((item, i) => (
          <div className="carousel-slide" key={i}>
            <img src={item.src} alt={item.title} className="carousel-img" />
            <div className="carousel-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel 