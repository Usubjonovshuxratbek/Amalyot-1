import React from 'react'
import SettingIcon from '../../assets/img/setting.png'
import './Product.scss'

function Product() {
  return (
    <section className='product'>
      <div className="product-bg"></div>
      <div className="container">
        <div className="product__inner">
          <div className="cards">
            <div className="card">
              <img className='card-img' src={SettingIcon} alt="" />
              <ul className='card-list'>
                <li className='card-item'>Hochqualifizierte Mechaniker mit langjähriger Erfahrung in der Autowerkstatt</li>
                <li className='card-item'>Individueller Ansatz für jeden Kunden und sein Fahrzeug</li>
                <li className='card-item'>Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</li>
              </ul>
            </div>
            <div className="card">
              <ul className='card-list'>
                <li className='card-item'>Breites Spektrum an Dienstleistungen, einschließlich Diagnose. Von A wie ABS System bis Z wie Zahnriemenwechsel sowie Austauschen der Betriebsflüssigkeiten und sicherheitsrelevante Verschleißteile sind wir für Sie da.</li>
                <li className='card-item'>Günstige Lage der Autowerkstatt und flexible Arbeitszeiten, die es ermöglichen, den Service zu einem für Sie günstigen Zeitpunkt zu erhalten</li>
              </ul>
            </div>
            <div className="card">
              <ul className='card-list'>
                <li className='card-item'>Falls die benötigten Teile nicht in unserem Lager vorhanden sind, werden diese in kürzester Zeit beshaffen. Sie müssen nicht selbst etwas suchen und Ihre Zeit verschwenden, die Reparatur wird für Sie zügig und bequem ausgeführt.</li>
                <li className='card-item'> Moderne Ausrüstung und Technologien, die es ermöglichen, schnell und qualitativ hochwertig jede Aufgabe zu erledigen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Product
