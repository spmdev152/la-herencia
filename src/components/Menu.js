import './Menu.css'

function Menu() {
  return (
    <section className="menu-section">
      <div className="menu-layout">
        <div className="menu-title-vertical">MENÚ</div>
        <div>
          <div className="menu-alma-block alma-relative">
            <h3>ALMA</h3>
            <ul>
              <li>Jamón de cebo de campo a cuchillo de Rentero</li>
              <li>Lomo ibérico al corte de la berkel</li>
              <li>Salmorejo y gazpacho con airbag de Jesús</li>
              <li>Panipuri de rusa con su cantábrico</li>
              <li>Camarones de la isla cocidos</li>
              <li>Tartar de cerdo de mar y tierra</li>
              <li>Croqueta de puchero de la abuela</li>
              <li>Caballitos rocientes</li>
              <li>Choquito de trasmayo</li>
              <li>Cazón de poniente</li>
              <li>Taquitos de dorada al limón</li>
              <li>Galleta de gruñón estofada</li>
              <li>Rabo de toro Santa Rosalía</li>
              <li>Arroz con carabineros "Edu Torres"</li>
            </ul>
            <h4>POSTRE</h4>
            <p>Delicatesen de nuestro maestro pastelero Martín Rivera</p>
            <div className="menu-nanci-block">
              <h3>NANCI 25</h3>
              <ul>
                <li>Salazón</li>
                <li>Encurtidos</li>
                <li>Papas Parlamento</li>
                <li>Rebujitos</li>
                <li>Croft Soda/ Tío Pepe</li>
                <li>Licor 43</li>
                <li>Ginger</li>
              </ul>
            </div>
            <a href="/ruta/menu.pdf" target="_blank" rel="noopener noreferrer" className="menu-download-cta">
              <img src="/buttons/DescargarMenu.png" alt="Descargar menú del evento" />
            </a>
          </div>
          <div className="menu-extra-text">
            Además del menú, habrá más sorpresas a lo largo del evento.<br />
            Y, por supuesto, para los más fiesteros, contaremos con snacks fríos para reponer fuerzas y seguir bailando.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu 