
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); 
  const initialState = {
    email: "", 
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState({ email: "", password: "" });

  function validateForm() {
    let isValid = true;
    const newErrorMessages = { email: "", password: "" };

    if (!formData.email) {
      newErrorMessages.email = "El campo de email es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrorMessages.email = "El formato del email es inválido.";
      isValid = false;
    }

    if (!formData.password) {
      newErrorMessages.password = "El campo de password es obligatorio.";
      isValid = false;
    } else if (formData.password.length < 5) {
      newErrorMessages.password = "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    setErrorMessages(newErrorMessages);
    return isValid;
    
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Registration failed: ${res.status} ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          alert ("Usuario registrado correctamente");
          setFormData(initialState);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Registration failed:", error.message);
          alert ("¡ERROR EN EL REGISTRO!");
        });
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="border-2 mt-16 p-4 mx-auto w-1/4">
      <div className="m-2">SIGN UP</div>
      <form className="login-form flex flex-col" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={e => handleChange(e)}
          className="input input-bordered m-1"
        />
        {errorMessages.email && <p className="text-red-500">{errorMessages.email}</p>}
        <input
          type="text"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={e => handleChange(e)}
          className="input input-bordered m-1"
        />
        {errorMessages.password && <p className="text-red-500">{errorMessages.password}</p>}
        <button className="login-btn m-2 mx-24 btn btn-outline btn-warning" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;