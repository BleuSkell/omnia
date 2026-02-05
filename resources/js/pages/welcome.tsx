import { App, Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';
import { AppHeader } from '@/components/app-header';
import { RadialCarousel } from '@/components/radial-carousel';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="All-in-one site">
            </Head>
            <AppHeader/>
            <main className="min-h-screen bg-white">
                <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
                    <h1 className="text-9xl font-bold tracking-wide font-heading">Welcome to Omnia</h1>
                    <h3 className="text-3xl font-medium tracking-wide text-center w-1/2 font-text">
                        A platform packed with everything specific and non-specific! 
                        Including but not limited to: a components library, storage, a desktop companion, and much more!
                    </h3>
                </div>
                
                <RadialCarousel/>
            </main>
        </>
    );
}
