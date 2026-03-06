import { useState } from 'react';
import { cn } from '@/lib/utils';
import promoVid from '../../../media/vid/omnia.mp4';
import pullMe from '../../../media/img/pull-me.png';

export function PullDownScreen() {
    const [isPulledDown, setPulledDown] = useState(false);

    return (
        <>
            <div className="flex flex-col">
                <div
                    className={cn('bg-black flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out', 
                        isPulledDown ? 'max-h-[1000px] p-22 opacity-100' : 'max-h-0 p-0 opacity-0')}
                >   
                    <div className="text-center w-2/3">
                        <h3 className="text-white text-8xl font-medium font-cursive tracking-wide mb-12">The platform</h3>

                        <p className='text-neutral-200 text-2xl font-light tracking-wide leading-relaxed'>
                            Omnia was first developed by a student software developer in order to learn, experiment, and to try and enjoy the process of creating 
                            something he could be proud of. He chose the name Omnia, which roughly translates to "everything" in Latin, because for him, it relfected the site's 
                            purpose and direction best. A website with all sorts of fun little features and tools with plenty more being added. Functional ones, practical ones, 
                            experimental ones, whatever he wanted to try his hand on, he tried. But above all, he tried to enjoy the process of his creation(s).
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center mt-22">
                        <h4 className="text-neutral-600 font-medium text-7xl w-48 text-right">Play</h4>

                        <div className="relative w-1/4 mx-8 hover:cursor-pointer hover:mx-12 transition-all duration-450">
                            <div 
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                                className="absolute w-full h-full p-4 flex items-center justify-between rounded-lg
                            ">
                                <p className="text-white text-lg">Omnia in practice</p>
                                <p className="text-white text-lg">00:16</p>
                            </div>
                            
                            <video autoPlay loop muted playsInline preload="none" className="rounded-lg">
                                <source src={promoVid} type="video/mp4" />
                            </video>
                        </div>

                        <h4 className="text-neutral-600 font-medium text-7xl w-48 text-left">Video</h4>
                    </div>

                    <p className="text-neutral-300 text-xl mt-22">Read more about Omnia and its creator <a href="#" className="text-green-500 hover:underline">here</a></p>
                </div>

                <div className="pulldown-cord flex flex-col items-center group relative">
                    <hr 
                        className="bg-black h-[50px] p-[1px]
                        group-hover:h-[70px] group-hover:cursor-pointer transition-all"
                    />

                    <button 
                        className="bg-green-400 rounded-full p-4
                        group-hover:bg-green-500 group-hover:cursor-pointer transition-all"
                        onClick={() => setPulledDown(!isPulledDown)}
                    >   
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}