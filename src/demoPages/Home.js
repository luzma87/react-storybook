import React from 'react'
import {Typography} from '../components/atoms/Typography/Typography'
import {Button} from '../components/atoms/Button/Button'

const Home = (props) => {
  return (
    <>
      <Typography variant="title">
        Storybook demo
      </Typography>
      <div className="buttons">
        <Button label="Light" variant="light" onClick={() => console.log('on click')}/>
        <Button label="Secondary" variant="secondary" onClick={() => console.log('on click')}/>
      </div>

      <div className="menu">
        <Button label="elemento 1" size="large" />
        <Button label="elemento 2" size="large" />
        <Button label="elemento 3" size="large" />
        <Button label="elemento 4" size="large" />
      </div>
    </>
  )
}

export default Home;
