import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, Layout, LayoutGrid, Menu, Search } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn, toUrl } from '@/lib/utils';
import { dashboard } from '@/routes';
import type { BreadcrumbItem, NavItem, SharedData } from '@/types';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';
import { useState } from 'react';

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

const rightNavItems: NavItem[] = [
    {
        title: 'Login',
        href: '/login',
    },
    {
        title: 'Register',
        href: '/register',
    }
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
                    "bg-black text-white rounded-md mt-8 p-6 flex items-center h-16 transition-all duration-300",
                    isMenuOpen ? "w-[90%]" : "w-[40%]"
                )}>
                    {/* Desktop Navigation */}
                    <div className="ml-6 hidden h-full items-center space-x-6 lg:flex">
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
                                    className="p-1"
                                    onClick={handleMenuToggle}
                                >
                                    <Menu className="h-5 w-5"/>
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

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <div className="ml-1 hidden gap-1 lg:flex">
                                <h1>Omnia</h1>
                            </div>
                        </div>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            <div className="ml-1 hidden gap-1 lg:flex">
                                {rightNavItems.map((item) => (
                                    <TooltipProvider
                                        key={item.title}
                                        delayDuration={0}
                                    >
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <a
                                                    href={toUrl(item.href)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex h-9 items-center justify-center rounded-md bg-transparent p-2 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                >
                                                    {item.title}
                                                </a>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
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
