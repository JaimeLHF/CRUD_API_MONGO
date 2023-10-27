import React, { useState, useEffect } from 'react';
import styled from './Api.module.css'
import axios from 'axios';

const apiUrl = 'http://localhost:3300'; // Substitua pela URL da sua API

function Api() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            axios
                .get(`${apiUrl}/`)
                .then((response) => {
                    setPosts(response.data);
                })
                .catch((error) => {
                    console.error('Erro na requisição:', error);
                })
        };

        getProducts();

    });

    const onDelete = async (ID) => {
        axios.delete(`${apiUrl}/${ID}`).then(console.log(`${ID} excluído!`))
    };



    return (
        <div>
            <table className={styled.table}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Acabamento</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody >
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.produto}</td>
                            <td>{post.acab}</td>
                            <td className={styled.td_imagem}>
                                <img src={post.img_url} alt={post.produto} className={styled.image} />
                            </td>
                            <td><button onClick={() => onDelete(post.id)}>Deletar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Api;
