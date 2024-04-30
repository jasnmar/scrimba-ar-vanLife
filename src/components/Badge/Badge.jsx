import "./Badge.css"
import useEffectOnUpdate from "../../hooks/UseEffectOnUpdate"
import { useState } from "react"

function Badge({ label, styled, onClick = () => {} }) {


  //Styles: Simple, Rugged, Luxury, Unstyled
  //If styled=true, then the class depends on the label.
  //
  console.log('styled: ', styled)
  let badgeClasses = "badge--box "
  if(styled) {
    switch (label) {
      case 'simple':
        badgeClasses += "badge--simple"
        break
      case 'rugged':
        badgeClasses += "badge--rugged"
        break
      case 'luxury':
        badgeClasses += "badge--luxury"
        break
      default:
        console.log('no such badge')
    }
  }
  //useEffectOnUpdate(() => onClick(label),[label])
  function doTheThing() {
    onClick(label)
    console.log('running')
  }

  return (
    <>
      <div onClick={doTheThing} className={badgeClasses}>
        <p className="badge--label">{label}</p>
      </div>
    </>
  )
}

export default Badge