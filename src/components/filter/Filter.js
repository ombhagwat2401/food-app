import React, { useState } from 'react'
import './filter.css'

function Filter({ getSearch, getPrice }) {

    const [search, setSearch] = useState();
    const sortPrice = (e) => {
        getPrice(e.target.value)
    }

    getSearch(search)


    return (
        <div className='food_app__filter'>
            <div className="food_app__filter_container container">
                <input type="text" placeholder='Search Dish...' onChange={(e) => setSearch(e.target.value)} />
                <select name="" id="" onChange={sortPrice}>
                    <option value="asc">Higest</option>
                    <option value="dec">Lowest</option>
                </select>
                <button>Clear Filter</button>
            </div>

        </div>
    )
}

export default Filter