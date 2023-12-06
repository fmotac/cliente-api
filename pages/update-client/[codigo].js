import { useState, useEffect } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router';


const UpdateClient = () => {
  const [client, setClient] = useState({ id: "", name: "", email: "" });
  const router = useRouter(); 
  const { codigo } = router.query;

  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("http://localhost:8080/clients/" + client.id)
      .then((response) => {
        setClient(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do cliente:", error);
      });
  }, [client.id]);

  const handleInputChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleUpdateClient = () => {
    axios
      .put("http://localhost:8080/clients/" + client.id, client)
      .then((response) => {
        router.push('/home');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar cliente:", error);
      });
  };

  return (
    
    <div>
      <h1 className={style.h1}>Atualizar Cliente</h1>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td>
              <label>ID do Cliente:</label>
            </td>
            <td>
              <input
                type="text"
                name="id"
                value={client.id = codigo}
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
                name="name"
                value={client.name}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input
                type="text"
                name="email"
                value={client.email}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateClient}>Atualizar Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateClient;
