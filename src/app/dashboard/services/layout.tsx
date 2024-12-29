interface Props {
    mainservice: React.ReactNode;
    servicelist: React.ReactNode;
};

export default function DashboardLayout({
    mainservice,
    servicelist
}: Props) {
    return (
        <div>
            <section>{mainservice}</section>
            <section>{servicelist}</section>
        </div>
    );
};