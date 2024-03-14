import ApplicationLogo from '@/components/app-logo';
import NavLink from '@/components/nav-link';
import {Head, Link, router, usePage} from '@inertiajs/react';
import {Button} from '@/components/button'
import {Badge} from '@/components/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/dropdown-menu';
import {Toaster} from '@/components/sonner';
import Header from '@/components/header';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/avatar';
import {ThemeToggle} from '@/components/theme';
import {MenuIcon, UserIcon} from "lucide-react";
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/drawer.jsx";

const pages = [
    {name: 'Dashboard', href: 'dashboard'},
]

export default function AppLayout({title = null, children}) {
    const user = usePage().props.auth.user
    return (
        <>
            <Head title={title}/>
            <Toaster/>
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 justify-between gap-2 items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link
                            className="mr-6"
                            href="/">
                            <ApplicationLogo className="h-8 w-8 fill-foreground"/>
                        </Link>
                        <nav className="flex items-center gap-2 text-sm">
                            {pages.map((page, i) => (
                                <NavLink key={i} href={route(page.href)} active={route().current(page.href)}
                                         children={page.name}/>
                            ))}
                        </nav>
                    </div>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="inline-flex md:hidden flex-shrink-0">
                                <MenuIcon/>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent side="left">
                            <DrawerHeader>
                                <DrawerTitle>PAGES</DrawerTitle>
                            </DrawerHeader>
                            <div className="flex flex-col gap-3 py-3">
                                {pages.map((page, i) => (
                                    <DrawerClose key={i} asChild>
                                        <NavLink href={route(page.href)} active={route().current(page.href)}
                                                 children={page.name}/>
                                    </DrawerClose>
                                ))}
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                        <Button
                            id="search"
                            variant="outline"
                            className="w-full md:max-w-xs flex justify-between items-center">
                            <span className='inline-flex'>
                                Search ...
                            </span>
                            <Badge variant="outline">/</Badge>
                        </Button>
                        <ThemeToggle/>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div variant="outline"
                                     className="flex-shrink-0 gap-2 items-center md:flex cursor-pointer">
                                    <Avatar className="w-8 h-8 border-2 border-foreground">
                                        <AvatarImage src={user.photo ?? ''} alt={user.name}/>
                                        <AvatarFallback><UserIcon/></AvatarFallback>
                                    </Avatar>
                                    <span className='text-sm font-medium hidden md:inline-flex'>{user.name}</span>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="block md:hidden">{user.name}</DropdownMenuLabel>
                                <Link href={route('profile.edit', user.id)}>
                                    <DropdownMenuItem>
                                        Profile
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            {title && (<Header children={title}/>)}
            <main className="container py-8">{children}</main>
        </>
    )
}
