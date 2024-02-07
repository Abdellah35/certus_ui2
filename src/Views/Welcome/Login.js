import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


import { authenticationService } from '../../_services'; // Assuming this is the correct import path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state for UI feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Indicate loading

    try {
      const user = await authenticationService.login(email, password);
      // Handle successful login (redirect, display success message, etc.)
      console.log('Login successful:', user);
      // Replace with your desired success handling

    } catch (error) {
      // Handle login errors gracefully (display error message, etc.)
      console.error('Login failed:', error);
      // Replace with your desired error handling
    } finally {
      setLoading(false); // Remove loading indicator
    }
  };

  return (
    <Grid textAlign='center' className="height-100" verticalAlign='middle'>
      <Grid.Column className="width-80">
        <Header as='h2' color='teal' textAlign='center'>Log in to your Account</Header>
        <Form size='medium' onSubmit={handleSubmit}>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="green-button" fluid size='large' loading={loading} disabled={loading}>
            Continue
          </Button>
        </Form>
        <Message border='unset'>
          Don’t remember your Password ? <Link to='/welcome/forgotPassword'>Forgot Password</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;