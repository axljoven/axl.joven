import React from 'react';

interface ClearIconProps {
    color?: 'light' | 'dark';
    className?: string;
}

const Clear: React.FC<ClearIconProps> = ({ color = 'dark', className = 'w-6 h-6' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color === 'dark' ? 'currentColor' : '#fff'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-eraser-icon lucide-eraser ${className}`}
        >
            <path
                d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
            />
            <path d="m5.082 11.09 8.828 8.828" />
        </svg>
    );
};

export default Clear;