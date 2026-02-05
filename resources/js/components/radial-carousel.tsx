import companion from '../../img/features-carousel/car.jpg';
import library from '../../img/features-carousel/BSD Cover.jpg';
import storage from '../../img/features-carousel/incoming.png';
import '../../css/radial-carousel.css';

const featuresCarousel = [
    {
        title: 'Desktop Companion',
        thumbnail: companion,
    },
    {
        title: 'The Library',
        thumbnail: library,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
    {
        title: 'Omnia Storage',
        thumbnail: storage,
    },
];

export function RadialCarousel() {
    return (
        <>
            <div className="carousel-outer flex justify-center overflow-hidden">
                <div className="carousel-wrapper">
                    <div className="carousel-container" style={{ "--count": featuresCarousel.length }}>
                        {featuresCarousel.map((items) => {
                            return (
                                <div
                                    key={items.title}
                                    className="carousel-item flex flex-col bg-black text-white p-2 rounded-md"
                                >
                                    <img
                                        src={items.thumbnail}
                                        alt={items.title}
                                        className="w-full h-70 object-cover rounded-md"
                                    />

                                    <h4 className="text-lg font-text px-2 pt-4 pb-4">
                                        {items.title}
                                    </h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}