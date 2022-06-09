import './App.css'
import {Header} from './components/Header/Header'
import {useState} from 'react'
import {Button} from './components/Button/Button'

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
    />
    <div className="App">
      Storybook demo
      <Button label={'Button demo'} onClick={() => console.log('on click')}/>
    </div>
  </>)
}

export default App
