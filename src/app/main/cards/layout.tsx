import DashboardFrame from "@/components/DashboardFrame";

interface Props {
    cards: React.ReactNode;
};

export default function DashboardLayout({
    cards,
}: Props) {
    return (
        <DashboardFrame>
            <section>{cards}</section>
        </DashboardFrame>
    );
};