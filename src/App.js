import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

// 関数component User
const User = (props) => {
  return <div>Hi , I am {props.name}, and {props.age} years old!</div>
}

// 初期値の設定
User.defaultProps = {
  age: 1
}

export default App;
