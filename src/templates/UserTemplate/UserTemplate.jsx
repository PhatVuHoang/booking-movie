import React from 'react';
import { Route } from 'react-router-dom';

export default function UserTemplate(props) {


    return <Route exact path={props.path} render={(propsRoute) => {
        return <div>
            <props.component {...propsRoute} />
        </div>
    }} />
}
