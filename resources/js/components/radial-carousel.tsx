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
        title: 'Radial carousel',
        thumbnail: storage,
    },
    {
        title: 'Dynamic navbar',
        thumbnail: storage,
    },
    {
        title: 'Drag and drop',
        thumbnail: storage,
    },
    {
        title: 'Opac-dynmap syncing',
        thumbnail: storage,
    },
    {
        title: 'Animations',
        thumbnail: storage,
    },
    {
        title: 'Art hub',
        thumbnail: storage,
    },
    {
        title: 'Blocky Architecture',
        thumbnail: storage,
    },
    {
        title: 'Test 1',
        thumbnail: storage,
    },
    {
        title: 'Test 2',
        thumbnail: storage,
    },
    {
        title: 'Test 3',
        thumbnail: storage,
    },
    {
        title: 'Test 4',
        thumbnail: storage,
    },
    {
        title: 'Test 5',
        thumbnail: storage,
    },
    {
        title: 'Test 6',
        thumbnail: storage,
    },
    {
        title: 'Test 7',
        thumbnail: storage,
    },
    {
        title: 'Test 8',
        thumbnail: storage,
    },
];

export function RadialCarousel() {
    return (
        <>
            <div className="carousel-outer flex justify-center overflow-hidden z-1">
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