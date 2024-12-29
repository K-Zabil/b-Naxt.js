"use client";

import React from "react";
import styled from "styled-components";

const LoansListComponent = styled.div`
  position: absolute;
  left: 40px;
  right: 40px;
  top: 175px;
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
    border-radius: 15px;
    overflow: hidden; 
    background-color: white;
    color: rgb(35, 35, 35);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;

  th, td {
    border: none;
    padding: 8px;
    text-align: center;
  }

  th {
    color: rgb(113, 142, 191);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
  }

  td button {
    width: 100px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 50px;
    background-color: white;
    color: rgb(35, 35, 35);
    cursor: pointer;
    font-size: 14px;
    transition: color 0.3s ease;
  }

  td button:active {
    color: rgb(24, 20, 243);
    border: 1px solid #2d8cff;
  }

  .total-row td {
    font-weight: bold;
    color: rgb(217, 0, 0);
    color: rgb(254, 92, 115);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
  }
`;

const loans = [
  { id: "01", loanMoney: "100,000", leftToRepay: "40,500", duration: "8", interestRate: "12%", installment: "2,000" },
  { id: "02", loanMoney: "500,000", leftToRepay: "250,000", duration: "36", interestRate: "10%", installment: "8,000" },
  { id: "03", loanMoney: "900,000", leftToRepay: "40,500", duration: "12", interestRate: "12%", installment: "5,000" },
  { id: "04", loanMoney: "50,000", leftToRepay: "40,500", duration: "25", interestRate: "5%", installment: "2,000" },
  { id: "05", loanMoney: "50,000", leftToRepay: "40,500", duration: "5", interestRate: "16%", installment: "10,000" },
  { id: "06", loanMoney: "80,000", leftToRepay: "25,500", duration: "14", interestRate: "8%", installment: "2,000" },
  { id: "07", loanMoney: "12,000", leftToRepay: "5,500", duration: "9", interestRate: "13%", installment: "500" },
  { id: "08", loanMoney: "160,000", leftToRepay: "100,800", duration: "3", interestRate: "12%", installment: "900" },
];

const parseMoney = (money: string): number => Number(money.replace(/[$,]/g, ""));
const formatMoney = (money: number): string => `${money.toLocaleString()}`;

const totals = {
  loanMoney: formatMoney(loans.reduce((acc, loan) => acc + parseMoney(loan.loanMoney), 0)),
  leftToRepay: formatMoney(loans.reduce((acc, loan) => acc + parseMoney(loan.leftToRepay), 0)),
  installment: formatMoney(loans.reduce((acc, loan) => acc + parseMoney(loan.installment), 0)),
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
                <td>${loan.loanMoney}</td>
                <td>${loan.leftToRepay}</td>
                <td>{loan.duration}</td>
                <td>{loan.interestRate}</td>
                <td>${loan.installment} / month</td>
                <td>
                  <button className="">Repay</button>
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td >Total</td>
              <td>${totals.loanMoney}</td>
              <td>${totals.leftToRepay}</td>
              <td></td>
              <td></td>
              <td>${totals.installment}  / month</td>
              <td></td>
            </tr>
          </tbody>
        </StyledTable>
      </LoanTableContainer>
    </LoansListComponent>
  );
};

export default LoanTable;