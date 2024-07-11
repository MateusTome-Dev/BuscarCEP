import React from 'react';

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
    <div>
      <h2>Informações do CEP {cepData.cep}</h2>
      <p>Logradouro: {cepData.logradouro}</p>
      <p>Bairro: {cepData.bairro}</p>
      <p>Cidade: {cepData.localidade} - {cepData.uf}</p>
    </div>
  );
};

export default CEPInfo;
