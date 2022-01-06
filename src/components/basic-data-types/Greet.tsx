import React from 'react'
type GreetProps = {
    name: string,
    age ?: number,
    messageCount: number,
    isLogined : boolean  
  }


 export const Greet = (props : GreetProps) => {
    
    return (
        <div>
            <h2> First Line code in react type script is wriiten by:</h2>
           {props.isLogined ? `Welcome ${props.name} age is:- ${props.age} and Message Count is:- ${props.messageCount}` : 'Welcome Guest'}
        </div>

    )
}

