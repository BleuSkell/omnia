import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Menu } from 'lucide-react';
import { useState } from 'react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { dashboard, login, register } from '@/routes';
import type { BreadcrumbItem, NavItem, SharedData } from '@/types';
import AppLogo from './app-logo';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import '../../css/nav-rotate.css';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

const productNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Projects',
        href: '#',
    },
    {
        title: 'Docs',
        href: '#',
    },
];

const exploreNavItems: NavItem[] = [
    {
        title: 'About',
        href: '#',
    },
    {
        title: 'Contact',
        href: '#',
    },
];

export function AppHeader({ breadcrumbs = [] }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const page = usePage<SharedData>();
    const { auth } = page.props;

    const handleMenuToggle = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setTimeout(() => {
                setIsDropdownOpen(true);
            }, 300);
        } else {
            setIsDropdownOpen(false);
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <div className="flex w-full justify-center">
                <div className={cn(
                    "bg-black text-white rounded-md mt-8 p-2 flex-col items-center justify-between transition-all duration-300",
                    isMenuOpen ? "w-[90%] p-4" : "w-[40%]"
                )}>
                    {/* Desktop Navigation */}
                    <div className={cn("flex items-center justify-between", isMenuOpen ? "border-b-2 border-neutral-700 pb-4" : "")}>
                        <div className="hidden h-full items-center lg:flex">
                            <Button
                                className="menu-button p-1 !ring-0 text-white bg-none text-xl tracking-wide
                                hover:bg-neutral-800 hover:text-white"
                                onClick={handleMenuToggle}
                            >
                                <Menu className="!h-6 !w-6"/>
                                Menu
                            </Button>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            <div className="relative flex items-center">
                                <div className="hidden lg:flex w-34">
                                    <Link
                                        href="/"
                                    >
                                        <AppLogo/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="relative flex items-center">
                                <div className="ml-1 hidden gap-1 lg:flex">
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="dashboard-link"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={login()}
                                                className="account-button bg-neutral-600 px-8 py-3 rounded-full font-medium tracking-wide text-lg overflow-hidden"
                                            >
                                            <span className="button-text inline-block">
                                                Login
                                            </span>
                                            </Link>
                                            <Link
                                                href={register()}
                                                className="account-button bg-green-400 px-6 py-3 rounded-md text-black font-medium tracking-wide text-lg overflow-hidden"
                                            >
                                            <span className="button-text inline-block">
                                                Register
                                            </span>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cn(
                            "hidden p-4 bg-black flex justify-between",
                            isMenuOpen ? "flex" : "hidden"
                        )}
                    >
                        <div className="flex flex-col">
                            <h4>OUR PRODUCTS</h4>
                            {productNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h4>EXPLORE</h4>
                            {exploreNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="cursor-pointer"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="flex w-full border-b border-sidebar-border/70">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
