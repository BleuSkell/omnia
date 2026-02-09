import { useEffect, useState } from 'react';
import '../../css/circular-cursor.css';

export function CircularCursor({ targetRef }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        document.addEventListener("mousemove", move);

        return () => document.removeEventListener("mousemove", move);
    }, []);

    useEffect(() => {
        if (!targetRef?.current) return;

        const handleMouseEnter = () => {
            setVisible(true);
            setContent(targetRef.current.dataset.cursorContent || '');
        };
        const handleMouseLeave = () => setVisible(false);

        const el = targetRef.current;
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [targetRef]);

    return (
        <div
            className="circular-cursor"
            style={{
                top: pos.y,
                left: pos.x,
                opacity: visible ? 1 : 0
            }}
        >
            {content}
        </div>
    );
}