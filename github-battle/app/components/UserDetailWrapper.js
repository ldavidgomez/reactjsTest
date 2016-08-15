/**
 * Created by David on 15/08/2016.
 */
var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props) {
    return (
        <div className='col-sm-6'>
            <p className='lead'>{props.header}</p>
            {props.children}
        </div>
    )
}

UserDetailsWrapper.propType = {
    header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;