import React from 'react'
import { Children } from 'react'

export default function RightSide(props) {
  return (
    <div className={s.rightside}>
        {props.Children}
    </div>
  )
}
