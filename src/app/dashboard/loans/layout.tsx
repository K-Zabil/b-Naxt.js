interface Props {
    loanstype: React.ReactNode;
    loanslist: React.ReactNode;
};

export default function DashboardLayout({
    loanstype,
    loanslist
}: Props) {
    return (
        <div>
            <section>{loanstype}</section>
            <section>{loanslist}</section>
        </div>
    );
};