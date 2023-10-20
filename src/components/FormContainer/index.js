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

  return (
    <section className="form-container">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText label="Nome" placeholder="Digite seu nome"/>
        <InputText label="Cargo" placeholder="Digite seu cargo"/>
        <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
        <SuspendedList label="Time" itens={times} />
      </form>
    </section>
  )
}

export default FormContainer