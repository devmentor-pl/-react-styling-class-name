// ./src/components/Row.js
import React from 'react';

const Row = props => {
    const { type, space } = props;

    const classNameList = ['Row'];
    if(type === 'dark') {
        classNameList.push('Row--dark');
    }

    if(space === 'medium') {
        classNameList.push('Row--space-medium');
    }

    return (
        <div className={ classNameList.join(' ') }>
            React: Styling, className
        </div>
    )
}

export default Row;