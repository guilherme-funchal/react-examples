import Header from './Header';
import Footer from './Footer';
import Sidenav from './Sidenav';
import Api from '../Api';
import Table from './Tables/Table';

import React, { useState, useEffect, useRef } from 'react';


export default function Plataforma(){ 
    const column_tratamento = [
        { heading: 'Codigo', value: 'id' },
        { heading: 'Descrição', value: 'descricao' },
        { heading: 'Situação', value: 'situacao' },
        { heading: 'Data inicio', value: 'data_inicio' },
        { heading: 'Data fim', value: 'data_fim' },
        { heading: 'Valor total', value: 'valor_total' },
        { heading: 'Saldo', value: 'saldo' },
    ]

    const getTratamentos = async (cod_paciente) => {
        const response = await Api.get('tratamentos/' + cod_paciente);
        setTratamentos(response.data.tabela);
        // console.log("Total Trat->", tratamentos.lenght);
    };

    const [tratamentos, setTratamentos] = useState([]);

    console.log("tratamentos->", column_tratamento)

    useEffect(() => {
        getTratamentos("74");
    }, []);

    return (
        <div>
            <Header />
            <Sidenav /> 
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Prataforma</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                    <Table data={tratamentos} column={column_tratamento} />
                        <div className="row">
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-6 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                            </section>
                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            <Footer />
    </div>
    )
}