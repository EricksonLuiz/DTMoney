import { Header } from "../../components/Header/Index"
import { Summary } from "../../components/Summary/Index"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Tipo Transação</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
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
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}