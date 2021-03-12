import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Form from './Form'
import TeamMember from './TeamMember'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setForms({...formValues, [inputName]: inputValue})
  }

const submitForm = () => {
  const newTeamMember = {
    id: Date.now(),
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  setTeamMembers([...teamMembers, newTeamMember])
  setForms(initialFormValues)
}

  return (
    <div className="container">
      <h1>Team Builder Form</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(teammember => {
          return (
            <TeamMember key={teammember.id} details={teammember} />
          )
        })
      }
    </div>
  );
}

export default App;
