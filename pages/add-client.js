import { useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";
import { useRouter } from "next/router";

const AddClient = () => {



  const [newClient, setNewClient] = useState({ name: "", email: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    axios
      .post("http://localhost:8080/clients", newClient)
      .then((response) => {
        router.push("/home");
      })
      .catch((error) => {
        alert("Erro ao inserir cliente:" + error);
      });
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <h1 className={style.h1}>Inserir Cliente</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={newClient.name}
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
                value={newClient.email}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleAddClient}>Inserir Cliente</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddClient;
