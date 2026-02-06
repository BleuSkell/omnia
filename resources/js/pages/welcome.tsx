import { Head, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { AppHeader } from '@/components/app-header';
import { RadialCarousel } from '@/components/radial-carousel';
import { VerticalCarousel } from '@/components/vertical-carousel';
import featuredImage from '../../img/featured/everywhere-nowhere-cover.png';

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
                <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-6">
                    <h1 className="text-9xl font-medium tracking-wide font-roboto">Welcome to Omnia</h1>
                    <h3 className="text-3xl font-medium tracking-wide text-center w-1/2 font-roboto">
                        A platform packed with everything specific and non-specific! 
                        Including but not limited to: a components library, storage, a desktop companion, and much more!
                    </h3>
                </div>
                
                <RadialCarousel/>

                <div className="flex justify-center">
                    <h3 className="text-3xl font-medium tracking-wide text-center w-1/2 font-roboto w-1/2">
                        Omnia is an ever-evolving personal project with a wide variety of features. 
                        My goal with this platform is to better myself and create helpful tools for myself and others.
                    </h3>
                </div>

                <div className="flex justify-between mx-8 my-32">
                    <div 
                        className="flex flex-col bg-indigo-500 px-8 pt-8 rounded-md w-[35%] hover:cursor-pointer"
                    >
                        <div className="text-white">
                            <p className="font-cursive text-3xl mb-2">Created by</p>
                            <h5 className="font-roboto text-5xl mb-2 tracking-wide">SEERVS</h5>
                        </div>

                        <img src={featuredImage} />
                    </div>

                    <VerticalCarousel/>
                </div>
            </main>
        </>
    );
}
