import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content-wrapper">
      <div classeName="content-header">
        <div className="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Bem-vindo</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <p>Bem-vindo ao Dapp em Ethereum para  compensação de carbono desenvolvido para testes no Serpro.</p>
                Nosso objetivo é simular negociações de créditos de carbono relacionadas ao mercado voluntário,
                identificando os principais atores, definindo necessidades de alto nível e funcionalidades básicas.
                O Dapp, ou aplicativo descentralizado, usa contratos inteligentes para interagir com a blockchain do Ethereum.
                <p>A blockchain é uma tecnologia que organiza dados em uma estrutura chamada de bloco e
                  utiliza técnicas de criptografia para ligar os blocos uns aos outros, formando uma cadeia de blocos. </p>
                <p>Os contratos inteligentes são protocolos autoexecutáveis codificados diretamente na blockchain
                  que estabelecem um conjunto de regras para que a interação ocorra de maneira autônoma e transparente.</p>
              </div>

              <div class="card-footer">
                <img className="img-fluid" src="dist/img/dapp.png" width="10%" height="10%" className="center-mini"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
