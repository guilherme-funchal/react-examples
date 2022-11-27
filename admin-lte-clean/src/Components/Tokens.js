import Header from './Header';
import Footer from './Footer';
import Sidenav from './Sidenav';
import Api from '../Api';
import Table from './Tables/Table';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from 'react-bootstrap/Button';


import React, { useState, useEffect, useRef } from 'react';


export default function Tokens() {
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            '0': 'Carbono',
            '1': 'Moeda'
          })
        }, 1000)
      })

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
    };
    const Sucesso = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'green',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    const Falha = Swal.mixin({
        toast: true,
        position: 'center',
        iconColor: 'falha',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    });

    async function doTokem() {

        const steps = ['1', '2', '3', '4']
        const Queue = await Swal.mixin({
            progressSteps: steps,
            confirmButtonText: 'Próximo >',
            // optional classes to avoid backdrop blinking between steps
            showClass: { backdrop: 'swal2-noanimation' },
            hideClass: { backdrop: 'swal2-noanimation' }
        })
        const { value: tipo } =await Queue.fire({
            title: 'Tipo de tokem',
            currentProgressStep: 0,
            // optional class to show fade-in backdrop animation which was disabled in Queue mixin
            showClass: { backdrop: 'swal2-noanimation' },
            input: 'radio',
            inputLabel: '',
            showCancelButton: true,
            cancelButtonText: 'Não',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                  return 'Você precisa escolher um!'
                }
              },
            inputPlaceholder: 'User ID'
        })
        const { value: destino } = await Queue.fire({
            title: 'Endereço de destino',
            currentProgressStep: 1,
            input: 'text',
            inputLabel: '',
            inputValidator: (value) => {
                if (!value) {
                  return 'Você precisa inserir um destino!'
                }
              },
            inputPlaceholder: 'User ID'
        })
        const { value: valor } = await Queue.fire({
            title: 'Valor da emissão',
            currentProgressStep: 2,
            input: 'number',
            inputLabel: '',
            inputPlaceholder: 'Valor',
            inputValidator: (value) => {
                if (!value) {
                  return 'Você precisa definir um valor!'
                }
              },
        })
        const { value: confirma } = await Queue.fire({
            title: 'Confirma emissão ?',
            currentProgressStep: 3,
            confirmButtonText: 'Sim',
            showCancelButton: true,
            cancelButtonText: 'Não',
            // optional class to show fade-out backdrop animation which was disabled in Queue mixin
            showClass: { backdrop: 'swal2-noanimation' },
        })
        console.log('valor', tipo);
    }

    const [tratamentos, setTratamentos] = useState([]);

    async function burnTokem() {

        const steps = ['1', '2', '3', '4']
        const Queue = await Swal.mixin({
            progressSteps: steps,
            confirmButtonText: 'Próximo >',
            // optional classes to avoid backdrop blinking between steps
            showClass: { backdrop: 'swal2-noanimation' },
            hideClass: { backdrop: 'swal2-noanimation' }
        })
        const { value: tipo } =await Queue.fire({
            title: 'Tipo de tokem',
            currentProgressStep: 0,
            // optional class to show fade-in backdrop animation which was disabled in Queue mixin
            showClass: { backdrop: 'swal2-noanimation' },
            input: 'radio',
            inputLabel: '',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                  return 'Você precisa escolher um!'
                }
              },
            inputPlaceholder: 'User ID'
        })
        const { value: destino } = await Queue.fire({
            title: 'Endereço de destino',
            currentProgressStep: 1,
            input: 'text',
            inputLabel: '',
            inputPlaceholder: 'User ID'
        })
        const { value: valor } = await Queue.fire({
            title: 'Valor da queima',
            currentProgressStep: 2,
            input: 'number',
            inputLabel: '',
            inputPlaceholder: 'Valor'
        })
        const { value: confirma } = await Queue.fire({
            title: 'Confirma queima ?',
            currentProgressStep: 3,
            confirmButtonText: 'Sim',
            showCancelButton: true,
            cancelButtonText: 'Não',
            // optional class to show fade-out backdrop animation which was disabled in Queue mixin
            showClass: { backdrop: 'swal2-noanimation' },
        })
        console.log('valor', tipo);
    }


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
                                <h1 className="m-0">Tokens</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <Button variant="primary" size="sm" onClick={doTokem}>
                             Gerar
                        </Button>
                        <Button variant="danger" size="sm" onClick={burnTokem}>
                            Queimar
                        </Button>
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