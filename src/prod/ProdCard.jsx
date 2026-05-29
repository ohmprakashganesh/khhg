import React, { useEffect, useState } from 'react'
import xy from "../assets/images/one.avif"
import { data } from 'react-router-dom';

const ProdCard = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=10');
            const data = await response.json();
            setItems(data);
        };
        fetchItems();
    }, [])

    if (items) {
        console.log(items)
    }
    return (
        <>
            {
                items.map((obj, index) => {     
                    return (

                    
                    <div key={index} className=' h-fit  flex-wrap w-35 border border-gray-400 bg-white text-shadow-amber-500  flex flex-col '>
                        <div>
                            <img src={xy} alt="this is image" />
                        </div>
                        <div className='flex flex-col gap-y-3 '>
                            <div><h2>category</h2></div>
                            <div><p>name</p></div>
                            <div><p>5000</p></div>
                            <div><button>order now</button></div>
                        </div>

                    </div>
                    )

                }
            )
            }
        </>
    )
}

export default ProdCard
