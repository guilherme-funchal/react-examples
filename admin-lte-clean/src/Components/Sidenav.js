import React from 'react'
import { Link } from "react-router-dom";

export default function Child() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                <Link to="/" className="brand-link text-left">
                    <img src="dist/img/serpro.png" alt="Logo" className="brand-image" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light text-left">CompKarbo</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Nome do usuário</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column text-left" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="nav-icon fas  fa-bookmark" />
                                    <p>
                                        Inicio
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Dashboard" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Tokens" className="nav-link">
                                    <i className="nav-icon fas fa  fa-folder" />
                                    <p>
                                        Tokens
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/Transfer" className="nav-link">
                                    <i className="nav-icon fas fa  fa-folder" />
                                    <p>
                                        Transferências
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projetos" className="nav-link">
                                    <i className="nav-icon fas fa  fa-folder" />
                                    <p>
                                        Projetos
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Administracao" className="nav-link">
                                    <i className="nav-icon fas fa  fa-user" />
                                    <p>
                                        Administração
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Plataforma" className="nav-link">
                                    <i className="nav-icon fas fa  fa-sort" />
                                    <p>
                                        Plataforma
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

