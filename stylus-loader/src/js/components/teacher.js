import React from 'react';
import  '../../css/teacher.styl'

function Teacher(props) {
    return (
        <li className="Teacher">
            { props.name}
            <a href={`https://twiter.com/${props.red}`} />
                {props.red}
        </li>
    )
}

export default Teacher;