import { Head } from '@inertiajs/react';
import { AppHeader } from '@/components/omnia/app-header';
import { RadialCarousel } from '@/components/omnia/radial-carousel';
import { DraggableRadialCarousel } from '@/components/omnia/draggable-radial-carousel';
import { PullDownScreen } from '@/components/omnia/pulldown-screen';
import { Footer } from '@/components/omnia/footer';
import Scribble from '@/components/omnia/scribble';

export default function Welcome() {
    return (
        <>
            <Head title="All-in-one site"/>
            <AppHeader/>

            <main className="min-h-screen bg-[#fffefc]">
                <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-6">
                    <h1 className="text-8xl font-medium tracking-wide">Welcome to Omnia</h1>
                    <p className="text-3xl font-light tracking-wide leading-relaxed text-center w-2/3">
                        A website packed with all sorts of fun features and handy tools!
                        Such as <span className="bg-neutral-200 px-2 my-2 rounded-full">The Library</span>, a place full of handy website components. 
                        Omnia's <span className="bg-neutral-200 px-2 my-2 rounded-full">Desktop companion</span>, who keeps you company as you work.
                        And many more fun little features and tools!
                    </p>
                </div>
                
                <RadialCarousel/>

                <div className="flex flex-col items-center relative">
                    <p className="flex justify-self-center text-4xl font-light tracking-wide text-center w-1/2 w-1/2">
                        Omnia is an ever expanding project with all sorts of features and tools. 
                        Discover what Omnia means and what it can do.
                    </p>
                
                    <PullDownScreen/>

                    <Scribble 
                        text="Pull me!" 
                        color="red" 
                        direction={['top', 'left']} 
                        offsetLeft='52%' 
                        offsetTop='98%'
                    />
                </div>

                <div className="flex flex-row justify-end p-12 mt-42 relative">
                    <Scribble 
                        text="What can I use Omnia for?" 
                        color="red" 
                        direction={['bottom', 'right']}
                        offsetLeft='25%' 
                        offsetTop='0'
                    />

                    <div className="flex flex-col space-y-6 w-2/3">
                        <h3 className="text-4xl font-medium tracking-wide">
                            You can use it for almost anything! Omnia was meant for it to have all sorts of features and tools to help you work faster 
                            or give you fun little distractions from your work.
                        </h3>

                        <hr className="bg-black w-full" />

                        <div className="flex flex-row justify-between items-center">
                            <h6 className="text-2xl font-medium tracking-wide w-1/3">
                                Tools and experimental features worth exploring
                            </h6>

                            <p className="text-lg font-light tracking-wide w-2/4">
                                From practical tools like <span className="bg-neutral-200 px-2 my-2 rounded-full">The Library</span>
                                or fun little distractions like the <span className="bg-neutral-200 px-2 my-2 rounded-full">Desktop companion</span>, 
                                Omnia has a wide variety of features and tools ready for you to explore, use, and experiment with.
                            </p>
                        </div>

                        <hr className="bg-black w-full" />

                        <div className="flex flex-row justify-between items-center">
                            <h6 className="text-2xl font-medium tracking-wide w-1/3">
                                Always growing and changing
                            </h6>

                            <p className="text-lg font-light tracking-wide w-2/4">
                                Omnia is an ever expanding project with new features and tools getting added over time.
                                You could think of it as a public workshop: there's always something new being worked on and added worth checking out.
                            </p>
                        </div>

                        <hr className="bg-black w-full" />
                    </div>
                </div>
                
                <div className="mt-23">
                    <h3 className="text-4xl font-medium tracking-wide text-center">Newest features and tools</h3>

                    <DraggableRadialCarousel/>
                </div>
            </main>

            <Footer/>
        </>
    );
}
