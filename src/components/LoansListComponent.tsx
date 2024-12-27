"use client";

import React from "react";
import styled from "styled-components";

const LoansListComponent = styled.div`
    position: absolute;
    left: 40px;
    right: 40px;
    top: 275px;
    max-width: 1110px;

`;

const LoansListLabel = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    width: 244px;
    height: 27px;
    color: rgb(51, 59, 105);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const LoanTableContainer = styled.div`
    position: absolute;
    top: 42px;
    margin: 20px auto;
    width: 100%;
    border-collapse: collapse;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
    color: rgb(52, 60, 106);
  }

  td button {
    padding: 5px 15px;
    border: 1px solid #2d8cff;
    border-radius: 5px;
    background-color: white;
    color: #2d8cff;
    cursor: pointer;
    font-size: 14px;
  }

  td button:hover {
    background-color: #e6f0ff;
  }

  .total-row td {
    font-weight: bold;
    color: rgb(217, 0, 0);
    background-color: #fafafa;
  }
`;

const loans = [
    { id: "01", loanMoney: "$100,000", leftToRepay: "$40,500", duration: "8 Months", interestRate: "12%", installment: "$2,000 / month" },
    { id: "02", loanMoney: "$500,000", leftToRepay: "$250,000", duration: "36 Months", interestRate: "10%", installment: "$8,000 / month" },
    { id: "03", loanMoney: "$900,000", leftToRepay: "$40,500", duration: "12 Months", interestRate: "12%", installment: "$5,000 / month" },
    { id: "04", loanMoney: "$50,000", leftToRepay: "$40,500", duration: "25 Months", interestRate: "5%", installment: "$2,000 / month" },
    { id: "05", loanMoney: "$50,000", leftToRepay: "$40,500", duration: "5 Months", interestRate: "16%", installment: "$10,000 / month" },
    { id: "06", loanMoney: "$80,000", leftToRepay: "$25,500", duration: "14 Months", interestRate: "8%", installment: "$2,000 / month" },
    { id: "07", loanMoney: "$12,000", leftToRepay: "$5,500", duration: "9 Months", interestRate: "13%", installment: "$500 / month" },
    { id: "08", loanMoney: "$160,000", leftToRepay: "$100,800", duration: "3 Months", interestRate: "12%", installment: "$900 / month" },
];

const totals = {
    loanMoney: "$125,000",
    leftToRepay: "$750,000",
    installment: "$50,000 / month",
};

const LoanTable: React.FC = () => {
    return (
        <LoansListComponent>
            <LoansListLabel>Active Loans Overview</LoansListLabel>
            <LoanTableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Loan Money</th>
                            <th>Left to repay</th>
                            <th>Duration</th>
                            <th>Interest rate</th>
                            <th>Installment</th>
                            <th>Repay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loans.map((loan) => (
                            <tr key={loan.id}>
                                <td>{loan.id}</td>
                                <td>{loan.loanMoney}</td>
                                <td>{loan.leftToRepay}</td>
                                <td>{loan.duration}</td>
                                <td>{loan.interestRate}</td>
                                <td>{loan.installment}</td>
                                <td>
                                    <button>Repay</button>
                                </td>
                            </tr>
                        ))}
                        <tr className="total-row">
                            <td colSpan={2}>Total</td>
                            <td>{totals.leftToRepay}</td>
                            <td></td>
                            <td></td>
                            <td>{totals.installment}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </StyledTable>
            </LoanTableContainer>
        </LoansListComponent>
    );
};

export default LoanTable;