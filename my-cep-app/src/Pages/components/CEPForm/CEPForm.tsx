import React, { useState } from 'react';
import'./CEPForm.css'
import { FaSearch } from "react-icons/fa";
interface CEPFormProps {
  onSearch: (cep: string) => void;
}

const CEPForm: React.FC<CEPFormProps> = ({ onSearch }) => {
  const [cep, setCep] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(cep);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='content-form'>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={8}
      />
      <button type="submit" className='btnIcon'><FaSearch className='icon'/></button>
      </div>
    </form>
  );
};

export default CEPForm;
