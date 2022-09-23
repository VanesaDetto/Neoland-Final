import React from 'react'
import "./Login.css"
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/API";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const { setJwt, setUser } = useContext(JwtContext);

    const formSubmit = (formData) => {
        API.post("/user/login", formData).then((res) => {
            localStorage.setItem("token", res.data.token);
        
            setJwt(res.data.token);
            return res.data
            
        }).then((user)=>{
            getFavorites(user)           
        }
        )
    };
    const getFavorites = async (response) =>{
        API.get(`/user/username/${response.userInDb.username}`).then((res)=>{
           const user = res.data.data.user[0];
          localStorage.setItem("user", JSON.stringify(user));                   
          setUser(user);
          if (response.token){
              navigate("/experience");
          }

          
         
        })
      }


    return (


    <div className="login-container">
            <div className="frase-container">
                <div className='title'>
                    <h1>Disfruta una nueva expericencia</h1>
                </div>
                <div className='title-2'>
                    <h2>Aprovecha cada dia, no te fies del mañana. Regala y comparte momentos.</h2>
                </div>
            </div>
            <section className="login">              
                <form onSubmit={handleSubmit(formSubmit)} className="formulario">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" {...register("username", {
                        required: {
                            value: true,
                            message: "Necesitas este campo",
                        }
                    })} />
                    {errors.username && <span>{errors.username.message}</span>}

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" {...register("password", {
                        required: {
                            value: true,
                            message: "La contraseña debe de tener al menos 6 caracteres",
                        }
                    })} />
                    {errors.password && <span>{errors.password.message}</span>}                
                    <button type="submit" className="button-login">Acceder</button>
                </form>
            </section>

        </div> 
    );
}

export default Login