import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:3300'; // Substitua pela URL da sua API

function Form() {
  const [id, setId] = useState();
  const [produto, setProduto] = useState();
  const [acab, setAcab] = useState();
  const [img_url, setImg_url] = useState();

  const product = { id, produto, acab, img_url };

  const create = async (e) => {
    e.preventDefault();



    try {
      const response = await axios.post(`${apiUrl}/cadastro`, product);
      console.log('Produto criado com sucesso:', response.data);
    } catch (err) {
      console.log(`Erro: ${err}`)
    }
  }

  useEffect(() => {
    console.log('UseEffect product')
  }, [product]);

  return (
    <form onSubmit={(e) => create(e)}>
      <input type='number' onChange={(e) => setId(e.target.value)} />
      <input type='text' onChange={(e) => setProduto(e.target.value)} />
      <input type='text' onChange={(e) => setAcab(e.target.value)} />
      <input type='text' onChange={(e) => setImg_url(e.target.value)} />
      <button>Create</button>
    </form>
  )

}

export default Form;
