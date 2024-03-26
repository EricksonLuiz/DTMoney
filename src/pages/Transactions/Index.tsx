import { useEffect } from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
  TransactionTableAll,
} from "./styles";

export function Transactions() {
  useEffect(() => {
    fetch(
      "https://jubilant-meme-7jwgwv6q5pghrpv4-3000.app.github.dev/transactions"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.transactions);
      });
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTableAll>
          <TransactionTable>
            <tbody>
              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>

              <tr>
                <td width="50%">Tipo Transação</td>
                <td>
                  <PriceHighLight variant="outcome">
                    - R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>
            </tbody>
          </TransactionTable>
        </TransactionTableAll>
      </TransactionContainer>
    </div>
  );
}
