import React from 'react';

function Clock(props) {
    return <div>
        <h1>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} : {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} : {("0" + ((props.time / 10) % 100)).slice(-2)}</h1>
    </div>;
}

export default Clock;