/**
 * Created by David on 15/08/2016.
 */
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

// Another syntax for defining components
// const Main = props => {
//     //const postPreviews = renderPostPreviews(props.posts);
//
//     return (
//         <div className="main-container">
//             <ReactCSSTransitionGroup
//                 transitionName="appear"
//                 transitionAppearTimeout={500}
//                 transitionLeaveTimeout={500}>
//                 {React.cloneElement(props.children, {key: props.location.pathname})}
//             </ReactCSSTransitionGroup>
//         </div>
//     );
// };

module.exports = Main;