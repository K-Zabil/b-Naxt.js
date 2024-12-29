"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { styled } from "styled-components";

interface MyCardsFrameProps { $IsCardPage: boolean; }

const MyCardsFrame = styled.div<MyCardsFrameProps>`
    position: absolute; 
    display: flex;
    left: 0;
    margin-left: 40px;
    margin-top: 24px;
    width: ${({ $IsCardPage }) => ($IsCardPage ? '1110px' : '730px')};
    height: 282px;
    flex-wrap: wrap; 
    gap: 20px;
`;

const MyCardsContainer = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isCardPage = pathname === '/dashboard/cards';

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div>Loading ...</div>;

    return (
        <MyCardsFrame $IsCardPage={isCardPage}>
            {children}
        </MyCardsFrame>
    );
};

export default MyCardsContainer;