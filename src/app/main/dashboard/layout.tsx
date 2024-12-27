import DashboardFrame from "@/components/DashboardFrame";

interface Props {
    activity: React.ReactNode;
    cards: React.ReactNode;
    expense: React.ReactNode;
    ledger: React.ReactNode;
    transactions: React.ReactNode;
    transfer: React.ReactNode;
};

export default function DashboardLayout({
    activity,
    cards,
    expense,
    ledger,
    transactions,
    transfer,
}: Props) {
    return (
        <DashboardFrame>
            <section>{cards}</section>
            <section>{transactions}</section>
            <section>{activity}</section>
            <section>{expense}</section>
            <section>{ledger}</section>
            <section>{transfer}</section>
        </DashboardFrame>
    );
};