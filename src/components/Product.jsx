import React from 'react';

const Product = ({id, name, price, left, image }) => {
    return (

        <div  className='card' >
            <div className='card-image'>
                <img src={image} alt="" />
                </div> <div className='card-info'>
                    <div className='card-name'>{name}</div>
                    <div className='card-price'>{price} ₽</div> 
                    <div className='card-left'>В наличии: {left}</div>
                    <div className='card-button'>
                        <button className='btn'>Купить</button>
                    </div>
                </div>
            </div> 
      
    );
};

export default Product;