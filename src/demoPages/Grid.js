import React from 'react'
import {Typography} from '../components/atoms/Typography/Typography'
import './grid.css'

const fillItems = (count, parent) => {
  return [...Array(count).keys()].map(n=> {
    const id = `${parent}_${n + 1}`
    return (<div key={id} className={['grid-item', id].join(' ')}>
        <Typography variant="caption">
          {`celda ${n + 1}`}
        </Typography>
      </div>)
  })
}

const Demo = ({label, code, id, count}) => {
  return (
    <div className="demo-container">
      <Typography>{label}</Typography>
      <Typography variant="code">{code}</Typography>
      <div className={["demo-container", id].join(' ')}>
        {fillItems(count, id)}
      </div>
    </div>
  )
}

const Grid = (props) => {
  return (
    <div className="grid-demos-container">

      <Demo
        label="Grid con columnas fijas"
        code="grid-template-columns: 50px 1fr 15%;"
        count={10}
        id="fix-col-grid"/>
      <Demo
        label="Grid con filas fijas"
        code={`height: 300px;
grid-template-rows: 50px 1fr 30%;`}
        count={5}
        id="fix-row-grid"/>
      <Demo
        label="Grid con columnas dinámicas dependiendo del tamaño de la página"
        code="grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));"
        count={15}
        id="dynamic-grid"/>
      <Demo
        label="Grid con repeat y diferentes tamaños"
        code={`.repeat-grid{
  grid-template-columns: repeat(5, 1fr);
}
.repeat-grid_2 {
  grid-column: 2 / span 3;
}
.repeat-grid_5 {
  grid-row: 2 / span 3;
}
.repeat-grid_9 {
  grid-column: 2 / span 3;
  grid-row: 2 / span 2;
}
.repeat-grid_14 {
  grid-column: 5 / span 1;
  grid-row: 5 / span 1;
}
.repeat-grid_29 {
  grid-column: 5 / span 1;
  grid-row: 11 / span 1;
}`}
        count={38}
        id="repeat-grid"/>
      <Demo
        label="Grid con áreas con nombre y responsive"
        code={`.named-grid {
  grid-template-columns: 25% 30px 1fr;
  grid-template-rows: 75px 200px 50px;
  grid-template-areas:
    "header  header header"
    "sidebar .      main"
    "footer  footer footer";
}
.named-grid_1 {
  grid-area: header;
}
.named-grid_2 {
  grid-area: sidebar;
}
.named-grid_3 {
  grid-area: main;
}
.named-grid_4 {
  grid-area: footer;
}
@media only screen and (max-width: 800px) {
  .named-grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
  }
}
`}
        count={4}
        id="named-grid"/>

    </div>
  )
}

export default Grid
