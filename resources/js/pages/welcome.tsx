import { Head, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import { AppHeader } from '@/components/app-header';
import { RadialCarousel } from '@/components/radial-carousel';
import storage from '../../img/features-carousel/incoming.png';
import featuredImage from '../../../resources/img/featured/everywhere-nowhere-cover.png';
import selfie from '../../img/man-temp.png';

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
                    <h1 className="text-9xl font-bold tracking-wide font-heading">Welcome to Omnia</h1>
                    <h3 className="text-3xl font-medium tracking-wide text-center w-1/2 font-text">
                        A platform packed with everything specific and non-specific! 
                        Including but not limited to: a components library, storage, a desktop companion, and much more!
                    </h3>
                </div>
                
                <RadialCarousel/>

                <div className="flex justify-center">
                    <h3 className="text-5xl font-medium font-subheading tracking-wide text-center w-1/2 mb-32">
                        Omnia is an ever-evolving personal project with a wide variety of features. 
                        My goal with this platform is to better myself and create helpful tools for myself and others.
                    </h3>
                </div>
            
                <div className="bg-black p-8">
                    <h5 className="text-white mb-8">Latest news</h5>

                    <img src={selfie} alt="selfie" className="absolute flex justify-self-end w-1/6"/>
                        
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col text-white">
                            <p>^</p>
                            <p>X</p>
                            <p>|</p>
                        </div>

                        <div className="flex bg-white p-4 text-black rounded-md w-[95%]">
                            <a href="#" className="w-1/6">
                                <img src={featuredImage} className="rounded-md"/>
                            </a>
                            
                            <div className="flex flex-col justify-between ml-8">
                                <div className="flex">
                                    <p className="bg-black text-white rounded-md p-2 mr-2">1 WEEK AGO</p>
                                    <p className="bg-black text-white rounded-md p-2">NEW SONG</p>
                                </div>
                                <p>Everywhere and nowhere released</p>
                                <p>CREATIVE & PERSONAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
