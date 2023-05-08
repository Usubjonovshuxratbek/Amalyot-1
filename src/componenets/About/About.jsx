import React from 'react'
import Location from '../../assets/img/location.png'
import './About.scss'

function About() {
  return (
    <section className='about'>
      <div className="container">
        <div className="about__inner">
          <div className="about__inner-info">
            <h2>Kontakt</h2>
            <p>Vertrauen Sie Ihr Auto den echten Profis an und erhalten Sie zuverlässigen und hochwertigen Service in unserer Autowerkstatt!</p>
            <div className="block-1">
              <div className="adresse">
                <div>
                  <i class="bi bi-geo-alt"></i>
                  <h3>Adresse </h3>
                </div>
                <span>Gelsenkirchen, Horsterstr 106 45897</span>
              </div>
              <div className="telefon">
                <div>
                <i class="bi bi-telephone"></i>
                <h3>Telefon</h3>
                </div>
                <span>0209/592696</span>
              </div>
            </div>
            <div className="block-2">
              <div className="box">
                <div>
                <i class="bi bi-clock"></i>
                  <h3>Öffnungszeiten</h3>
                </div>
                <span>Montag - Freitag 8 bis 18 Uhr</span>
              </div>
              <div className="email">
                <div>
                <i class="bi bi-envelope"></i>
                <h3>E-Mail</h3>
                </div>
                <span>info@kfz-laschet.de</span>
              </div>
            </div>
          </div>
          <div className="about__inner-location">
            <img src={Location} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
