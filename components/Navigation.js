import { useState, useEffect } from 'react';

const Navigation = ({home}) => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setTop(true);
            } else {
                setTop(false);
            };
        });
    });

    return (
        <div className={`fixed z-50 bg-white w-full px-6 sm:px-10 grid grid-cols-2 border-b border-slate-300 duration-300 ${top ? "py-6" : "py-5"}`}>
            <div className="flex flex-row space-x-8 items-center justify-start">
                {
                    home ?
                    <a className="flex flex-row items-center space-x-4 cursor-pointer" href="/">
                        <p className="text-slate-900 text-lg font-bold">React Storefront</p>
                        <p className="hidden md:block text-slate-500 text-sm">(Still under construction)</p>
                    </a>
                :
                    <a className="flex flex-row items-center space-x-3 cursor-pointer" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <p className="hidden md:block text-slate-500 text-sm">Back to home</p>
                    </a>
                }
            </div>
            <div className="flex items-center justify-end space-x-8">
                <p className="hidden md:block text-slate-500 text-sm">0 Items in basket</p>
                <button href="#" className="bg-slate-900 border-slate-900 text-white rounded-xl py-4 pl-4 pr-5 text-sm font-medium shadow-sm border-2 duration-300 hover:scale-95 flex flex-row space-x-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                    <p>Go to checkout</p>
                </button>
            </div>
        </div>
    );
};

export default Navigation;