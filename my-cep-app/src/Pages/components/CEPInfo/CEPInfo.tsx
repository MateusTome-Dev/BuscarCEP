import React from 'react';
import'./CEPInfo.css'
interface CEPInfoProps {
  cepData: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
}

const CEPInfo: React.FC<CEPInfoProps> = ({ cepData }) => {
  return (
    <section className="contentResult">
                <table>
                    <tr className="titleResult">
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                    </tr>
                    <tr className="result">
                        <td>{cepData.cep}</td>
                        <td>{cepData.logradouro}</td>
                        <td>{cepData.bairro}</td>
                        <td>{cepData.localidade} - {cepData.uf}</td>
                    </tr>
                </table>
            </section>
  );
};

export default CEPInfo;
