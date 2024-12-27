import DashboardFrame from "@/components/DashboardFrame";

interface Props {
    loanstype: React.ReactNode;
    loanslist: React.ReactNode;
};

export default function DashboardLayout({
    loanstype,
    loanslist
}: Props) {
    return (
        <DashboardFrame>
            <section>{loanstype}</section>
            <section>{loanslist}</section>
        </DashboardFrame>
    );
};