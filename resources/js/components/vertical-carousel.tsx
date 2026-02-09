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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideAnimation, setSlideAnimation] = useState('');

    const showNext = () => {
        setSlideAnimation('slide-down');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === verticalCarouselItems.length -1 ? 0 : prevIndex + 1
            );
            setSlideAnimation('');
        }, 400);
    };

    const showPrev = () => {
        setSlideAnimation('slide-up');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? verticalCarouselItems.length - 1 : prevIndex - 1
            );
            setSlideAnimation('');
        }, 400);
    };

    const currentItem = verticalCarouselItems[currentIndex];

    return (
        <>  
            <div className="vertical-carousel-container w-full relative">
                <div className="vertical-carousel-controls absolute flex flex-col w-full h-full">
                    <div ref={prevRef} className="vertical-carousel-prev w-full h-full relative" data-cursor-content="↑">
                        <button onClick={showPrev} className="w-full h-full cursor-none"/>
                    </div>

                    <div ref={nextRef} className="vertical-carousel-next w-full h-full relative" data-cursor-content="↓">
                        <button onClick={showNext} className="w-full h-full cursor-none"/>
                    </div>

                    <CircularCursor targetRef={prevRef}/>
                    <CircularCursor targetRef={nextRef}/>
                </div>

                <div className="bg-black p-8 h-full rounded-full flex justify-center items-center overflow-hidden">
                    <div
                        className={`vertical-carousel-item flex justify-between bg-white size-fit w-6/7 p-4 rounded-md ${slideAnimation}`}
                    >
                        <div className="flex flex-col justify-between">
                            <div className="flex">
                                <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg mr-2">{currentItem.datePosted}</p>
                                <p className="font-roboto text-lg bg-black p-2 text-white rounded-lg">{currentItem.tag}</p>
                            </div>
                            <p className="font-roboto text-3xl">{currentItem.title}</p>
                            <p className="font-roboto text-2xl">{currentItem.category}</p>
                        </div>
                        
                        <div className="h-56 w-1/2 relative">
                            <img 
                                src={currentItem.thumbnailImage}
                                className="h-full w-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}