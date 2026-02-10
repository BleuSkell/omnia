import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { CircularCursor } from '@/components/circular-cursor';
import '../../css/vertical-carousel.css';
import featuredImage from '../../img/featured/everywhere-nowhere-cover.png';

const verticalCarouselItems = [
    { 
        datePosted: '01-01-0001', 
        title: 'Test item', 
        category: 'testing', 
        tag: 'Test item', 
        thumbnailImage: featuredImage 
    },
    { 
        datePosted: '01-01-0002', 
        title: 'Test item 2', 
        category: 'testing', 
        tag: 'Test item 2', 
        thumbnailImage: featuredImage 
    },
    { 
        datePosted: '01-01-0003', 
        title: 'Test item 3', 
        category: 'testing', 
        tag: 'Test item 3', 
        thumbnailImage: featuredImage 
    },
];

export function VerticalCarousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const itemRefs = useRef([]);

    const [itemHeight, setItemHeight] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const ITEM_SPACING = 300;

    useLayoutEffect(() => {
        if (itemRefs.current[0]) {
            const h = itemRefs.current[0].clientHeight;
            setItemHeight(h + ITEM_SPACING);
        }
    }, []);

    const nextItem = () => {
        setCurrentIndex((i) => Math.min(i + 1, verticalCarouselItems.length - 1));
    };

    const prevItem = () => {
        setCurrentIndex((i) => Math.max(i - 1, 0));
    };

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

                <div 
                    className="vertical-carousel-inner bg-black p-8 h-full rounded-full flex justify-center items-center overflow-hidden"
                >
                    <div className="relative h-full w-full flex justify-center">
                        {verticalCarouselItems.map((item, index) => {
                            const offset = index - currentIndex;
                            const top = offset * itemHeight;

                            return (
                                <div
                                    key={index}
                                    ref={el => itemRefs.current[index] = el}
                                    className="vertical-carousel-item absolute flex justify-between bg-white w-6/7 p-4 rounded-md transition-all duration-500"
                                    style={{
                                        top: `calc(50% + ${top}px)`,
                                        transform: 'translateY(-50%)',
                                        opacity: Math.abs(offset) > 1 ? 0 : 1,
                                        scale: offset === 0 ? 1 : 0.8,
                                    }}
                                >
                                    <div className="flex flex-col justify-between">
                                        <div className="flex">
                                            <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg mr-2">{item.datePosted}</p>
                                            <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg">{item.tag}</p>
                                        </div>
                                        <p className="font-roboto text-3xl">{item.title}</p>
                                        <p className="font-roboto text-2xl">{item.category}</p>
                                    </div>
                                    
                                    <div className="h-56 w-1/2 relative">
                                        <img 
                                            src={item.thumbnailImage}
                                            className="h-full w-full object-cover rounded-md"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
