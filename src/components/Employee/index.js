import './Employee.css'

const Employee = ({name, image, role}) => {
  return (
    <div className='employee'>
      <div className='cabecalho'>
        <img src={image} alt={name} />
      </div>
      <div className='rodape'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default Employee