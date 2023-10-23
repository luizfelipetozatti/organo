import { useState } from 'react';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';
import Team from './components/Team';

function App() {

  const times = [   
    {
      name: 'Programação',
      priColor: '#57C278',
      secColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      priColor: '#82CFFA',
      secColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      priColor: '#A6D157',
      secColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      priColor: '#E06B69',
      secColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      priColor: '#DB6EBF',
      secColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      priColor: '#FFBA05',
      secColor: '#FFF5D9'
    },   
    {
      name: 'Inovação e Gestão',
      priColor: '#FF8A29',
      secColor: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const onInsertEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <FormContainer times={times.map(time => time.name)} onInsert={employee => onInsertEmployee(employee)} />

      {times.map(time => <Team 
        key={time.name} 
        nome={time.name} 
        priColor = {time.priColor} 
        secColor = {time.secColor}
        employees = {employees.filter(employee => employee.time === time.name)}
      />)}      
      
    </div>
  );
}

export default App;
