import React, { useState } from 'react'
import employees from './UserDetails.json'
import Card from './Card'

const Body = () => {

    const [searchText, setSearchText] = useState('')

    return (
        <div className='body'>

            {/* For Search Function */}
            <div className="search">
                <input type="text"
                    placeholder='Search Employee'
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}    
                />
            </div>

            {/* Displays Cards */}
            <div className='card-container'>
                {
                    employees?.filter((items) => {
                        return searchText.toLocaleLowerCase() === "" ?
                        items : items.name.toLocaleLowerCase().includes(searchText)
                    }).map((emp) => {
                        return (
                            <div style={{ listStyle: "none" }} key={emp.id}>
                                <Card {...emp} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body
