import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={20}/>
      <User name={"Jiro"}/>
    </div>
  )
}

const User = (props) => {
  return <div>Hi , I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
