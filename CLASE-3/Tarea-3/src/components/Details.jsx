import React from 'react'

const Details = (props) => {
    return (
        <div className="details-container">
            <p>
                <b>
                    {props.Genero}
                </b>
            </p>
            <p>
                <b>
                {props.Estado}
                </b>
            </p>
        </div>
    )
}

export default Details