import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = () => {

  //use state to store data setPosts api ka  data  
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json();
      setPosts(data);

    } catch (error) {
      console.log("API data error occurred", error);
    }
  };

  //data show krne ke liye 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center space-x-6 min-h-[80vh] p-2 mx-auto
    max-w-5xl  '>
      {
        posts.length === 0 
        ? <p>Loading products...</p>
        : posts.map((post) => (
          
          // post ko maine asa h props pass kiya h 
            <Product key={post.id} post={post} />
          ))
      }
    </div>
  );
};

export default Home;
