"use client";

import styled from "styled-components";
import businessloans from "@/app/icons/loans/types/businessloans.png";
import corporateloans from "@/app/icons/loans/types/corporateloans.png";
import customloans from "@/app/icons/loans/types/customloans.png";
import personalloans from "@/app/icons/loans/types/personalloans.png";

const LoansTypeFrame = styled.div`
  position: absolute;
  left: 40px;
  top: 31px;
  right: 40px;
  max-width: 1110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; 
`;

const LoanstypeItem = styled.div`
  width: 255px;
  height: 120px;
  border-radius: 25px;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

const LoansTypeImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background: rgb(231, 237, 255);
  object-fit: cover; 
`;

const LoansTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 51px;
`;

const LoansTypeName = styled.label`
  color: rgb(113, 142, 191);
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

const LoansTypeAmount = styled.p`
  color: rgb(35, 35, 35);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

const loansTypes = [
  { name: "Personal Loans", amount: "$50,000", srcImg: personalloans.src },
  { name: "Corporate Loans", amount: "$100,000", srcImg: corporateloans.src },
  { name: "Business Loans", amount: "$500,000", srcImg: businessloans.src },
  { name: "Custom Loans", amount: "Choose Money", srcImg: customloans.src },
];

const LoansTypeContainer = () => {
  return (
    <LoansTypeFrame>
      {loansTypes.map((loan, index) => (
        <LoanstypeItem key={index}>
          <LoansTypeImg src={loan.srcImg} alt={loan.name} />
          <LoansTypeInfo>
            <LoansTypeName>{loan.name}</LoansTypeName>
            <LoansTypeAmount>{loan.amount}</LoansTypeAmount>
          </LoansTypeInfo>
        </LoanstypeItem>
      ))}
    </LoansTypeFrame>
  );
};

export default LoansTypeContainer;