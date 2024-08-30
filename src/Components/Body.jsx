import React, { useState } from 'react'
import employees from './UserDetails.json'
import Card from './Card'

const Body = () => {

    const [searchText, setSearchText] = useState('')

    // Filter employees based on search text
    const filteredEmployees = employees?.filter((items) => {
        return searchText.trim() === ""
            ? items 
            : items.name.toLocaleLowerCase().includes(searchText)
    })

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

            {/* Displays Cards or No User Found Message */}
            <div className='card-container'>
                {
                    filteredEmployees.length > 0 ? (
                        filteredEmployees.map((emp) => {
                            return (
                                <div style={{ listStyle: "none" }} key={emp.id}>
                                    <Card {...emp} />
                                </div>
                            )
                        })
                    ) : (
                        <p style={{fontWeight:"bold"}}>No user found</p>
                    )
                }
            </div>
        </div>
    )
}

export default Body
