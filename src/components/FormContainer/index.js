import InputText from '../InputText';
import './FormContainer.css'

const FormContainer = () => {
  return (
    <section className="form-container">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText label="Nome" placeholder="Digite seu nome"/>
        <InputText label="Cargo" placeholder="Digite seu cargo"/>
        <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
      </form>
    </section>
  )
}

export default FormContainer