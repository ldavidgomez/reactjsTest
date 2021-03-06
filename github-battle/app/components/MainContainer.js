/**
 * Created by David on 16/08/2016.
 */
var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
  return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
          {props.children}
      </div>
  )
};

module.exports = MainContainer;