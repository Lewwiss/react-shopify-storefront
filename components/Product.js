import { useEffect } from "react";

const Product = ({data: {product}}) => {

    useEffect(() => {
        console.log(product)
    })

    return (
        <div>
            <div className="py-20 mx-auto container max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-14 flex">
                <div className="col-span-2">
                    <img src={product.images[0].src} className="w-full border border-slate-300" />
                </div>
                <div className="col-span-2 flex flex-col items-start justify-center">
                    <p className="text-sm text-slate-500">Product type - {product.productType}</p>
                    <h1 className="text-4xl font-bold text-slate-900 pt-6">{product.title}</h1>
                    <p className="text-xl font-bold text-slate-900 pt-6 pb-7 flex flex-row items-center">£{product.variants[0].price} {product.variants[0].compareAtPrice ? <span className="ml-4 line-through text-sm font-normal text-slate-500">£ {product.variants[0].compareAtPrice}</span> : null}</p>
                    <button href="#" className="bg-slate-900 border-slate-900 text-white rounded-xl py-4 pl-4 pr-5 text-sm font-medium shadow-sm border-2 duration-300 hover:scale-95 flex flex-row space-x-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                        </svg>
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>
            <div className="mx-auto container max-w-7xl px-6 pb-16">
                <pre className="bg-slate-200 p-10 overflow-scroll border border-slate-300 text-slate-900">
                    {
                        JSON.stringify(product, null, 2)
                    }
                </pre>
            </div>
        </div>
    );
};

export default Product;