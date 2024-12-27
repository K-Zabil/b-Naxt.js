import DashboardFrame from "@/components/DashboardFrame";

interface Props {
    mainservice: React.ReactNode;
    servicelist: React.ReactNode;
};

export default function DashboardLayout({
    mainservice,
    servicelist
}: Props) {
    return (
        <DashboardFrame>
            <section>{mainservice}</section>
            <section>{servicelist}</section>
        </DashboardFrame>
    );
};