import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = {
        firstname: 'Charles',
        lastname: 'Kyasanku',
    }

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}/>
            <div className="flex flex-col size-full">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="Horizon Logo"/>
                    <div>
                        <MobileNav user={loggedIn}/>
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
