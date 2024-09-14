'use client';

export default function Timestamp({ time }) {
    const pad = num => num.toString().padStart(2, '0');
    return (
        <p className="text-white">
            {(() => {
                if (isNaN(time) || time === 0) return '--:--';
                const minutes = Math.floor(time / 6e4);
                const seconds = Math.floor((time % 6e4) / 1e3);
                return `${pad(minutes)}:${pad(seconds)}`;
            })()}
        </p>
    );
}
