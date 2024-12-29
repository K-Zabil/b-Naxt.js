import CardItem, { Card } from "@/components/OverviewComponents/Card/CardComponent";
import OverviewLabel from "@/components/OverviewComponents/Card/LabelComponent";

export default function Cards() {
    const cards: Card[] = [
        { balance: "5756", holder: "Eddy Cusuma", validity: "12/22", number: "3778 **** **** 1234", theme: "dark" },
        { balance: "6000", holder: "Eddy Cusuma", validity: "10/23", number: "4888 **** **** 5678", theme: "light" },
        { balance: "5756", holder: "Eddy Cusuma", validity: "12/22", number: "3778 **** **** 1234", theme: "dark" },
    ];

    return (
        <div className="relative w-full h-full box-border grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[27px]">
            <OverviewLabel labelContent={"My Cards"} />
            {cards.map((card, index) => (
                <CardItem key={index} card={card} />
            ))}
        </div>
    );
};