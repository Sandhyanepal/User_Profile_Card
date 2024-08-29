import React, { useState } from 'react'
import employees from './UserDetails.json'
import Card from './Card'

const Body = () => {

    const [employee, setEmployee] = useState(employees)


    return (
        <div className='body'>
            {
                employee?.map((emp) => {
                    return (
                        <div style={{ listStyle: "none" }} key={emp.id}>
                            <Card {...emp}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Body
