import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidenav from './Sidenav';

export default function Ajuda(){ 
    return (
        <div>
            <Header />
            <Sidenav /> 
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0"></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <section className="col-lg-6 connectedSortable">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="far fa-help-alt mr-1" />
                                             Plataforma
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                            <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="col-lg-6 connectedSortable">
                            
                            </section>
                           
                        </div>
                    
                    </div>
                </section>
            </div>
            <Footer />
    </div>
    )
}
