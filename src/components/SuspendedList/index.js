import './SuspendedList.css'

const SuspendedList = (props) => {
  return (
    <div className='suspended-list'>
      <label>{props.label}</label>
      <select onChange={event => props.onChange(event.target.value)} value={props.value} required={props.required}>
          {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default SuspendedList