import Header from "@/components/Header";
import SidebarComponent from "@/components/Sidebar";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header />
            <SidebarComponent />
            {children}
        </main>
    );
};