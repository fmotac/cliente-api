import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from '../styles/Home.module.css'

const ClientList2 = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <div>
    
      <h1 className={style.h1}>Lista de Clientes</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        {clients.map((element) => (
            <tbody key={element.id}>
              <tr className={style.tabela}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default ClientList2;
