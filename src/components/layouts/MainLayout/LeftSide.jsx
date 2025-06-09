import React from 'react'
import { Children } from 'react'

export default function LeftSide(props) {
  return (
    <div className={s.leftside}>
      {props.Children}
    </div>
  )
}
