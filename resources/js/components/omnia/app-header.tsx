import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { dashboard, login, register } from '@/routes';
import type { BreadcrumbItem, NavItem, SharedData } from '@/types';
import instagramIcon from '../../../../resources/media/img/socials/instagram-icon.png';
import youtubeIcon from '../../../../resources/media/img/socials/youtube-icon.png';
import spotifyIcon from '../../../../resources/media/img/socials/spotify-icon.png';
import featuredImage from '../../../../resources/media/img/featured/everywhere-nowhere-cover.png';
import AppLogo from '../app-logo';
import '../../../css/app-header.css';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

const productNavItems: NavItem[] = [
    {
        title: 'Desktop Companion (WIP)',
        href: '#',
    },
    {
        title: 'The Library (WIP)',
        href: '#',
    },
    {
        title: 'Omnia Storage (WIP)',
        href: '#',
    },
];

const exploreNavItems: NavItem[] = [
    {
        title: 'About (WIP)',
        href: '#',
    },
    {
        title: 'Contact (WIP)',
        href: '#',
    },
];

export function AppHeader({ breadcrumbs = [] }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const page = usePage<SharedData>();
    const { auth } = page.props;

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

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
            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={handleMenuToggle}
                />
            )}

            {/* Mobile Navigation */}
            <div data-aos="fade-down" className={cn("lg:hidden flex w-full justify-center fixed z-50", isMenuOpen ? "h-full" : "")}>
                <div className={cn(
                    "bg-black text-white font-text rounded-md mt-4 p-2 flex-col items-center justify-between transition-all duration-300",
                    isMenuOpen ? "w-full p-0 mt-0 rounded-none" : "w-[90%]"
                )}>
                    <div className={cn("flex items-center justify-between", isMenuOpen ? "border-b-2 border-neutral-700 p-4" : "")}>
                        <div className="h-full items-center">
                            <Button
                                variant="ghost"
                                className="menu-button p-1 !ring-0 text-white bg-none text-xl tracking-wide
                                hover:bg-neutral-800 hover:text-white"
                                onClick={handleMenuToggle}
                            >
                                {isMenuOpen ? <X className="!h-6 !w-6"/> : <Menu className="!h-6 !w-6"/>}
                                Menu
                            </Button>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            <div className="relative flex items-center">
                                <div className="flex w-34">
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
                                <div className="ml-1 gap-1 flex">
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
                            "hidden pt-4 bg-black flex flex-col overflow-y-auto max-h-[calc(100vh-120px)]",
                            isMenuOpen ? "flex p-4" : "hidden"
                        )}
                    >   
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col bg-neutral-800 w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">OUR PRODUCTS</h4>
                                <div className="mt-8 flex flex-col gap-10">
                                    {productNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="cursor-pointer flex text-3xl tracking-wide border-b-2 border-neutral-700 w-full pb-4"
                                        >
                                            <span 
                                                className="animated-underline"
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">EXPLORE</h4>
                                <div className="mt-8 flex flex-col gap-10">
                                    {exploreNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="cursor-pointer flex text-3xl tracking-wide border-b-2 border-neutral-700 w-full pb-4"
                                        >
                                            <span 
                                                className="animated-underline"
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col bg-neutral-800 w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">FEATURED</h4>

                                <div>
                                    <a href="#">
                                        <img src={featuredImage} alt="Everywhere Nowhere Cover" className="mt-8 rounded-md shadow-lg w-4/6"/>
                                    </a>
                                    <h3 className="text-2xl font-semibold mt-4">Everywhere and nowhere</h3>
                                    <p className="mt-2 text-neutral-400">SEERVS</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start py-8">
                            <div className="flex">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-[70px] mr-4"
                                >
                                    <img src={spotifyIcon} alt="spotify"/>
                                </a>
                                
                                <a
                                    href="https://www.instagram.com/seervska/"
                                    target="_blank"
                                    className="w-[70px] mr-4"
                                >
                                    <img src={instagramIcon} alt="instagram"/>
                                </a>

                                <a
                                    href="https://www.youtube.com/@SEERVS"
                                    target="_blank"
                                    className="w-[70px]"
                                >
                                    <img src={youtubeIcon} alt="youtube"/>
                                </a>
                            </div>

                            <h4 className="text-sm text-neutral-500 mt-4">"AI could never replicate or even come near human creations."</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Desktop Navigation */}
            <div data-aos="fade-down" className="hidden lg:flex w-full justify-center fixed z-50">
                <div className={cn(
                    "bg-black text-white font-text rounded-md mt-8 p-2 flex-col items-center justify-between transition-all duration-300",
                    isMenuOpen ? "expanded-navbar p-4" : "collapsed-navbar"
                )}>
                    <div className={cn("flex items-center justify-between", isMenuOpen ? "border-b-2 border-neutral-700 pb-4" : "")}>
                        <div className="hidden h-full items-center lg:flex">
                            <Button
                                variant="ghost"
                                className="menu-button p-1 !ring-0 text-white bg-none text-xl tracking-wide
                                hover:bg-neutral-800 hover:text-white"
                                onClick={handleMenuToggle}
                            >
                                {isMenuOpen ? <X className="!h-6 !w-6"/> : <Menu className="!h-6 !w-6"/>}
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
                                            className="account-button bg-green-400 px-6 py-3 rounded-md text-black font-medium tracking-wide text-lg overflow-hidden"
                                        >
                                        <span className="button-text inline-block">
                                            Dashboard
                                        </span>
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
                            "hidden pt-4 bg-black flex flex-col",
                            isMenuOpen ? "flex" : "hidden"
                        )}
                    >   
                        <div className="flex justify-between">
                            <div className="flex flex-col bg-neutral-800 w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">OUR PRODUCTS</h4>
                                <div className="mt-8 flex flex-col gap-10">
                                    {productNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="cursor-pointer flex text-3xl tracking-wide border-b-2 border-neutral-700 w-full pb-4"
                                        >
                                            <span 
                                                className="animated-underline"
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">EXPLORE</h4>
                                <div className="mt-8 flex flex-col gap-10">
                                    {exploreNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="cursor-pointer flex text-3xl tracking-wide border-b-2 border-neutral-700 w-full pb-4"
                                        >
                                            <span 
                                                className="animated-underline"
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col bg-neutral-800 w-full p-12 rounded-md">
                                <h4 className="text-neutral-300">FEATURED</h4>

                                <div>
                                    <a href="#">
                                        <img src={featuredImage} alt="Everywhere Nowhere Cover" className="mt-8 rounded-md shadow-lg w-4/6"/>
                                    </a>
                                    <h3 className="text-2xl font-semibold mt-4">Everywhere and nowhere</h3>
                                    <p className="mt-2 text-neutral-400">SEERVS</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end py-8">
                            <div className="flex">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-[70px] mr-4"
                                >
                                    <img src={spotifyIcon} alt="spotify"/>
                                </a>
                                
                                <a
                                    href="https://www.instagram.com/seervska/"
                                    target="_blank"
                                    className="w-[70px] mr-4"
                                >
                                    <img src={instagramIcon} alt="instagram"/>
                                </a>

                                <a
                                    href="https://www.youtube.com/@SEERVS"
                                    target="_blank"
                                    className="w-[70px]"
                                >
                                    <img src={youtubeIcon} alt="youtube"/>
                                </a>
                            </div>

                            <h4 className="text-sm text-neutral-500 mt-4">"AI could never replicate or even come near human creations."</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
