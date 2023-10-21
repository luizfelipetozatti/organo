import './InputText.css'

const InputText = (props) => {

  const onKeyPress = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input value={props.value} onChange={onKeyPress} required={props.required} placeholder={props.placeholder} />
    </div>
  )
}

export default InputText