import './SuspendedList.css'

const SuspendedList = (props) => {
  console.log(props.itens)
  return (
    <div className='suspended-list'>
      <label>{props.label}</label>
      <select required={props.required}>
          {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default SuspendedList