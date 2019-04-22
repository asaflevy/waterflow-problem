import React from 'react';
import * as CURENT from '../common/Enum_State'

    class Hint extends React.Component {
    render() {
        let state = this.props.currentState,
            hint_class = ` ${state !== CURENT.STATE.START ? 'hidden' : 'hint'}`;

        return (
            <div className={hint_class}>
                <p>please insert an array of building separated by '-'</p>
            </div>
        );
    }
}


export default Hint;
