import React, { Fragment, useState, useCallback, useMemo } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { toast } from 'react-toastify';
import Body from '/imports/ui/components/Body';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';
import Flex from '/imports/ui/components/Flex';
import Center from '/imports/ui/components/Center';
import Form from '/imports/ui/components/Form';
import Link from '/imports/ui/components/Link';

const Inscription = ({ match: { params: { token } } }) => {
  const [ email,    setEmail    ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ verify,   setVerify   ] = useState("");
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
    case 'verify':
      setVerify(value);
      break;
    default:
      break;
    }
  }, []);

  const missingModule = useMemo(() => {
    if (token)
      return (
        <Fragment>
          <Input
            name="password"
            value={password}
            update={update}
          />
          <Input
            name="verify"
            value={verify}
            update={update}
          />
        </Fragment>
      );
    return (
      <Fragment>
        <Input
          name="email"
          value={email}
          update={update}
        />
      </Fragment>
    );
  }, [ token ]);

  const send = useCallback(e => {
    e.preventDefault();

    if (!token)
      Accounts.forgotPassword({ email }, (err) => {
        if (err) {
          toast.error(err.reason);
          setError(1);
        }
      });
    else if (password !== verify) {
      setError(1);
      toast.error('les mots des passes ne sont pas identiques');
    } else
      Accounts.resetPassword(token, password, (err) => {
        toast.error(err.reason);
        setError(1);
      });
  }, [ token, email, password, verify ]);

  return (
    <Body>
      <Center>
        <Form onSubmit={send} >
          <h1>Mot de passe oublié</h1>
          {error && 'Le formulaire contient des erreurs'}
          {missingModule}
          <Button>{token ? 'Mettre à jour mon mot de passe' : 'Envoyer un email'}</Button>
          <Flex>
            <Link to="/account/signup">
                Inscription
            </Link>
            <Link to="/account/signin">
                Connection
            </Link>
          </Flex>
        </Form>
      </Center>
    </Body>
  );
}

export default Inscription;
