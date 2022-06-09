import './App.css'
import {Header} from './components/molecules/Header/Header'
import {useState} from 'react'
import {Button} from './components/atoms/Button/Button'

const menuItems = [{label: 'Home', selected:true}, {label: 'About', selected:false}, {label: 'Contact', selected:false},]

function App() {
  const [user, setUser] = useState(null)
  const [userCount, setUserCount] = useState(1)

  return (<>
    <Header
      onLogin={() => {
        setUser({name: 'Luzma'})
        console.log('Login')
      }}
      onLogout={() => {
        setUser(null)
        console.log('Logout')
      }}
      onCreateAccount={() => {
        setUser({name: `New user ${userCount}`})
        setUserCount(userCount + 1)
        console.log('create account')
      }}
      user={user}
      menuItems={menuItems}
    />
    <div className="App">
      Storybook demo
      <div className="buttons">
        <Button label={'Button demo'} onClick={() => console.log('on click')}/>
        <Button label={'Button demo'} primary onClick={() => console.log('on click')}/>
      </div>

      <div className="menu">
        <Button label="elemento 1" fullWidth />
        <Button label="elemento 2" fullWidth />
        <Button label="elemento 3" fullWidth />
        <Button label="elemento 4" fullWidth />
      </div>

    </div>
  </>)
}

export default App
