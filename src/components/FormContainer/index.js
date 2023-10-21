import Button from '../Button';
import InputText from '../InputText';
import SuspendedList from '../SuspendedList';
import './FormContainer.css'

const FormContainer = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',    
  ]

  const onSave = (event) => {
    event.preventDefault()
    console.log("form submetido")
  }

  return (
    <section className="form-container">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText required={true} label="Nome" placeholder="Digite seu nome"/>
        <InputText required={true} label="Cargo" placeholder="Digite seu cargo"/>
        <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
        <SuspendedList required={true} label="Time" itens={times} />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default FormContainer