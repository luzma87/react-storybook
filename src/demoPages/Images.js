import React from 'react'
import './images.css'
import Bubble from '../assets/Bubble'
import BubbleProps from '../assets/BubbleProps'
import {Typography} from '../components/atoms/Typography/Typography'
import bubbleSvg from '../assets/bubble.svg'
import bubblePng from '../assets/bubble.png'
import bubbleJpg from '../assets/bubble.jpg'

const Images = (props) => {
  const width = 47*3
  const height = 40*3
  return (<div className="images-container">
    <div className='image-column'>
      <Typography variant="highlight">Defaults</Typography>
      <div>
        <Bubble/>
        <Typography>SVG - Componente</Typography>
      </div>
      <div>
        <BubbleProps/>
        <Typography>SVG - Componente con Props</Typography>
      </div>
      <div>
        <img src={bubbleSvg} alt="Bubbles"/>
        <Typography>SVG - IMG</Typography>
      </div>
      <div>
        <img src={bubblePng} alt="Bubbles"/>
        <Typography>PNG - IMG</Typography>
      </div>
      <div>
        <img src={bubbleJpg} alt="Bubbles"/>
        <Typography>JPG - IMG</Typography>
      </div>
    </div>
    <div className='image-column'>
      <Typography variant="highlight">3x</Typography>
      <div>
        <Bubble/>
        <Typography>SVG - Componente</Typography>
      </div>
      <div>
        <BubbleProps width={width} height={height} fill='pink'/>
        <Typography>SVG - Componente con Props</Typography>
      </div>
      <div>
        <img src={bubbleSvg} alt="Bubbles" width={width} height={height}/>
        <Typography>SVG - IMG</Typography>
      </div>
      <div>
        <img src={bubblePng} alt="Bubbles" width={width} height={height}/>
        <Typography>PNG - IMG</Typography>
      </div>
      <div>
        <img src={bubbleJpg} alt="Bubbles" width={width} height={height}/>
        <Typography>JPG - IMG</Typography>
      </div>
    </div>
    <div className='image-column'>
      <Typography variant="highlight">Animaciones</Typography>
      <div>
        <Bubble/>
        <Typography>SVG - Componente</Typography>
      </div>
      <div>
        <BubbleProps width={width} height={height} className='component-bubble'/>
        <Typography>SVG - Componente con Props</Typography>
      </div>
      <div>
        <img src={bubbleSvg} alt="Bubbles" width={width} height={height}/>
        <Typography>SVG - IMG</Typography>
      </div>
      <div>
        <img src={bubblePng} alt="Bubbles" width={width} height={height} className='rotate'/>
        <Typography>PNG - IMG</Typography>
      </div>
      <div>
        <img src={bubbleJpg} alt="Bubbles" width={width} height={height} className='fade'/>
        <Typography>JPG - IMG</Typography>
      </div>
    </div>
  </div>)
}

export default Images
