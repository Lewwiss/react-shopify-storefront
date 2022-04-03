const Footer = () => {
    return (
        <div className="bg-slate-900">
            <div className="mx-auto container grid grid-cols-6 pt-12 pb-16 px-6">
                <div className="col-span-6 lg:col-span-4 pb-10 lg:pb-0">
                    <a className="flex flex-col space-y-3 cursor-pointer items-center lg:items-start" href="/">
                        <p className="text-white text-lg font-bold">React Storefront</p>
                        <p className="hidden md:block text-slate-400 text-sm">(Still under construction)</p>
                    </a>
                </div>
                <div className="col-span-6 lg:col-span-1 flex flex-col items-center lg:items-start space-y-6 pb-10 lg:pb-0">
                    <p className="text-sm font-bold text-white leading-8 pb-2">Resources</p>
                    <a href="https://shopify.github.io/js-buy-sdk/" target="_blank" className="text-sm text-slate-400">Shopify Buy SDK</a>
                    <a href="https://reactjs.org/" target="_blank" className="text-sm text-slate-400">React</a>
                    <a href="https://tailwindcss.com/" target="_blank" className="text-sm text-slate-400">Tailwind</a>
                </div>
                <div className="col-span-6 lg:col-span-1 flex flex-col items-center lg:items-start space-y-6">
                    <p className="text-sm font-bold text-white leading-8 pb-2">Source</p>
                    <a href="https://github.com/Lewwiss/" target="_blank" className="text-sm text-slate-400">Github</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;