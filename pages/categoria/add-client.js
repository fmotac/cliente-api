import { useState } from "react";
import axios from "axios";
import style from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const AddClient = () => {



  const [newClient, setNewClient] = useState({ nome: "", imagemUrl: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    axios
      .post("https://localhost:7133/Categorias", newClient)
      .then(() => {
        router.push("/categoria");
      })
      .catch((error) => {
        alert("Erro ao inserir cliente:" + error);
      });
  };

  return (  
    <div style={{ margin: "0 auto" }}>
      <h1 className={style.h1}>Inserir Categoria</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input
                type="text"
                name="nome"
                value={newClient.nome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>URL imagem:</label>
            </td>
            <td>
              <input
                type="text"
                name="imagemUrl"
                value={newClient.imagemUrl}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleAddClient}>Inserir Categoria</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddClient;
