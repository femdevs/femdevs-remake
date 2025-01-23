'use client';
import { BaseReactProps } from 'lib/m/types';

export default function Timestamp({ time }: BaseReactProps<{ time: number }>) {
    const pad = (num: number) => num.toString().padStart(2, '0');
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
