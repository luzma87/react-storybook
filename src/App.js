import './App.css'
import {MenuBar} from './components/molecules/MenuBar/MenuBar'
import {useState} from 'react'
import Home from './demoPages/Home'
import Grid from './demoPages/Grid'
import Flex from './demoPages/Flex'

function App() {
  const [user, setUser] = useState(null)
  const [userCount, setUserCount] = useState(1)
  const [menuItems, setMenuItems] = useState([
    {label: 'Home', selected:true, content: <Home/>},
    {label: 'Grid', selected:false, content: <Grid/>},
    {label: 'Flexbox', selected:false, content: <Flex/>},
  ])

  const getContent = () => {
    if(!user) return "Not allowed, please login or signup"
    const selected = menuItems.find(i=>i.selected)
    if(!selected) return <Home/>
    if(!selected.content) return `${selected.label} is still a work in progress`
    return selected.content
  }

  const onMenuClick = (clickedItem) => {
    const newItems = menuItems.map(item=>{
      if(item.label === clickedItem.label) {
        return {...item, selected: true}
      }
      return {...item, selected: false}
    })
    setMenuItems(newItems)
  }

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
      onMenuClick={onMenuClick}
    />
    <div className="App">
      {getContent()}
    </div>
  </>)
}

export default App
