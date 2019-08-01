import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';

const NotLogged = ({ path, component, userId }) => {
    if (userId) {
        return <Redirect to="/rooms" />
    }
    return <Route path={path} component={component} />
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(NotLogged);