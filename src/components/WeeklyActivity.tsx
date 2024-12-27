"use client";

import styled from "styled-components";
import BarChartComponent from "./BarChartActivityGrafic";

const WeeklyActivityFrame = styled.div`
    position: absolute;
    width: 730px;
    height: 367px;
    margin-left: 40px;
    margin-top: 330px;
`;

const WeeklyActivityLabel = styled.label`
    position: absolute;
    width: 166px;
    height: 27px;
    color: rgb(52, 60, 106);
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: left;
`;

const ActivityGraficFrame = styled.div`
    position: absolute;
    bottom: 0;
    width: 730px;
    height: 322px;
    border-radius: 25px;
    background: rgb(255, 255, 255);
`;

const WeeklyActivity = () => {
    return (
        <WeeklyActivityFrame>
            <WeeklyActivityLabel>Weekly Activity</WeeklyActivityLabel>
            <ActivityGraficFrame>
                <BarChartComponent key="bar-chart"/>
            </ActivityGraficFrame>
        </WeeklyActivityFrame>
    );
};

export default WeeklyActivity;