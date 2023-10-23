import { useState } from 'react';
import Button from '../Button';
import InputText from '../InputText';
import SuspendedList from '../SuspendedList';
import './FormContainer.css'

const FormContainer = (props) => {

  const [nome, setNome] =  useState('')
  const [cargo, setCargo] =  useState('')
  const [imagem, setImagem] =  useState('')
  const [time, setTime] =  useState('')

  const onSave = (event) => {
    event.preventDefault()
    props.onInsert({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setCargo('')
  }

  return (
    <section className="form-container">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText 
          required={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          value={nome}
          onChange={value => setNome(value)}
        />
        <InputText 
          required={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <InputText 
          label="Imagem" 
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChange={value => setImagem(value)}
        />
        <SuspendedList 
          required={true} 
          label="Time" 
          itens={props.times}
          value={time}
          onChange={value => setTime(value)}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default FormContainer