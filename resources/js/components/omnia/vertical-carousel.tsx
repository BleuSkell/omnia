import { useState } from 'react';
import theLibrary from '../../../media/img/library.png';
import turrisOmnia from '../../../media/img/turris-omnia.png';

export function VerticalCarousel() {
    const [discovery] = useState([
        {
            title: "The Libary",
            description: "An ever expanding library full of frontend components.",
            link: "#",
            img: theLibrary,
        },
        {
            title: "Turris Omnia",
            description: "An ever growing tower of tools, features, and apps.",
            link: "#",
            img: turrisOmnia,
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [count, setCount] = useState(0);

    const prev = () => {
        setCurrentIndex((i) => Math.max(i - 1, 0));
        setCount((i) => i - 1);
    }
    const next = () => {
        setCurrentIndex((i) => Math.min(i + 1, discovery.length - 1));
        setCount((i) => i + 1);
    }

    if (count < 0) {
        setCurrentIndex((i) => i = discovery.length - 1);
        setCount((i) => i = discovery.length - 1);
    }

    if (count > discovery.length - 1) {
        setCurrentIndex((i) => i = 0);
        setCount((i) => i = 0);
    }

    return (
        <>
            <div className="flex flex-col overflow-hidden h-[500px] relative">
                <div className="flex flex-col w-full h-full absolute z-2">
                    <button 
                        onClick={prev}
                        className="w-full h-[50%] cursor-pointer"
                    >
                    </button>

                    <button 
                        onClick={next}
                        className="w-full h-[50%] cursor-pointer"
                    >
                    </button>
                </div>

                {discovery.map((i) => {
                    return (
                        <div 
                            className="m-0 p-0" 
                            style={{
                                transform: `translateY(-${currentIndex * 500}px)`, 
                                transition: 'transform 0.4s ease'
                            }}
                        >
                            <div className="flex flex-row justify-between mx-10 mt-0">
                                <hr className="bg-black h-[50px] p-[1px] m-0"/>
                                <hr className="bg-black h-[50px] p-[1px] m-0"/>
                            </div>

                            <div 
                                key={i.title}
                                className="h-[400px] w-[350px] flex flex-col justify-between items-center relative"
                            >
                                <img src={i.img} alt={i.title} className="w-full h-full object-cover rounded-lg"/>

                                <div className="h-full w-full flex flex-col justify-between items-center absolute p-4">
                                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                                        <p className="text-3xl mb-8 text-white">{i.title}</p>
                                        <p className="text-lg text-white">{i.description}</p>
                                    </div>

                                    <a href={i.link} className="bg-white px-4 py-2 rounded-full w-fit z-10">Discover</a>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between mx-10 mt-0">
                                <hr className="bg-black h-[50px] p-[1px] m-0"/>
                                <hr className="bg-black h-[50px] p-[1px] m-0"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}