import React, { useState, useEffect } from 'react';

// テキストを左から順に出力する
export const useTypewriterEffect = (text, speed) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => {
                const newText = prev + text[currentIndex];
                currentIndex++;

                if (currentIndex === text.length) {
                    clearInterval(intervalId);
                }

                return newText;
            });
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return displayedText;
};
