import "./Badge.css"

function Badge({ label, styled, onClick = () => {} }) {

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
  
  function doTheThing() {
    onClick(label)
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