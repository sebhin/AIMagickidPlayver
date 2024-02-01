// 2024-01-24 | progress
import React, { useEffect, useState } from 'react';
import '../styles/Progress.scss';

const Progress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 99) {
                    clearInterval(interval);
                    return prevProgress; // 99% 이상에서는 증가하지 않음
                }
                if (prevProgress < 50) {
                    return prevProgress + 3; // 60% 미만일 때 5%씩 증가
                } else if (prevProgress < 70) {
                    return prevProgress + 2; // 60% 이상 80% 미만일 때 2%씩 증가
                } else if (prevProgress < 90) {
                    return prevProgress + 1; // 80% 이상 90% 미만일 때 1%씩 증가
                } else {
                    return prevProgress + 0.1; // 90% 이상에서는 천천히 증가
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${progress}%` }}
            >
                {Math.floor(progress)}%
            </div>
        </div>
    );
};

export default Progress;
