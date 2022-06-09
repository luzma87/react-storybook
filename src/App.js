import './App.css'
import {MenuBar} from './components/molecules/MenuBar/MenuBar'
import {useState} from 'react'
import {Button} from './components/atoms/Button/Button'
import {Typography} from './components/atoms/Typography/Typography'

const menuItems = [{label: 'Home', selected:true}, {label: 'About', selected:false}, {label: 'Contact', selected:false},]

function App() {
  const [user, setUser] = useState(null)
  const [userCount, setUserCount] = useState(1)

  return (<>
    <MenuBar
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
      <Typography variant="title">
        Storybook demo
      </Typography>
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
