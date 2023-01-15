import "./Card.scss"
const Card = (props: any) => {
  return (
    <div className='card-Content'>
      <div className='mainCardContainer'>
        <span className='card-header'>
          {props.headerName}
        </span>
        <div className='card-body'>
          {props.children}
        </div>
      </div>
    </div>

  )
}

export default Card
