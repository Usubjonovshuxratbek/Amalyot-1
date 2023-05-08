import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'

function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <h2 className="hero__inner-title">Ihre Autowerkstatt in Gelsenkirchen</h2>
                    <ul className="hero__inner-list">
                        <li className='hero__inner-item'>
                            <i class="bi bi-gear"></i>
                            <span>Erfahrene Mechaniker und Meister</span>
                        </li>
                        <li className='hero__inner-item'>
                            <i class="bi bi-gear"></i>
                            <span>Moderne Werkstattausrüstung</span>
                        </li>
                        <li className='hero__inner-item'>
                            <i class="bi bi-gear"></i>
                            <span>Breites Spektrum an Dienstleistungen (von A wie ABS bis Z wie Zylinderkopfdichtung, wir sind für Sie da!)</span>
                        </li>
                        <li className='hero__inner-item'>
                            <i class="bi bi-gear"></i>
                            <span>Erfahrene Mechaniker und Meister mit jahrzehntelange Erfahrung im KFZ Gewerbe</span>
                        </li>
                        <li className='hero__inner-item'>
                            <i class="bi bi-gear"></i>
                            <span>Zuverlässiger und qualitativ hochwertiger Service, der dazu beiträgt, die Lebensdauer Ihres Autos zu verlängern</span>
                        </li>
                    </ul>
                    <Link className='hero__inner-btn' to='/'>
                            <span>Kontaktformular</span>
                            <i class="bi bi-envelope"></i>
                        </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
