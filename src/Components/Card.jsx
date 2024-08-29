import React, { useState } from 'react'


const Card = ({ name, email, address, phone }) => {

    const [details, showDetails] = useState(false)
    

    return (
        <div className='card'>
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>

            {
                details &&
                <div>
                    <h4>Address: {address}</h4>
                    <h4>Phone No: {phone}</h4>
                </div>
            }

            {
                details && (
                    <button onClick={() => showDetails(!details)}>Hide Details</button>
                )
            }

            {
                !details && (
                    <button onClick={() => showDetails(!details)}>Show Details</button>

                )
            }

            

        </div>
    )
}

export default Card
