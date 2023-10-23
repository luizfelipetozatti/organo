import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
  return (
    props.employees.length > 0 && <section className='team' style={{backgroundColor: props.secColor }}>
      <h3 style={{borderColor:props.priColor}}>{props.nome}</h3>
      <div className='employees'>
        {props.employees.map(employee => <Employee key={employee.nome} bgColor={props.priColor} name={employee.nome} role={employee.cargo} image={employee.imagem} />)}
      </div>
    </section>
  )
}

export default Team