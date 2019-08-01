import React, { Fragment, useState, useCallback, useMemo } from 'react';
import { Meteor } from 'meteor/meteor';
import { toast } from 'react-toastify';

const ManageRoomsForm = ({ roomId, roomName }) => {
  const [name, setName] = useState(roomName || "");

  const update = useCallback((e) => {
    const { value } = e.target;
    setName(value);
  }, []);

  const actionRoom = useCallback((action) => () => {
    const methodName = `rooms.${roomId ? action : 'create'}`;

    Meteor.call(methodName, { id: roomId, name }, (err) => {
      if (err)
        toast.error(err.reason);
    });
  }, [ name, roomId ]);

  const actions = useMemo(() => {
    if (!roomId)
      return (
        <button onClick={actionRoom()} >Créer Salon</button>
      )
    return (
      <Fragment>
        <button onClick={actionRoom("update")} >Modifier</button>
        <button onClick={actionRoom("remove")} >Supprimer</button>
      </Fragment>
    )
  }, [ roomId, actionRoom ]);

  return (
    <div>
      <input 
        type="text" 
        name="name"
        value={name} 
        placeholder="Nom du salon"
        onChange={update}
      />
      {actions}
    </div>
  )
}

export default ManageRoomsForm;
