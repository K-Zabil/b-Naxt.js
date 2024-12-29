"use client";

import { styled } from "styled-components";

const ServiceListFrame = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 1110px;
    margin-left: 40px;
    margin-top: 175px;
    bottom: 54px;
`;

const ServiceListLabel = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    width: 196px;
    height: 27px;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceListContainer = styled.div`
    position: absolute;
    top: 55px;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px; 
`;

const ServiceItem = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 20px;
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
`;

const ServiceImg = styled.img`
    position: absolute;
    left:15px;
    width: 60px;
    height: 60px;
    border-radius: 100px;
`;

const ServiceInfo = styled.div`
    position: absolute;
    left: 95px;
    width: 159px;
    height: 44px;
`;

const ServiceName = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    height: 19px;
    color: rgb(35, 35, 35);
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceDescription = styled.p`
    position: absolute;
    bottom: 0;
    width: 100%;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI1 = styled.div`
    position: absolute;
    left: 338px;
    width: 116px;
    height: 44px;
`;

const ServiceLI1Name = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    height: 19px;
    color: rgb(35, 35, 35);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI1Description = styled.p`
    position: absolute;
    bottom: 0;
    width: 1005;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI2 = styled.div`
    position: absolute;
    left: 536px;
    width: 116px;
    height: 44px;
`;

const ServiceLI2Name = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    height: 19px;
    color: rgb(35, 35, 35);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI2Description = styled.p`
    position: absolute;
    bottom: 0;
    width: 1005;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI3 = styled.div`
    position: absolute;
    left: 734px;
    width: 116px;
    height: 44px;
`;

const ServiceLI3Name = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    height: 19px;
    color: rgb(35, 35, 35);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceLI3Description = styled.p`
    position: absolute;
    bottom: 0;
    width: 1005;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
`;

const ServiceDetailsButton = styled.button`
    position: absolute;
    left: 930px;
    width: 150px;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid rgb(113, 142, 191);
    border-radius: 50px;
    color: rgb(113, 142, 191);
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
`;

const serviList = [
    { name: "Business loans", desc: "It is a long established", srcImg: "/icons/services/servicesList/businessloans.png" },
    { name: "Checking accounts", desc: "It is a long established ", srcImg: "/icons/services/servicesList/chacaccounts.png" },
    { name: "Savings accounts", desc: "It is a long established", srcImg: "/icons/services/servicesList/savingaccounts.png" },
    { name: "Debit and credit cards", desc: "It is a long established", srcImg: "/icons/services/servicesList/debandcredcards.png" },
    { name: "Life Insurance", desc: "It is a long established", srcImg: "/icons/services/safety.png" },
    { name: "Business loans", desc: "It is a long established", srcImg: "/icons/services/servicesList/businessloans.png" },
];

const ServiceListComponent = () => {
    return (
        <ServiceListFrame>
            <ServiceListLabel>Bank Services List</ServiceListLabel>
            <ServiceListContainer>
                {serviList.map((service, index) => (
                    <ServiceItem key={index}>
                        <ServiceImg src={service.srcImg ?? ""} alt={service.name} />
                        <ServiceInfo>
                            <ServiceName>{service.name}</ServiceName>
                            <ServiceDescription>{service.desc}</ServiceDescription>
                        </ServiceInfo>
                        <ServiceLI1>
                            <ServiceLI1Name>Lorem Ipsum</ServiceLI1Name>
                            <ServiceLI1Description>Many publishing</ServiceLI1Description>
                        </ServiceLI1>
                        <ServiceLI2>
                            <ServiceLI2Name>Lorem Ipsum</ServiceLI2Name>
                            <ServiceLI2Description>Many publishing</ServiceLI2Description>
                        </ServiceLI2>
                        <ServiceLI3>
                            <ServiceLI3Name>Lorem Ipsum</ServiceLI3Name>
                            <ServiceLI3Description>Many publishing</ServiceLI3Description>
                        </ServiceLI3>
                        <ServiceDetailsButton>View Details</ServiceDetailsButton>
                    </ServiceItem>
                ))}
            </ServiceListContainer>
        </ServiceListFrame>
    );
};

export default ServiceListComponent;