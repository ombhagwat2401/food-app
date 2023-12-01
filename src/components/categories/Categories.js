import React, { useState } from 'react'
import './categories.css'

function Categories({ cate }) {

    const [categories, setCategories] = useState(null)

    setTimeout(() => {
        setCategories(cate)
    }, 6000)

    const scrollLeft = () => {
        const image_container = document.getElementById('food_app__categories_container');
        image_container.scrollBy(350, 0)
    }

    const scrollRight = () => {
        const image_container = document.getElementById('food_app__categories_container');
        image_container.scrollBy(-350, 0)
    }


    return (
        <div className='food_app__categories container'>
            <h4>Choose your favourite</h4>
            <div className="d-flex">
                <div className="control_btn left-btn"><button onClick={scrollRight}><i class="fa fa-angle-left"></i></button></div>
                <div className="food_app__categories_container" id='food_app__categories_container'>


                    {
                        categories ? categories.map((e) => {
                            return (
                                <div className="banner_container">
                                    <img src={e.img} alt="" className="banner" />
                                    <p>{e.name}</p>
                                </div>
                            )
                        }) : cate.map((e) => {
                            return (
                                <div className="banner_container_loading">
                                    <div className="banner"></div>
                                    <p>.</p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="control_btn right-btn"><button onClick={scrollLeft}><i class="fa fa-angle-right"></i></button></div>
            </div>

        </div>
    )
}

export default Categories