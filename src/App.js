import Header from './components/Header'
import Section from './components/Section'
import Carousel from './components/Carousel'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'

function App() {
  return (
    <div className="app-bg">
      <Header />
      <Section>
        <div className="intro-zona">
          <div className="intro-row intro-row-top">
            <div className="intro-row-top-left"></div>
            <div className="intro-row-top-center">
              <span className="intro-title">¡EL 28 DE JUNIO NOS VAMOS DE FERIA!</span>
            </div>
          </div>
          <div className="intro-row intro-row-bottom">
            <div className="intro-row-bottom-left">
              <span className="intro-desc">PREPÁRATE PARA VIVIR UN EVENTO ÚNICO CON ALMA ANDALUZA, MUCHO ARTE...<br/>¡Y UN GRAN MOTIVO SOLIDARIO!</span>
            </div>
            <div className="intro-row-bottom-right">
              <a href="https://entradas.comprar" target="_blank" rel="noopener noreferrer">
                <img src="/buttons/ComprarEntradas.png" alt="Comprar entradas" className="cta-img" />
              </a>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="valores-block">
          <div className="valor-item">FLAMENCO</div>
          <div className="valor-item">ALEGRÍA</div>
          <div className="valor-item">Y SOLIDARIDAD</div>
        </div>
        <p className="desc-block">Disfruta de una celebración inolvidable con música en directo, ambiente rociero, acuarela en vivo, rifas<br />y un cóctel espectacular, todo en un entorno único: La Herencia Celebraciones.<br /><br />
        Viste de flamenca/o y ven a vivir un pedacito de Andalucía en nuestra finca. Tú eres protagonista de esta fiesta<br />muy solidaria.<br /><br />
        Todo lo recaudado irá destinado a la Fundación DAR DE SÍ, en apoyo a su proyecto de construcción del Centro<br />"Lola del Pasico" gestionado por PROMETEO.</p>
        <div className="desc-line"></div>
      </Section>
      <Section>
        <div className="valor-item">ACTUACIONES</div>
        <Carousel />
      </Section>
      <Menu />
      <Section>
        <div className="intro-zona-2">
          <div className="intro-row intro-row-top">
            <div className="intro-row-top-left">
              <span className="intro-desc-small">
                LA ENTRADA SOLIDARIA TIENE UN<br/>COSTE DE <span className="intro-underline">60€ POR PERSONA</span><br/>E INCLUYE MARIDAJE CON: REBUJITOS,<br/>CROFT SODA, LICOR 43 Y GINGER.<br/><br/>
              </span>
              <span className="intro-small-desc">LAS BEBIDAS NO INCLUIDAS EN ESTA SELECCIÓN DEBERAN<br/>ABONARSE POR SEPARADO</span>
            </div>
            <div className="intro-row-top-center">
            <a href="https://entradas.comprar" target="_blank" rel="noopener noreferrer">
                <img src="/buttons/ComprarEntradas.png" alt="Comprar entradas" className="cta-img" />
              </a>
            </div>
          </div>
          <div className="intro-row intro-row-bottom">
            <div className="intro-row-bottom-unique">
              <span className="titulo rojo">28 JUN</span>
              <span className="subtitulo rojo">TE ESPERAMOS EL 28 DE JUNIO A LAS 13h. RESERVA TU ENTRADA<br/>Y ÚNETE A ESTA CAUSE CON MUCHO ARTE Y MUCHA SOLIDARIDAD.</span>
              <span className="titulo rojo">13H</span>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}

export default App
