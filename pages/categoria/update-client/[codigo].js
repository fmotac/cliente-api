import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Home.module.css";
import { useRouter } from 'next/router';


const UpdateClient = () => {
  const [client, setClient] = useState({ categoriaId: "", nome: "", imagemUrl: "" });
  const router = useRouter(); 
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("https://localhost:7133/Categorias/" + client.categoriaId)
      .then((response) => {
       setClient(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do cliente:", error);
      });
  }, [client.categoriaId]);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleUpdateClient = () => {
    axios
      .put("https://localhost:7133/Categorias/" + client.categoriaId, client)
      .then(() => {
        router.push('/categoria');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar cliente:", error);
      });
  };

  return (
    
    <div>
      <h1 className={style.h1}>Atualizar Categoria</h1>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td>
              <label>ID da Categoria:</label>
            </td>
            <td>
              <input
                type="text"
                name="id"
                value={client.categoriaId = codigo}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input
                type="text"
                name="nome"
                value={client.nome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Imagem URL:</label>
            </td>
            <td>
              <input
                type="text"
                name="imagemUrl"
                value={client.imagemUrl}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateClient}>Atualizar Categoria</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateClient;
