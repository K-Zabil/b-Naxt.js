import MyCardsContainer from "@/components/DashboardComponents/MyCardsContainer";

interface Props {
    cards: React.ReactNode;
};

export default function DashboardLayout({
    cards,
}: Props) {
    return (
        <div>
            <MyCardsContainer>{cards}</MyCardsContainer>
        </div>
    );
};