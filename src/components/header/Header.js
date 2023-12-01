import React, { useEffect, useState } from 'react'
import './header.css'

function Header({ banner }) {

    const [banners, setBanners] = useState(null)

    setTimeout(() => {
        setBanners(banner)
    }, 4000);


    const scrollLeft = () => {
        const image_container = document.getElementById('food_app__header_container');
        image_container.scrollBy(350, 0)
    }

    const scrollRight = () => {
        const image_container = document.getElementById('food_app__header_container');
        image_container.scrollBy(-350, 0)
    }


    return (
        <div className='food_app__header container'>
            <h4>Todays Offers for You</h4>
            <div className="d-flex">
                <div className="control_btn left-btn"><button onClick={scrollRight}><i class="fa fa-angle-left"></i></button></div>
                <div className="food_app__header_container" id='food_app__header_container'>


                    {
                        banners ? banners.map((e) => {
                            return (
                                <div className="banner_container">
                                    <img src={e.img} alt="" className="banner" />
                                </div>
                            )
                        }) : banner.map((e) => {
                            return (
                                <div className="banner_container_loading">
                                    <div className="banner"></div>
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

export default Header