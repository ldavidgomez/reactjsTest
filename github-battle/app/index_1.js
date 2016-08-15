/**
 * Created by David on 14/08/2016.
 */
var USER_DATA = {
    name: 'Tyler McGinnis',
    username: 'tylermcginnis',
    image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//     render: function(){
//         console.log(this.props)
//         return (
//             <div> Hello {this.props.name} </div>
//         )
//     }
// });

var ProfilePic = React.createClass({
    render: function () {
        return <img src={this.props.imageUrl} style={{height:100, width:100}} />
    }
})

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
})

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
})

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
})

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);

// var FriendsContainer = React.createClass({
//     render: function(){
//         var name = 'Tyler McGinnis'
//         var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//         return (
//             <div>
//                 <h3> Name: {name} </h3>
//                 <ShowList names={friends} />
//             </div>
//         )
//     }
// });
//
// var ShowList = React.createClass({
//     render: function(){
//         var listItems = this.props.names.map(function(friend){
//             return <li> {friend} </li>;
//         });
//         return (
//             <div>
//                 <h3> Friends </h3>
//                 <ul>
//                     {listItems}
//                 </ul>
//             </div>
//         )
//     }
// });
// ReactDOM.render(<FriendsContainer />, document.getElementById('app'));