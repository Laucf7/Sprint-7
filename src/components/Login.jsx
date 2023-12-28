import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setCurrentUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const initialState = {
        email: '',
        password: '',
      };

    const [formData, setFormData] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((data) => {
            if (data.user) {
              // Usuario existe, iniciar sesión y redirigir
              dispatch(setCurrentUser(data.user));
              setFormData(initialState);
              navigate("/");
            } else {
              // Usuario no encontrado, mostrar mensaje de error
              alert("El usuario no existe. Por favor, verifique sus credenciales.");
            }
          });
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="border-2 mt-16 p-4 mx-auto w-1/4">
            <div className="m-2">LOG IN</div>
            <form className='login-form flex flex-col' onSubmit={e => handleSubmit(e)}>
                <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} className="input input-bordered m-1"></input>
                <input type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} className="input input-bordered m-1"></input>
                <button className='login-btn m-2 mx-24 btn btn-outline btn-warning' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login