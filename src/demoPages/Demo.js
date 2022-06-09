import {Typography} from '../components/atoms/Typography/Typography'
import React from 'react'

const fillItems = (count, parent, prefix = '') => {
  return [...Array(count).keys()].map(n=> {
    const id = `${parent}_${n + 1}`
    const group = `${parent}-item`
    return (<div key={id} className={['grid-item', prefix, group, id].join(' ')}>
      <Typography variant="caption">
        {`celda ${n + 1}`}
      </Typography>
    </div>)
  })
}

const Demo = ({label, code, id, count, prefix}) => {
  return (
    <div className="demo-container">
      <Typography>{label}</Typography>
      <Typography variant="code">{code}</Typography>
      <div className={["demo-container", id].join(' ')}>
        {fillItems(count, id, prefix)}
      </div>
    </div>
  )
}

export default Demo;
