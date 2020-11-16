import React from 'react'

const Filter = ({ onChange, onClick, showAll, type}) => {
    return (
        <div>
            filter shown with <input 
                type={type}
                onChange={onChange}
            />
            <button
                onClick={onClick}
            >
                show {showAll ? "filtered" : "all"} 
            </button>
        </div>
    )
}

export default Filter