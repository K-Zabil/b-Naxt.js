"use client";

import { styled } from "styled-components";
import LineChart from "./LineChart";

const BalanceHistotyContainer = styled.div`
    position: absolute;
    width: 635px;
    height: 323px;
    right: 0;
    bottom: 0;
    margin-bottom: 39px;
    margin-right: 40px;
`;

const BalanceHistoryLabel = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    width: 168px;
    height: 27px;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const BalanceHistoryGrafContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 276px;
`;

const BalanceHistoty = () => {
    const chartData = [100, 300, 250, 500, 450, 800, 300, 550, 250, 650, 600];
    const chartLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];


    return (
        <BalanceHistotyContainer>
            <BalanceHistoryLabel>Balance History</BalanceHistoryLabel>
            <BalanceHistoryGrafContainer>
                <LineChart key="line-chart" data={chartData} labels={chartLabels} />
            </BalanceHistoryGrafContainer>
        </BalanceHistotyContainer>
    );
};

export default BalanceHistoty;