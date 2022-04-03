const Header = () => {
    return (
        <div className="w-full pt-28 pb-16 px-6 flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold text-slate-900">React / Shopify Storefront</h1>
            <p className="hidden md:block text-slate-500 text-sm pt-8 pb-8">0 Items in basket</p>
            <div className="flex flex-row space-x-4">
                <button href="#" className="bg-slate-900 border-slate-900 text-white rounded-xl py-4 pl-4 pr-5 text-sm font-medium shadow-sm border-2 duration-300 hover:scale-95 flex flex-row space-x-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                    <p>Go to checkout</p>
                </button>
                <button href="#" className="bg-white border-slate-900 text-slate-900 rounded-xl py-4 pl-4 pr-5 text-sm font-medium shadow-sm border-2 duration-300 hover:scale-95 flex flex-row space-x-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                    <p>Go to checkout</p>
                </button>
            </div>
        </div>
    );
};

export default Header;