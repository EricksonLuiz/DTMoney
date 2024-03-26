import styled, { css } from "styled-components";

export const SummaryCOntainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: 1rem;

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: rgba(61, 56, 56, 0.23);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(61, 56, 56, 0.49);

  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 0.5rem;
    font-size: 2rem;
    color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: rgba(8, 168, 15, 0.55);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(4.9px);
      -webkit-backdrop-filter: blur(4.9px);
      border: 1px solid rgba(8, 168, 15, 0.55);
    `}

  @media (max-width: 910px) {
    padding: 1rem;
  }
`;
