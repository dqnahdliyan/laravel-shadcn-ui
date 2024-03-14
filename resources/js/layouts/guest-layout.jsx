import {Head, Link} from '@inertiajs/react';
import {ThemeToggle} from "@/components/theme.jsx";
import AppLogo from "@/components/app-logo.jsx";

export default function GuestLayout({title = null, children}) {
    return (
        <>
            <Head title={title}/>
            <div
                className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className="absolute top-4 right-4">
                    <ThemeToggle/>
                </div>
                <div>
                    <Link href="/">
                        <AppLogo className="w-20 h-20 fill-current text-gray-500"/>
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6">
                    {children}
                </div>
            </div>
        </>
    );
}
