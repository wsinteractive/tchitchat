import React, { useState, useCallback } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const SideBar = ({ userId }) => {
  const [ open, setOpen ] = useState(false);

  const toggleOpen = useCallback((state) => {
    const newOpen = state ? state.isOpen : !open;
    setOpen(newOpen)
  }, [ open ]);

  const disconnect = useCallback(() => {
    Meteor.logout();
    setOpen(false);
  }, []);

  if (!userId)
    return null

  return (
    <Menu
      isOpen={open}
      onStateChange={toggleOpen}
    >
      <Link
        onClick={disconnect}
        className="menu-item"
        to="signin"
        id="logout"
      >
        <i className="fas fa-power-off" />
      </Link>

      <Link
        onClick={toggleOpen}
        className="menu-item"
        to="../settings"
      >
        <i className="fas fa-user-cog"> Profil</i>
      </Link>

      <Link
        onClick={toggleOpen}
        className="menu-item"
        to="../users"
      >
        <i className="fas fa-users"> Users</i>
      </Link>

      <Link
        onClick={toggleOpen}
        className="menu-item"
        to="../rooms"
      >
        <i className="fas fa-comment"> Chat Rooms</i>
      </Link>
    </Menu>
  );
}

export default withTracker(() => ({
  userId: Meteor.userId(),
}))(SideBar);
