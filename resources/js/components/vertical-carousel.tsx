import { useState, useRef } from 'react';
import { CircularCursor } from '@/components/circular-cursor';
import '../../css/vertical-carousel.css';
import featuredImage from '../../img/featured/everywhere-nowhere-cover.png';

const verticalCarouselItems = [
    {   
        datePosted: '06-02-2026',
        title: 'Everywhere and nowhere released',
        category: 'songs',
        tag: 'new creative work',
        thumbnailImage: featuredImage,
    },
    {   
        datePosted: '01-01-2026',
        title: 'Test item',
        category: 'testing',
        tag: 'Test item',
        thumbnailImage: featuredImage,
    },
];

export function VerticalCarousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const triggerAnimation = (dir, newIndex) => {
        setDirection(dir);
        setIndex(newIndex);

        setTimeout(() => setDirection(''), 400);
    }

    const nextItem = () => {
        triggerAnimation('down', (index + 1) % verticalCarouselItems.length);
    }

    const prevItem = () => {
        triggerAnimation('up', (index - 1 + verticalCarouselItems.length) % verticalCarouselItems.length);
    }

    return (
        <>  
            <div className="vertical-carousel-container w-full relative">
                <div className="vertical-carousel-controls absolute flex flex-col w-full h-full z-10">
                    <div ref={prevRef} className="vertical-carousel-prev w-full h-full relative" data-cursor-content="↑">
                        <button onClick={prevItem} className="w-full h-full cursor-none"/>
                    </div>

                    <div ref={nextRef} className="vertical-carousel-next w-full h-full relative" data-cursor-content="↓">
                        <button onClick={nextItem} className="w-full h-full cursor-none"/>
                    </div>

                    <CircularCursor targetRef={prevRef}/>
                    <CircularCursor targetRef={nextRef}/>
                </div>

                <div className={`vertical-carousel-inner relative bg-black p-8 h-full rounded-full flex justify-center items-center overflow-hidden ${direction}`}>
                    <div
                        key={index}
                        className="vertical-carousel-item absolute flex justify-between bg-white size-fit w-6/7 p-4 rounded-md"
                    >
                        <div className="flex flex-col justify-between">
                            <div className="flex">
                                <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg mr-2">{verticalCarouselItems[index].datePosted}</p>
                                <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg">{verticalCarouselItems[index].tag}</p>
                            </div>
                            <p className="font-roboto text-3xl">{verticalCarouselItems[index].title}</p>
                            <p className="font-roboto text-2xl">{verticalCarouselItems[index].category}</p>
                        </div>
                        
                        <div className="h-56 w-1/2 relative">
                            <img 
                                src={verticalCarouselItems[index].thumbnailImage}
                                className="h-full w-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}