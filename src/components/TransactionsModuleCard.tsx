"use client";

import { styled } from "styled-components";
import "next/image";
import transactionType from "@/app/icons/transaction/transactionType.png"
import transactionTypePP from "@/app/icons/transaction/transactionTypePP.png"

const RecentTransactionsFrame = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 24px;
    margin-right: 40px;
    width: 350px;
    height: 282px;
`;

const RecentTransactionsLabel = styled.label`
    position: absolute;
    width: 207px;
    height: 27px;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const RecentTransactionsContent = styled.div`
    position: absolute;
    width: 100%;
    height: 235px;
    bottom: 0;
    border-radius: 25px;
    background: rgb(255, 255, 255);
    
    display: flex; 
    flex-direction: column; 
    gap: 10px;
    padding: 25px; 
`;

const TransactionElement = styled.div`
    position: relative;
    width: 301px;
    height: 55px;
    display: flex;
    align-items: center;
`;

const TransactionType = styled.img`
    left: 0;
    width: 55px;
    height: 55px;
    border-radius: 100px;
`;

const TransactionInfo = styled.div`
    position: absolute;
    display: flex;
    width: 167px;
    height: 44px;
    margin-left: 72px;
    flex-direction: column;
    justify-content: center;
`;

const TransactionTypeName = styled.p`
    position: absolute;
    width: 167px;
    height: 19px;
    top: 0;
    color: rgb(35, 35, 35);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
`;

const TransactionDate = styled.p`
    position: absolute;
    width: 119px;
    height: 18px;
    bottom: 0;
    color: rgb(113, 142, 191);
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

interface TransactionPrice {
    $isPositive: boolean;
}

const TransactionPrice = styled.p<TransactionPrice>`
    position: absolute;
    right: 0;
    width: 49px;
    height: 19px;
    color: ${({ $isPositive }) => ($isPositive ? "rgb(65, 212, 168);" : "rgb(255, 75, 74)")};
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: right;
`;


const RecentTransactions = () => {
    const getTransactionPriceProps = (price: string) => {
        const isPositive = !price.startsWith("-");
        return {
            $isPositive: isPositive,
            children: price,
        };
    };

    return (
        <RecentTransactionsFrame>
            <RecentTransactionsLabel>Recent Transaction</RecentTransactionsLabel>
            <RecentTransactionsContent>
                <TransactionElement>
                    <TransactionType src={transactionType.src} />
                    <TransactionInfo>
                        <TransactionTypeName>Deposit from my Card</TransactionTypeName>
                        <TransactionDate>28 January 2021</TransactionDate>
                    </TransactionInfo>
                    <TransactionPrice {...getTransactionPriceProps("-$850")} />
                </TransactionElement>
                <TransactionElement>
                    <TransactionType src={transactionTypePP.src} />
                    <TransactionInfo>
                        <TransactionTypeName>Deposit Paypal</TransactionTypeName>
                        <TransactionDate>25 January 2021</TransactionDate>
                    </TransactionInfo>
                    <TransactionPrice {...getTransactionPriceProps("+$2,500")} />
                </TransactionElement>
                <TransactionElement>
                    <TransactionType src={transactionType.src} />
                    <TransactionInfo>
                        <TransactionTypeName>Jemi Wilson</TransactionTypeName>
                        <TransactionDate>21 January 2021</TransactionDate>
                    </TransactionInfo>
                    <TransactionPrice {...getTransactionPriceProps("+$5,400")} />
                </TransactionElement>
            </RecentTransactionsContent>
        </RecentTransactionsFrame>
    );
};

export default RecentTransactions;