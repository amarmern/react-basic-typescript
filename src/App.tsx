import React from 'react';
import './App.css';

import { Greet } from './components/basic-data-types/Greet';
import { Person } from './components/basic-data-types/Person';
import { PersonList } from './components/basic-data-types/PersonList';
import { Status } from './components/advanced-data-types/Status';
import { Heading } from './components/advanced-data-types/Heading';
import { Oscar } from './components/advanced-data-types/Oscar';
import { Button } from './components/event-type/Button';
import { Input } from './components/event-type/Input';
import { Container } from './components/style-type-props/Container';

function App() {
  const PersonName = {
    first: 'Amrendra',
    last: 'kumar',
  };

  const nameList = [
    { first: 'AMRENDRA', last: 'Kumar' },
    { first: 'Aditi', last: 'Kumari' },
    { first: 'Shivam', last: 'Babu' },
    { first: 'Sahmila', last: 'Devi' },
  ];
  const clickHandler = (id: number) => {console.log('Button Clicked!!!!', id);
  }
  return (
   
    <div className='App'>
     <Heading>Placeholder text</Heading>
     <Status status='loading' />

     <Oscar><Heading>Oscar goes to Leanardo Dicpario!</Heading></Oscar>
     <hr />
     <Button handleClick={(event,id) =>{clickHandler(id)}} />
     {/* <Button handleClick={(event,id) =>{console.log('Button Clicked' , event,id)}} /> */}
       <Input value='' handleChange={(event) => console.log(event)} />
       <Container style={{border:'1px solid blue', padding: '1 rem', margin: '2px', background:'white'}} />
     <hr />
      <Greet name='amrendra' age={10} messageCount={20} isLogined={false} />
      <Person name={PersonName} />
      <PersonList names= {nameList} />

    </div>
  );
}

export default App;
