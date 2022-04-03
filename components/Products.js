import { useEffect } from "react";

const Products = ({data}) => {

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className="pt-20 pb-16 mx-auto container max-w-7xl px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-14 flex">
            {
                data.products.map((element) => {
                   return (
                       <a href={`/product/${element.id}`} key={element.id} className="flex justify-center">
                        <div>
                            <img src={element.variants[0].image.src} className="w-full border border-slate-300" />
                            <p className="text-sm text-slate-500 pt-8 pb-4">{element.title}</p>
                            <h2 className="text-2xl font-bold text-slate-900 flex flex-row items-center">£ {element.variants[0].price} {element.variants[0].compareAtPrice ? <span className="ml-4 line-through text-sm font-normal text-slate-500">£ {element.variants[0].compareAtPrice}</span> : null}</h2>
                        </div>
                       </a>
                   );
                })
            }
        </div>
    );
};

export default Products;