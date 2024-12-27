"use client";

import Link from "next/link";
import { styled } from "styled-components";
import cardCheap from "@/app/icons/card/cardChip.png";
import cardType from "@/app/icons/card/cardType.png";
import { usePathname } from "next/navigation";

interface MyCardsFrameProps {
    $IsCardPage: boolean;
}

const MyCardsFrame = styled.div<MyCardsFrameProps>`
    position: absolute; 
    display: flex;
    left: 0;
    margin-left: 40px;
    margin-top: 24px;
    width: ${({ $IsCardPage }) => ($IsCardPage ? '1110px' : '730px')};
    height: 282px;
    flex-wrap: wrap; /* Добавляем перенос элементов */
    gap: 20px; /* Расстояние между карточками */
`;

const MyCardsLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const CardsLink = styled(Link)<MyCardsFrameProps>`
    position: absolute;
    top: 0;
    right: 0;
    color: rgb(52, 60, 106);
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: right;
    margin-top: 5px;
    margin-right: 7px;
    display: ${({ $IsCardPage }) => ($IsCardPage ? 'none' : '')};
`;

const CardFormContainer = styled.div`
    position: relative;
    width: 350px;
    height: 235px;
    margin-top: 50px;

`;

const CardForm = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: linear-gradient(135.29deg, rgb(76, 73, 237) 2.349%, rgb(10, 6, 244) 101.077%);
`;

const BalanceForm = styled.div`
    position: absolute;
    margin-left: 26px;
    margin-top: 24px;
    width: 63px;
    height: 38px;
`;

const BalanceLable = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    height: 14px;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const BalanceCount = styled.p`
    position: absolute;
    bottom: 0;
    width: 100%;
    width: 63px;
    height: 24px;
    color: rgb(255, 255, 255);
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

const CartHolderLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 85px;
    height: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const CartHolder = styled.p`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 18px;
    color: rgb(255, 255, 255);
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

const ValidityLabel = styled.label`
    position: absolute;
    top: 0;
    width: 100%;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
`;

const Validity = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    margin-right: 28px;
    color: rgb(255, 255, 255);
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

const CartNumber = styled.p`
    position: absolute;
    left: 0;
    margin-top: 2px;
    margin-bottom: 2px;
    width: 194px;
    height: 26px;
    display: flex; 
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
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

const MyCards = () => {
    const pathname = usePathname();
    console.log(pathname);

    let isCardPage = pathname === '/main/cards';

    return (
        <MyCardsFrame $IsCardPage={isCardPage}>
            <MyCardsLabel>My Cards</MyCardsLabel>
            <CardsLink href="/main/cards" $IsCardPage={isCardPage}>See All</CardsLink>

            {/* Первая карточка */}
            <CardFormContainer>
                <CardForm>
                    <BalanceForm>
                        <BalanceLable>Balance</BalanceLable>
                        <BalanceCount>$5,756</BalanceCount>
                    </BalanceForm>
                    <CardChip src={cardCheap.src} />
                    <CartHolderForm>
                        <CartHolderLabel>CARD HOLDER</CartHolderLabel>
                        <CartHolder>Eddy Cusuma</CartHolder>
                    </CartHolderForm>
                    <ValidityForm>
                        <ValidityLabel>VALID THRU</ValidityLabel>
                        <Validity>12/22</Validity>
                    </ValidityForm>
                    <CardBottom>
                        <CardBottomContent>
                            <CartNumber>3778 **** **** 1234</CartNumber>
                            <CardType src={cardType.src} />
                        </CardBottomContent>
                    </CardBottom>
                </CardForm>
            </CardFormContainer>

            {isCardPage && (
                <CardFormContainer>
                    <CardForm>
                        <BalanceForm>
                            <BalanceLable>Balance</BalanceLable>
                            <BalanceCount>$5,756</BalanceCount>
                        </BalanceForm>
                        <CardChip src={cardCheap.src} />
                        <CartHolderForm>
                            <CartHolderLabel>CARD HOLDER</CartHolderLabel>
                            <CartHolder>Eddy Cusuma</CartHolder>
                        </CartHolderForm>
                        <ValidityForm>
                            <ValidityLabel>VALID THRU</ValidityLabel>
                            <Validity>12/22</Validity>
                        </ValidityForm>
                        <CardBottom>
                            <CardBottomContent>
                                <CartNumber>3778 **** **** 1234</CartNumber>
                                <CardType src={cardType.src} />
                            </CardBottomContent>
                        </CardBottom>
                    </CardForm>
                </CardFormContainer>
            )}

            <CardFormContainer >
                <CardForm className='bg-white'>
                    <BalanceForm>
                        <BalanceLable>Balance</BalanceLable>
                        <BalanceCount>$5,756</BalanceCount>
                    </BalanceForm>
                    <CardChip src={cardCheap.src} />
                    <CartHolderForm>
                        <CartHolderLabel>CARD HOLDER</CartHolderLabel>
                        <CartHolder>Eddy Cusuma</CartHolder>
                    </CartHolderForm>
                    <ValidityForm>
                        <ValidityLabel>VALID THRU</ValidityLabel>
                        <Validity>12/22</Validity>
                    </ValidityForm>
                    <CardBottom>
                        <CardBottomContent>
                            <CartNumber>3778 **** **** 1234</CartNumber>
                            <CardType src={cardType.src} />
                        </CardBottomContent>
                    </CardBottom>
                </CardForm>
            </CardFormContainer>
        </MyCardsFrame>
    );
};

export default MyCards;