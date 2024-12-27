"use client";

import styled from "styled-components";
import PieComponent from "./ExpenseStatisticChart";

const ExpenseStatisticsFrame = styled.div`
    position: absolute;
    width: 350px;
    height: 367px;
    right: 0;
    margin-top: 330px;
    margin-right: 40px;
`;

const ExpenseStatisticsLabel = styled.label`
    position: absolute;
    width: 197px;
    height: 27px;
    top: 0;
    left: 0;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const ExpenseStatisticsGraficContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 322px;
    border-radius: 25px;
    background: rgb(255, 255, 255);
`;

const ExpenseStatistics = () => {
    return (
        <ExpenseStatisticsFrame>
            <ExpenseStatisticsLabel>Expense Statistics</ExpenseStatisticsLabel>
            <ExpenseStatisticsGraficContainer>
                <PieComponent key="pie-chart"/>
            </ExpenseStatisticsGraficContainer>
        </ExpenseStatisticsFrame>
    );
};

export default ExpenseStatistics;