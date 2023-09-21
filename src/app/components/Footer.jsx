import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer">
            <div className='Footer-wrapper container'>
                <div className="reference-section">
                    <div className="left">
                        <h1>Your place to talk</h1>
                        <p><img src="/flag 1.png" alt="" />English, USA</p>
                    </div>
                    <div className="right">
                        <div className="products">
                            <h5>Product</h5>
                            <ul>
                                <li>Baixar</li>
                                <li>Nitro</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div className="Empresa">
                            <h5>Empresa</h5>
                            <ul>
                                <li>Sobre</li>
                                <li>Empregos</li>
                                <li>Marca</li>
                                <li>Sala de Imprensa</li>
                            </ul>
                        </div>
                        <div className="Recursos">
                            <h5>Recursos</h5>
                            <ul>
                                <li>Faculdade</li>
                                <li>Suporte</li>
                                <li>Segurança</li>
                                <li>Blog</li>
                                <li>Comentários</li>
                                <li>Build</li>
                                <li>StreamKit</li>
                                <li>Creator</li>
                                <li>Community</li>
                            </ul>
                        </div>
                        <div className="Política">
                            <h5>Política</h5>
                            <ul>
                                <li>Termos</li>
                                <li>Privacidade</li>
                                <li>Configurações de Cookies</li>
                                <li>Diretrizes</li>
                                <li>Reconhecimentos</li>
                                <li>Licenças</li>
                                <li>Moderação</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="last-footer">
                    <div className="logo">
                        <img src="/logo 1.png" alt="" />
                    </div>
                    <button className='action-btn'>Open to Discord</button>
                </div>
            </div>
        </div>
    )
}

export default Footer