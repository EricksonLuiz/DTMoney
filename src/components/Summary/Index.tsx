import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCOntainer, SummaryCard } from "./styles";

export function Summary(){
    return(
        <SummaryCOntainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#07eb2d" />
                </header>
                <strong> R$ 15.375,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#be1523" />
                </header>
                <strong> R$ 15.375,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffffff" />
                </header>
                <strong> R$ 15.375,00</strong>
            </SummaryCard>
        </SummaryCOntainer>

    )
}