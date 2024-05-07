import React from 'react';
import logo from './logo.svg';
import Greet from './components/Greet';
import Person from './components/Person';
import './App.css';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Counter from './components/State/Counter';
import ThemeContextProvider from './components/Context/ThemeContext';
import Box from './components/Context/Box';
import { UserContextProvider } from './components/Context/UserContext';
import User from './components/Context/User';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import Toast from './components/Literals/Toast';
import CustomButton from './components/Html/Button';
import CustomInput from './components/Html/Input';

function App()
{
  const personName = {
    first: 'Krishna',
    last: 'Kumar'
  }

  const personList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name="Krishna" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar><h2>Oscar goes to Leonardo Dicaprio</h2></Oscar>
      <Button handleClick={(event, id) => console.log('Click', event, id)} />
      <Input value="Hello" handleChange={(event) => console.log(event.target.value)} />
      <Container styles={{ border: '2px solid black', padding: '10px' }} />
      <Counter />
      <ThemeContextProvider> 
        <Box  />
      </ThemeContextProvider>
      <UserContextProvider>
        <User  />
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile} />
      <List items={['Batman', 'Superman', 'Spiderman']} onClick={(item) => console.log(item)} />
      <Toast Position="top-left" />
      <CustomButton variant="primary" onClick={() => console.log('Click')}>
      Primary
      </CustomButton> 
      <CustomInput value="Hello" onChange={(event) => console.log(event.target.value)} />
    </div>
  );
}

export default App;
