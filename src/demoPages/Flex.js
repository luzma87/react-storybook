import React from 'react'
import './flex.css'
import Demo from './Demo'
import {Typography} from '../components/atoms/Typography/Typography'

const Flex = (props) => {
  return (
    <div className="grid-demos-container">

      <Typography>
        <a href="https://flexbox.malven.co/" target="_blank" rel="noopener noreferrer">
          Malven cheatsheet
        </a>
      </Typography>
      <Typography>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">
          CSS tricks cheatsheet
        </a>
      </Typography>

      <Demo
        label="Flexbox horizontal espciado"
        code={`justify-content: space-around;
align-items: flex-start;`}
        count={5}
        id="flex-space"
        prefix="flex"/>
      <Demo
        label="Flexbox horizontal wrap"
        code={`justify-content: space-around;
flex-wrap: wrap;`}
        count={18}
        id="flex-wrap"
        prefix="flex"/>
      <Demo
        label="Flexbox horizontal fill"
        code={`.item {
  flex-grow: 1;
}`}
        count={5}
        id="flex-fill"
        prefix="flex"/>
      <Demo
        label="Flexbox horizontal fill diferentes ratios"
        code={`.flex-fill-diff_1 {
  flex-grow: 1;
}
.flex-fill-diff_2 {
  flex-grow: 3;
}
.flex-fill-diff_3 {
  flex-grow: 5;
}`}
        count={3}
        id="flex-fill-diff"
        prefix="flex"/>
      <Demo
        label="Flexbox vertical"
        code="flex-direction: column;"
        count={5}
        id="flex-vert"
        prefix="flex"/>
      <Demo
        label="Flexbox para centrar"
        code={`justify-content: center;
align-items: center;`}
        count={1}
        id="flex-center"
        prefix="flex"/>

    </div>
  )
}

Flex.propTypes = {}

export default Flex
