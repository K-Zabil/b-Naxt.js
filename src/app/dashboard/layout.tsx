"use client";

import { useState, useEffect } from "react";
import DashboardContainer from "@/components/DashboardComponents/DashboardContainer";
import HeaderComponent from "@/components/NavigationComponents/HeaderComponent";
import SidebarComponent from "@/components/NavigationComponents/SidebarComponent";
import LoadingDashboard from "./loading";

interface Props {
    children: React.ReactNode;
};

export default function ServicesLayout({ children }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadComponents = async () => {
            // await new Promise((resolve) => setTimeout(resolve, 2000));
            setIsLoading(false); 
        };

        loadComponents();
    }, []);

    if (isLoading) {
        return <LoadingDashboard />; 
    }

    return (
        <main>
            <HeaderComponent />
            <SidebarComponent />
            <DashboardContainer>
                {children}
            </DashboardContainer>
        </main>
    );
};
