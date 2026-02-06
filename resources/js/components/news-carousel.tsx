import { CircularCursor } from '@/components/circular-cursor';
import featuredImage from '../../img/featured/everywhere-nowhere-cover.png';

export function NewsCarousel() {
    return (
        <>  
            <CircularCursor/>

            <div className="news-carousel-container cursor-container flex items-center justify-between bg-black rounded-md w-[60%] p-8">
                <div className="flex justify-between p-8 bg-white rounded-md">
                    <div className="flex flex-col justify-between">
                        <div className="flex">
                            <p className="bg-black text-white font-roboto rounded-md p-2 mr-2">1 WEEK AGO</p>
                            <p className="bg-black text-white font-roboto rounded-md p-2">NEW CREATIVE WORK</p>
                        </div>
                        <p className="font-roboto tracking-wide text-2xl">Everywhere and nowhere released</p>
                        <p className="font-roboto tracking-wide text-xl">SONGS</p>
                    </div>
                    <img src={featuredImage} alt="everywhere and nowhere" className="w-1/4 rounded-md" />
                </div>

                <div className="text-white ml-4">
                    <p>Up</p>
                    <p>Current</p>
                    <p>Down</p>
                </div>
            </div>
        </>
    );
}