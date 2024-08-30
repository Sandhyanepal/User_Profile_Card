import React, { useState } from 'react'


const Card = ({ name, email, address, phone, image }) => {

    const [details, showDetails] = useState(false)
    

    return (
        <div className='card'>

            {/* Details about employees to display in card */}
            <img src={image} alt="" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>

            {/* Conditional Rendering for displaying additional information */}
            {
                details &&
                <div>
                    <p>Address: {address}</p>
                    <p>Phone No: {phone}</p>
                </div>
            }

            {/* Conditional Rendering for toggle functionality of the button */}
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
