import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='p-8 bg-white rounded-2xl w-full max-w-2xl mx-auto text-center shadow-md'>
            <DotLottieReact
                src="https://lottie.host/63e8cae8-f2f2-4637-b298-51a91b042e23/ZnuKPdwPbr.lottie"
                loop
                autoplay
            />
                <Link to='/'>
                    <button className="px-8 py-3 bg-[#4BAF47] cursor-pointer text-white rounded-full text-[16px] font-bold transition hover:bg-[#b3cdb2]">
                        Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;