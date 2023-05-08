import React from 'react'
import Img from '../../assets/img/img.png'
import { Link } from 'react-router-dom'
import './Service.scss'

function Service() {
    return (
        <section className='service'>
            <div className="container">
                <div className="service__inner">
                    <h2 className='service__inner-title'>Die Leistungen unseres Fachbetriebes</h2>
                    <p className='service__inner-text'>Sehr günstige Lage der Autowerkstatt mit sehr guter <br /> Verkehrsanbindung in Gelsenkirchen Buer</p>
                    <div className="service__blocks">
                        <div className="block">
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Service Inspektionen an Ihren Fahrzeug nach Herstellervorgaben</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Auspuff</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Schaltgetriebeinstandsetzung</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Autoglas</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>computerdiagnose</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>reifenservice</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Karosseriearbeiten</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Einbau von Anhängerkupplung</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Lackierarbeiten</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Bremsen</span>
                            </div>
                        </div>
                        <div className="block">
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>automatikgertriebspülung</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Schlüssel Programmierung</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Kupplung</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Klimaservice</span>
                            </div>
                            <div className="box">
                                <img src={Img} alt="" />
                                <span>Hauptuntersuchung sowie Abgasuntersuchung (DEKRA Stützpunkt)</span>
                            </div>
                        </div>
                    </div>
                    <Link className='service__inner-btn' to='/'>
                        <span>Kontaktformular</span>
                        <i class="bi bi-envelope"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Service
