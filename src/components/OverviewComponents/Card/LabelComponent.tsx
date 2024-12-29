"use client";

import { styled } from "styled-components";

const Label = styled.label`
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

interface OverviewLabelProps {
    labelContent: string
};

const OverviewLabel: React.FC<OverviewLabelProps>  = ({labelContent}) => {
    return (
        <Label>{labelContent}</Label>
    );
};

export default OverviewLabel;