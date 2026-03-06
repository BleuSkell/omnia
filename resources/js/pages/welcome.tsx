import { Head, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { AppHeader } from '@/components/omnia/app-header';
import { RadialCarousel } from '@/components/omnia/radial-carousel';
import { PullDownScreen } from '@/components/omnia/pulldown-screen';

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
            
            <main className="min-h-screen bg-[#fffefc]">
                <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-6 mb-18">
                    <h1 className="text-8xl font-medium tracking-wide mt-46 mb-22">Welcome to Omnia</h1>
                    <p className="text-3xl font-light tracking-wide leading-relaxed text-center w-2/3">
                        A website packed with all sorts of fun features and handy tools!
                        Such as <span className="bg-neutral-200 px-2 my-2 rounded-full">The Library</span>, a place full of handy website components. 
                        Omnia's <span className="bg-neutral-200 px-2 my-2 rounded-full">Desktop companion</span>, who keeps you company as you work.
                        And many more fun little features and tools!
                    </p>
                </div>
                
                <RadialCarousel/>

                <p className="flex justify-self-center text-4xl font-light tracking-wide text-center w-1/2 w-1/2">
                    Omnia is an ever expanding personal project with all sorts of features and tools. 
                    Discover what Omnia means and what it can do.
                </p>

                <PullDownScreen/>
            </main>
        </>
    );
}
