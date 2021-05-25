import React from 'react';
import image from '../../assets/image.png'

const Card = () => {
    return (
        <div>
            <img src={image}/>
            <div>
                <p>Produto 1</p>
                <div>
                    <p>50 - 60 min</p>
                    <p>Frete R$ 8,00</p>
                </div>
            </div>
        </div>
    )
    };

export default Card;