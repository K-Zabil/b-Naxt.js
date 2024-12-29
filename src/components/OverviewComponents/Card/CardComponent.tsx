"use client";

import { styled } from "styled-components";

const CardItem = styled.div`
    position: relative;
    width: 350px;
    height: 235px;
    margin-top: 44px;
`;

const CardForm = styled.div<{ theme: "dark" | "light" }>`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: ${({ theme }) =>
        theme === "dark"
            ? "linear-gradient(135.29deg, rgb(76, 73, 237) 2.349%, rgb(10, 6, 244) 101.077%)"
            : "white"};
    color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const BalanceForm = styled.div`
    position: absolute;
    margin-left: 26px;
    margin-top: 24px;
    width: 63px;
    height: 38px;
`;

const BalanceLable = styled.label<{ theme: "dark" | "light" }>`
    color: ${({ theme }) => (theme === "dark" ? "rgb(255, 255, 255)" : "rgb(113, 142, 191)")};
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    height: 14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const BalanceCount = styled.p<{ theme: "dark" | "light" }>`
    color: ${({ theme }) => (theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
    position: absolute;
    bottom: 0;
    width: 100%;
    width: 63px;
    height: 24px;
    font-family: Lato;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
`;

const CardChip = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 34.77px;
    height: 34.77px;
    margin-top: 25px;
    margin-right: 24.23px;
`;

const CartHolderForm = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 26px;
    margin-top: 95px;
    width: 90px;
    height: 34.89px;
`;

const CartHolderLabel = styled.label<{ theme: "dark" | "light" }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 85px;
    height: 14px;
    color: ${({ theme }) => (theme === "dark" ? "rgba(255, 255, 255)" : "rgb(113, 142, 191)")};
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const CartHolder = styled.p<{ theme: "dark" | "light" }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 18px;
    color: ${({ theme }) => (theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ValidityForm = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 183px;
    margin-top: 95px;
    width: 70px;
    height: 34.89px;
`;

const ValidityLabel = styled.label<{ theme: "dark" | "light" }>`
    position: absolute;
    top: 0;
    width: 100%;
    color: ${({ theme }) => (theme === "dark" ? "rgba(255, 255, 255)" : "rgb(113, 142, 191)")};
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const Validity = styled.p<{ theme: "dark" | "light" }>`
    position: absolute;
    bottom: 0;
    left: 0;
    margin-right: 28px;
    color: ${({ theme }) => (theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

const CardBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    width: 350px;
    height: 70px;
    border-radius: 0px 0px 25px 25px;
    background: linear-gradient(180.00deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0) 100%);
`;

const CardBottomContent = styled.div`
    position: absolute;
    justify-self: center;
    width: 300px;
    height: 30px;
    margin-left: 26px;
    margin-top: 20px;
`;

const CartNumber = styled.p<{ theme: "dark" | "light" }>`
    position: absolute;
    left: 0;
    margin-top: 2px;
    margin-bottom: 2px;
    width: 194px;
    height: 26px;
    display: flex; 
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => (theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")};
    font-size: 22px;
    font-weight: 600;
    line-height: normal; 
    letter-spacing: 0%;
    text-align: center;
`;

const CardType = styled.img`
    position: absolute;
    width: 44px;
    height: 30px;
    right: 0;
`;

export interface Card {
    balance: string;
    holder: string;
    validity: string;
    number: string;
    theme: "dark" | "light";
};

interface CardComponentProps {
    card: Card;
};

const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    return (
        <CardItem>
            <CardForm theme={card.theme}>
                <BalanceForm>
                    <BalanceLable theme={card.theme}>Balance</BalanceLable>
                    <BalanceCount theme={card.theme}>${card.balance}</BalanceCount>
                </BalanceForm>
                <CardChip src={`/icons/card/${card.theme}/chip.png`} />
                <CartHolderForm>
                    <CartHolderLabel theme={card.theme}>CARD HOLDER</CartHolderLabel>
                    <CartHolder theme={card.theme}>{card.holder}</CartHolder>
                </CartHolderForm>
                <ValidityForm>
                    <ValidityLabel theme={card.theme}>VALID THRU</ValidityLabel>
                    <Validity theme={card.theme}>{card.validity}</Validity>
                </ValidityForm>
                <CardBottom>
                    <CardBottomContent>
                        <CartNumber theme={card.theme}>{card.number}</CartNumber>
                        <CardType src={`/icons/card/${card.theme}/type.png`} />
                    </CardBottomContent>
                </CardBottom>
            </CardForm>
        </CardItem>
    );
};

export default CardComponent;