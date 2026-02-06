import { useEffect } from 'react';
import '../../css/circular-cursor.css';

export function CircularCursor() {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        const container = document.querySelector('.custom-cursor-container');
        
        const move = (e) => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        };

        const showCursor = () => cursor.style.opacity = 1;
        const hideCursor = () => cursor.style.opacity = 0;

        document.addEventListener("mousemove", move);
        container.addEventListener("mouseenter", showCursor);
        container.addEventListener("mouseleave", hideCursor);

        return () => {
            document.removeEventListener("mousemove", move);
            container.removeEventListener("mouseenter", showCursor);
            container.removeEventListener("mouseleave", hideCursor);
        }
    }, []);

    return (
        <>
            <div className="custom-cursor">Hi</div>
        </>
    );
}