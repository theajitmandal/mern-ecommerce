import React from 'react'
import './test.css'

const Test = () => {
    return (
        <>
            <h2 className='demo-style'>This is a external css component.</h2>
            <hr />
            <form>
                <label htmlFor='name'>Name</label><br />
                <input type='text' id='name' placeholder='fullname' />
            </form>
        </>
    )
}

export default Test