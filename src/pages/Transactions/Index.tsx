import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContaxt";
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
  TransactionTableAll,
} from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTableAll>
          <TransactionTable>
            <tbody>
              {transactions.map((transactions) => {
                return (
                  <tr key={transactions.id}>
                    <td width="50%">{transactions.description}</td>
                    <td>
                      <PriceHighLight variant={transactions.type}>
                        {transactions.type === "outcome" && "- "}
                        {priceFormatter.format(transactions.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transactions.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transactions.createdAt))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TransactionTable>
        </TransactionTableAll>
      </TransactionContainer>
    </div>
  );
}
