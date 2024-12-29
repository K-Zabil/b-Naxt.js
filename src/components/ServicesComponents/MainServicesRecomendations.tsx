"use client";

import styled from "styled-components";

const MainServiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 31px 40px;
    width: 1110px;
    height: 120px;
    gap: 30px;
`;

const MainServiceItem = styled.div`
    flex: 1; 
    max-width: 350px; 
    height: 100%;
    border-radius: 25px;
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    padding: 10px;
`;

const MainServiceIcon = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    margin-right: 20px;
`;

const MainServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MainServiceName = styled.p`
    color: rgb(35, 35, 35);
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
`;

const MainServiceDescrition = styled.p`
    color: rgb(113, 142, 191);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
`;

const mainService = [
    { name: "Life Insurance", desc: "Unlimited protection", src: "/icons/services/insuarence.png" },
    { name: "Shopping", desc: "Buy. Think. Grow.", src: "/icons/services/shopping.png" },
    { name: "Safety", desc: "We are your allies", src: "/icons/services/safety.png" }
];

const MainServicesRecomendations = () => {
    return (
        <MainServiceContainer>
            {mainService.map((service, index) => (
                <MainServiceItem key={index}>
                    <MainServiceIcon src={service.src ?? ""} alt={service.name} />
                    <MainServiceInfo>
                        <MainServiceName>{service.name}</MainServiceName>
                        <MainServiceDescrition>{service.desc}</MainServiceDescrition>
                    </MainServiceInfo>
                </MainServiceItem>
            ))}
        </MainServiceContainer>
    );
};

export default MainServicesRecomendations;