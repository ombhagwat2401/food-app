import React, { useEffect, useState } from 'react'
import './dishes.css'

function Dishes({ dish, timeout }) {

    const [dishes, setDishes] = useState(null);

    setTimeout(() => {
        setDishes(dish)
    }, timeout);








    const pStar = (num) => {
        let star = '';
        for (let i = 0; i < num; i++) {
            star += '⭐'
        }
        return star;
    }









    return (
        <div className='food_app__dishes_container container'>



            {
                dishes ? dishes.map((e) => {
                    return (
                        <div className="food_app__dishes">
                            <img src={e.img} alt="" />
                            <h5>{e.name}</h5>
                            <div className="d-flex">
                                <p><b>&#8377; </b>{e.price}</p>
                                <p>{pStar(e.rating)}</p>
                            </div>
                        </div>
                    )
                }) : dish.map((e) => {
                    return (
                        <div className="food_app__dishes_loading">
                            <div className="img"></div>
                            <h5>.</h5>
                            <div className="d-flex">
                                <p>.</p>
                                <p>.</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Dishes