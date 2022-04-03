import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import Navigation from '../../components/Navigation';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

const client = Client.buildClient({
    storefrontAccessToken: "30ae12514dc814139477018c12d29947",
    domain: "react-storefront-template.myshopify.com"
});

const Home = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState(null);
    const [cart, setCart] = useState(false);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        if (id === null || id === undefined) return;
        const product = await client.product.fetch(id.toString());
        setData({product});
    };

    return (
        <div>
            <Head>
                <title>React Shopify Storefront {data ? "- " + data.product.title : null}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation home={false} />
            <div className="w-full h-20" />
            {
                data ?
                <Product data={data} />
                :
                null
            }
            <Footer />
        </div>
    );
};

export default Home;