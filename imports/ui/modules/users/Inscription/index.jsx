import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { toast } from 'react-toastify';
import Body from '/imports/ui/components/Body';
import Button from '/imports/ui/components/Button';
import Flex from '/imports/ui/components/Flex';
import Form from '/imports/ui/components/Form';
import Center from '/imports/ui/components/Center';
import Link from '/imports/ui/components/Link';

import Fields from './Fields';

const Inscription = () => {
  const [ email,    setEmail    ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ error,    setError    ] = useState(0);

  const update = useCallback((e, { name, value }) => {
    setError(0);
    switch(name) {
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;
    case 'username':
      setUsername(value);
      break;
    default:
      break;
    }
  }, [ setEmail, setPassword, setUsername ]);

  const signup = useCallback((e) => {
    Accounts.createUser({ email, password, username }, (err) => {
      if (err)
        toast.error(err.reason);
    });
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        toast.error(err.reason);
        setError(1);
      }
    });
  }, [ email, password, username ]);

  return (
    <Body>
      <Center>
        <Form>
          <h1>Tchitchat inscription</h1>
          <Fields
            update={update}
            state={{
              password,
              username,
              email,
            }}
          />
          {error && 'Le formulaire contient des erreurs'}
          <Flex>
            <Button
              onClick={signup}
            >Signup
            </Button>
            <Link 
              to="/signin"
            >Connection
            </Link>
            <Link 
              to="/missing"
            >Missing
            </Link>
          </Flex>
        </Form>
      </Center>
    </Body>
  );
}

export default Inscription;
