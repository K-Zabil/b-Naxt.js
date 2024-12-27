"use client";

import { useState } from 'react';
import { styled } from 'styled-components';
import liviaPicture from'@/app/icons/contacts/Livia.png';
import randyPicture from'@/app/icons/contacts/Randy.png';
import workmanPicture from'@/app/icons/contacts/Workman.png';

const QuickTransferFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 721px;
    margin-left: 40px;
    width: 445px;
    height: 323px;  
`;

const QuickTransferLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 157px;
    height: 27px;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const QuickTransferContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 276px;
    border-radius: 25px;
    background: rgb(255, 255, 255);
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const QuickTransferContacts = styled.div`
    width: 394px;
    height: 127px;
    margin-top: 35px;
    margin-bottom: 114px;
    margin-left: 25px;
    margin-right: 26px;
    display: flex; 
    gap: 28px;
    justify-content: center; 
    align-items: center;
`;

const QuickTransferToolContainer = styled.div`
    position: absolute;
    width: 395px;
    height: 50px;
    margin-top: 191px;
    margin-bottom: 35px;
    margin-left: 25px;
    margin-right: 25px;
`;

const AmountLabel = styled.label`
    position: absolute;
    left: 0;
    width: 103px;
    height: 19px;
    color: rgb(113, 142, 191);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 14px;
    margin-bottom: 15px;
`;

const AmountInput = styled.input`
    position: absolute;
    right: 0;
    width: 265px;
    height: 50px;
    border-radius: 50px;
    background: rgb(237, 241, 247);
`;

const SendButton = styled.button`
    position: absolute;
    right: 0;
    width: 125px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 4px 4px 18px -2px rgba(231, 228, 232, 0.8);
    background: rgb(24, 20, 243);
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
`;

const users = [
    { name: 'Livia Bator', role: 'CEO', avatar: liviaPicture.src },
    { name: 'Randy Press', role: 'Director', avatar: randyPicture.src },
    { name: 'Workman', role: 'Designer', avatar: workmanPicture.src },
];

const ContactContainer = styled.div`
    width: 94px;
    height: 127px;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
`;


const ContactPicture = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    border: 2px solid black;
    
`;

const ContactName = styled.p`
    width: 94px;
    height: 19px;
    color: rgb(35, 35, 35);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
    `;

const ContactProfession = styled.p`
    width: 57px;
    height: 18px;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
`;

const QuickTransfer = () => {
    const [amount, setAmount] = useState('');



    return (
        <QuickTransferFrame>
            <QuickTransferLabel>Quick Transfer</QuickTransferLabel>
            <QuickTransferContainer>
                <QuickTransferContacts>
                    {users.map((user, index) => (
                        <ContactContainer key={index}>
                            <ContactPicture src={user.avatar} alt={user.name} />
                            <ContactName>{user.name}</ContactName>
                            <ContactProfession>{user.role}</ContactProfession>
                        </ContactContainer>
                    ))}
                </QuickTransferContacts>
                <QuickTransferToolContainer>
                    <AmountLabel>Write Amount</AmountLabel>
                    <AmountInput />
                    <SendButton>Send</SendButton>
                </QuickTransferToolContainer>
            </QuickTransferContainer>
        </QuickTransferFrame>
    );
};

export default QuickTransfer;