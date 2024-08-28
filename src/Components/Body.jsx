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
                        <ul style={{ listStyle: "none" }} key={emp.id}>
                            <Card {...emp}/>
                            
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Body
