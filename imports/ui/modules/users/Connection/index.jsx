import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { toast } from 'react-toastify';
import Body from '/imports/ui/components/Body';
import Button from '/imports/ui/components/Button';
import Flex from '/imports/ui/components/Flex';
import Center from '/imports/ui/components/Center';
import Form from '/imports/ui/components/Form';
import Link from '/imports/ui/components/Link';

import Fields from './Fields';

const Connection = () => {
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ error, setError] = useState(0);

  const update = useCallback((e, { name, value }) => {
    setError(0);
    switch(name) {
    case 'password':
      setPassword(value);
      break;
    case 'username':
      setUsername(value);
      break;
    default:
      break;
    }
  }, [ setPassword, setUsername ]);

  const signin = useCallback((e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        toast.error(err.reason);
        setError(1);
      }
    });
  }, [ username, password ]);

  return (
    <Body>
      <Center>
        <Form onSubmit={signin} >
          <h1>Tchitchat connection</h1>
          <Fields
            update={update}
            state={{ username, password }}
          />
          { error && 'incorrect pseudo or password' }
          <Flex>
            <Button type="submit">
              Signup
            </Button>
            <Link to="/signup">
              Inscription
            </Link>
            <Link to="/missing">
              Missing
            </Link>
          </Flex>
        </Form>
      </Center>
    </Body>
  );
}

export default Connection;
