import React from 'react'

const Input = ({name, type, value, onChange}) => {
    return (
        <div>
            {name}: <input 
                type={type}
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export default Input