import React from 'react'

const Content = ({ parts }) => {
    return ( 
        <>
        {parts.map(({id, name, exercises}) => <p key={id}>{name} {exercises}</p>)} 
        </>
    )
}

export default Content;