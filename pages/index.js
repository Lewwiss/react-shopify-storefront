import Head from 'next/head';
import { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Footer from '../components/Footer';

const client = Client.buildClient({
  storefrontAccessToken: "30ae12514dc814139477018c12d29947",
  domain: "react-storefront-template.myshopify.com"
});

const Home = () => {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await client.product.fetchAll();
    setData({products});
  };

  return (
    <div>
      <Head>
        <title>React Shopify Storefront</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation home={true} />
      <div className="w-full h-20" />
      {
        data ? 
        <Products data={data} />
        :
        null
      }
      <Footer />
    </div>
  );
};

export default Home;