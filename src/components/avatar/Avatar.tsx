import React from 'react';

interface AvatarProps {
    text: string;
    backgroundColor?: string;
    color?: string;
    avatarSize?: string;
    fontSize?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
    text, 
    backgroundColor = '#636ae8', 
    color = 'white', 
    avatarSize = '3.5rem', 
    fontSize = '1.25rem' 
}) => {
    const firstLetter = text[0]?.toUpperCase() || '?';

    return (
        <div 
            className="rounded-full flex items-center justify-center"
            style={{
                backgroundColor,
                width: avatarSize,
                height: avatarSize,
            }}
        >
            <span style={{ color, fontSize, fontWeight: '400' }}>
                {firstLetter}
            </span>
        </div>
    );
}

export default Avatar;
