import React from 'react';
require('./logo.scss');

let Logo = React.createClass({
    render() {
        return (
        	<div className="row components-logo">
        		<img src="/static/images/logo.png" width="40" alt="" className="-col-auto"/>
        		<h1 className="caption">My Music Player Build By React</h1>
        	</div>
        );
    }
});

export default Logo;
