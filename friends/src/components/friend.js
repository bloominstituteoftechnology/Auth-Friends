import React from 'react'

const Friend = ({info, kill}) => {
    return (
        <div className='friend'>
            <pre>#{info.id}</pre>
            <pre>{info.name}</pre>
            <button>Change</button>
            <pre>Age: {info.age}</pre>
            <pre>{info.email}</pre>
            <button onClick={() => kill(info)}>Kill</button>
        </div>
    )
}

export default Friend