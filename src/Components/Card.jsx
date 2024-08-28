import React, { useState } from 'react'


const Card = ({ name, email, address, phone }) => {

    const [details, showDetails] = useState(false)

    return (
        <div className='card'>
            <h1>{name}</h1>
            <h2>{email}</h2>

            {
                details &&
                <div>
                    <h3>{address}</h3>
                    <h4>{phone}</h4>
                </div>
            }

            <button onClick={() => showDetails(!details)}>Show Details</button>

            

        </div>
    )
}

export default Card
