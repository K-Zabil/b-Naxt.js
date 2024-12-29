"use client";

import Link from "next/link";
import { styled } from "styled-components";

const CardsLink = styled(Link)`
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
`;

const CardsLinkComponent = () => {
    return (
        <CardsLink href="/dashboard/cards">See All</CardsLink>
    );
};

export default CardsLinkComponent;