import React, { useState } from 'react'


const Card = ({ name, email, address, phone, image }) => {

    const [details, showDetails] = useState(false)
    

    return (
        <div className='card'>
            <img src={image} alt="" srcset="" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>

            {
                details &&
                <div>
                    <p>Address: {address}</p>
                    <p>Phone No: {phone}</p>
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
