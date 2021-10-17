import { useEffect } from "react";
import { api } from "../../services/serviceApi";
import { Container } from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aplicação Web</td>
            <td className="deposit">R$ 4500,00</td>
            <td>Desenvolvimento</td>
            <td>16/10/2021</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className="withdraw">- R$ 1500,00</td>
            <td>Dispensa</td>
            <td>16/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};