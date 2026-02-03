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
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn } from '@/lib/utils';
import { dashboard, login, register } from '@/routes';
import type { BreadcrumbItem, NavItem, SharedData } from '@/types';
import AppLogo from './app-logo';
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

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AppHeader({ breadcrumbs = [] }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();

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
                    "bg-black text-white rounded-md mt-8 p-6 flex items-center justify-between h-16 transition-all duration-300",
                    isMenuOpen ? "w-[90%]" : "w-[40%]"
                )}>
                    {/* Desktop Navigation */}
                    <div className="hidden h-full items-center lg:flex">
                        <DropdownMenu
                            open={isDropdownOpen}
                            onOpenChange={(open) => {
                                if (!open) {
                                    setIsDropdownOpen(false);
                                    setIsMenuOpen(false);
                                }
                            }}
                        >
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="p-1 !ring-0 text-white bg-none text-xl tracking-wide
                                     hover:bg-neutral-800 hover:text-white
                                     focus:bg-neutral-800 focus:text-white
                                     active:bg-neutral-800 active:text-white"
                                    onClick={handleMenuToggle}
                                >
                                    <Menu className="!h-6 !w-6"/>
                                    Menu
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={cn(
                                "animate-in fade-in-0 slide-in-from-top-2 flex justify-between transition-all duration-300",
                                isMenuOpen ? "w-[90vw]" : "w-[40vw]"
                            )} align="start">
                                <div
                                    className="w-full bg-gray-400 rounded-md"
                                >
                                    <h4>OUR PRODUCTS</h4>
                                    {productNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-accent rounded-md cursor-pointer"
                                        >
                                            {item.icon && (
                                                <item.icon className="h-4 w-4" />
                                            )}
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div
                                    className="w-full"
                                >
                                    {exploreNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-accent rounded-md cursor-pointer"
                                        >
                                            {item.icon && (
                                                <item.icon className="h-4 w-4" />
                                            )}
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
