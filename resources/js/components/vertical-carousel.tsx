import { CircularCursor } from '@/components/circular-cursor';
import featuredImage from '../../img/featured/everywhere-nowhere-cover.png';

const verticalCarouselItems = [
    {   
        datePosted: '06-02-2026',
        title: 'Everywhere and nowhere released',
        category: 'songs',
        tag: 'new creative work',
        thumbnailImage: featuredImage,
    },
];

export function VerticalCarousel() {
    return (
        <>  
            <div className="vertical-carousel-container custom-cursor-container flex relative items-center justify-between bg-black rounded-md w-[60%] p-8">
                <div className="vertical-carousel-buttons flex flex-col absolute w-full h-full">
                    <button className="prev-slide w-full h-full custom-cursor-container">
                        <CircularCursor/>
                    </button>
                    <button className="next-slide w-full h-full custom-cursor-container">
                        <CircularCursor/>
                    </button>
                </div>

                <div className="vertical-carousel-items flex flex-col">
                    {verticalCarouselItems.map((items) => {
                        return (
                            <div 
                                key={items.title}
                                className="vertical-carousel-item flex justify-between p-8 bg-white rounded-md"
                            >
                                <div className="flex flex-col justify-between">
                                    <div className="flex">
                                        <p className="bg-black text-white font-roboto rounded-md p-2 mr-2">{items.datePosted.toUpperCase()}</p>
                                        <p className="bg-black text-white font-roboto rounded-md p-2">{items.tag.toUpperCase()}</p>
                                    </div>
                                    <p className="font-roboto tracking-wide text-2xl">{items.title}</p>
                                    <p className="font-roboto tracking-wide text-xl">{items.category.toUpperCase()}</p>
                                </div>
                                <img src={featuredImage} alt={items.title} className="w-1/4 rounded-md" />
                            </div>
                        );
                    })}
                </div>

                <div className="vertical-carousel-bullets text-white ml-4">
                    
                </div>
            </div>
        </>
    );
}