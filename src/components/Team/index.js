import './Team.css'

const Team = (props) => {
  return (
    <section className='team' style={{backgroundColor: props.secColor }}>
      <h3 style={{borderColor:props.priColor}}>{props.nome}</h3>
    </section>
  )
}

export default Team