import logo from '../../../media/img/omnia-logo-dark.png'
import instagramIcon from '../../../../resources/media/img/socials/instagram-icon.png';
import youtubeIcon from '../../../../resources/media/img/socials/youtube-icon.png';
import spotifyIcon from '../../../../resources/media/img/socials/spotify-icon.png';

export function Footer() {
    return (
        <>
            <div className="flex flex-col px-12 mt-22 items-start">
                <img src={logo} alt="Omnia Logo" className="w-64"/>

                <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-col w-2/4">
                        <h6 className="font-medium text-3xl">About Omnia</h6>
                        <p className="text-lg">
                            Omnia is an ever expanding project filled with all sorts of exciting features and functionalities.
                        </p>
                    </div>

                    <div className="flex flex-col w-1/4">
                        <h6 className="font-medium text-3xl">Omnia</h6>
                        <ul>
                            <li className="text-lg">
                                <a href="/" className="hover:text-green-700 hover:underline">Home</a>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="hover:text-green-700 hover:underline">About</a>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="hover:text-green-700 hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-1/4">
                        <h6 className="font-medium text-3xl">Contact</h6>
                        <ul>
                            <li className="text-lg">
                                <a href="/tel:+31123456" className="hover:text-green-700 hover:underline">tel: +31 123456</a>
                            </li>
                            <li className="text-lg">
                                <a href="/mailto:user@example.com" className="hover:text-green-700 hover:underline">mail: user@example.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-1/4">
                        <h6 className="font-medium text-3xl">Donate</h6>
                        <ul>
                            <li className="text-lg">
                                <a href="#" className="hover:text-green-700 hover:underline">PayPal</a>
                            </li>
                        </ul>
                        <p className="text-neutral-500 mt-2">
                            If you like Omnia, consider supporting the project by donating! 
                            Your support helps us continue to develop and maintain Omnia, 
                            ensuring that we can provide you with even more features and the best possible experience!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h6 className="font-medium text-3xl">Socials</h6>

                    <div className="flex flex-row space-x-4">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="w-14 h-14" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="w-14 h-14" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={spotifyIcon} alt="Spotify" className="w-14 h-14" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between w-full px-12 py-4 mt-4 bg-black">
                <div className="flex flex-row">
                    <a href="#" className="text-white mr-4 hover:underline">Privacy Policy</a>
                    <a href="#" className="text-white hover:underline">Cookies</a>
                </div>

                <p className="text-white">
                    &copy; {new Date().getFullYear()} Omnia. All rights reserved.
                </p>

                <p className="text-white">Created by: Omnia</p>
            </div>
        </>
    );
}