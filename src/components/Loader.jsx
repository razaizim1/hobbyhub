import React from 'react';

const Loader = ({ size = 'xl', type = 'bars', fullScreen = false }) => {
    const sizeClasses = {
        xs: 'loading-xs',
        sm: 'loading-sm',
        md: 'loading-md',
        lg: 'loading-lg',
        xl: 'loading-xl'
    };

    const typeClasses = {
        spinner: 'loading-spinner',
        dots: 'loading-dots',
        ring: 'loading-ring',
        ball: 'loading-ball',
        bars: 'loading-bars',
        infinity: 'loading-infinity'
    };

    const loaderClasses = `${typeClasses[type]} ${sizeClasses[size]}`;

    if (fullScreen) {
        return (
            <div className='w-full m-auto text-center flex justify-center items-center min-h-screen'>
                <span className={loaderClasses}></span>
            </div>
        );
    }

    return <span className={loaderClasses}></span>;
};

export default Loader; 