import React from 'react'

const Hello = () => {
    /* return (
        <div>
            <h1>Hello Nishant</h1>
        </div>
    ) */
    return React.createElement(
        'div',
        {id: 'hello', className: 'firstClass'},
        React.createElement('h1', null, 'Hello Nishant'))
}

export default Hello