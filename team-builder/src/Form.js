import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        type="text"
                        value={values.username}
                        placeholder="Name"
                        name="name"
                        onChange={onChange}    
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        value={values.email}
                        placeholder="Email"
                        name="email"
                        maxLength="30"
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select name="role" onChange={onChange} value={values.role}>
                        <option>Backend Engineer</option> 
                        <option>Frontend Engineer</option>
                        <option>UX/UI Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}