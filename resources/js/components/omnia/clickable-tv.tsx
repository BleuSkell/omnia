import { useState } from 'react';
import { cn } from '@/lib/utils';
import couch from '../../../media/img/couch.png';
import staticTransition from '../../../media/vid/static.mp4';
import companion from '../../../media/img/features-carousel/car.jpg';
import library from '../../../media/img/features-carousel/BSD Cover.jpg';
import storage from '../../../media/img/features-carousel/incoming.png';

export function ClickableTv() {
    const [channels] = useState([
        {
            source: companion,
            title: 'Desktop companion',
            description: 'Test description desktop companion',
            link: '#'
        },
        {
            source: library,
            title: 'The Library',
            description: 'Test description the library',
            link: '#'
        },
        {
            source: storage,
            title: 'Storage',
            description: 'Test description storage',
            link: '#'
        },
    ]);

    let [index, setIndex] = useState(0);
    let currentChannel = channels[index];
    let [isSwitchingChannel, setSwitchingChannel] = useState(false);

    const nextChannel = () => {
        index !== channels.length -1 ?
        setIndex(index + 1) : setIndex(index = 0);
        currentChannel = channels[index];

        setSwitchingChannel(true);
        setTimeout(() => {
            setSwitchingChannel(false);
        }, 160);
    }

    const prevChannel = () => {
        index !== 0 ?
        setIndex(index - 1) : setIndex(index = channels.length - 1);
        currentChannel = channels[index];
        
        setSwitchingChannel(true);
        setTimeout(() => {
            setSwitchingChannel(false);
        }, 160);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center relative">
                <div className="absolute w-full h-full z-2 flex justify-center">
                    <button className="w-[50%] h-full cursor-pointer" onClick={prevChannel} />
                    <button className="w-[50%] h-full cursor-pointer" onClick={nextChannel} />
                </div>

                <div className="w-[700px] h-[400px] flex flex-col rounded-2xl"
                    style={{ background: '#1a1a1e', padding: '10px 10px 6px', border: '1.5px solid #2e2e35' }}
                >
                    <div className="relative overflow-hidden h-full rounded-lg">
                        <video autoPlay loop muted playsInline preload="none"
                            className={cn("absolute inset-0 w-full h-full object-cover rounded-lg",
                                isSwitchingChannel ? 'block' : 'hidden'
                            )}
                        >
                            <source src={staticTransition} type="video/mp4" />
                        </video>

                        <div className={cn("absolute inset-0 w-full h-full",
                            isSwitchingChannel ? 'hidden' : 'flex justify-center'
                        )}>
                            <img
                                src={currentChannel.source}
                                alt={currentChannel.title}
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1 z-3">
                                <a
                                    href={currentChannel.link} 
                                    className="text-white text-lg font-medium tracking-wider py-1 px-3 w-fit max-w-1/2"
                                    style={{ background: '#16a34a', borderRadius: '4px' }}
                                >
                                    {currentChannel.title} &#8674;
                                </a>
                                <p
                                    className="text-sm tracking-wide py-1 px-3 w-fit"
                                    style={{ background: 'rgba(0, 125, 4, 0.55)', color: '#e5e5e5', borderRadius: '4px' }}
                                >
                                    {currentChannel.description}
                                </p>
                            </div>

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {channels.map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full transition-all"
                                        style={{ background: i === index ? '#16a34a' : 'rgba(0, 125, 4, 0.35)' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-1 pt-1.5 pb-0.5">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a44' }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3a3a44' }} />
                        </div>
                        <span className="text-[10px] tracking-widest font-medium" style={{ color: '#3a3a44' }}>OMNIA</span>
                        <div className="h-1 w-7 rounded-full" style={{ background: '#2e2e35' }} />
                    </div>
                </div>

                <img src={couch} alt="couch" className="w-[550px] mt-2" />
            </div>
        </>
    );
}