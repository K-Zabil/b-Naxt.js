import MyCardsContainer from "@/components/DashboardComponents/MyCardsContainer";

interface Props {
    activity: React.ReactNode;
    cards: React.ReactNode;
    expenses: React.ReactNode;
    balance: React.ReactNode;
    transactions: React.ReactNode;
    transfer: React.ReactNode;
};

export default function DashboardLayout({
    activity,
    cards,
    expenses,
    balance,
    transactions,
    transfer,
}: Props) {
    return (
        <div>
            <MyCardsContainer>{cards}</MyCardsContainer>
            <section>{transactions}</section>
            <section>{activity}</section>
            <section>{expenses}</section>
            <section>{balance}</section>
            <section>{transfer}</section>
        </div>
    );
};