import React, { useState } from "react";
import'./Search.css'
import axios from "axios";
import CEPForm from "../components/CEPForm/CEPForm";
import CEPInfo from "../components/CEPInfo/CEPInfo";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";


const Search: React.FC = () => {
  const [cepData, setCepData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCepData(response.data);
      setError("");
    } catch (error) {
      setError("CEP não encontrado.");
      setCepData(null);
    }
  };

  return (
    <main className="container">
      <Header/>
      <div className="content">
        <h1>Busca de CEP</h1>
        <CEPForm onSearch={handleSearch} />
        {error && <p>{error}</p>}
        {cepData && <CEPInfo cepData={cepData} />}
      </div>
      <Footer/>
    </main>
  );
};

export default Search;

