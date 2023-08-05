import axios from "axios"

export const consultarPlacaFachada = async(placa) =>{
    return consultarPlaca(placa);
}
 
const consultarPlaca = async(placa) =>{
    const valor = axios.get(`http://localhost:8080/API/v1.0/Nomina/vehiculos/${placa}`).then(r=> r.data)
    console.log(valor);
    return valor
}

export const consultarTodosFachada = async() =>{
    return consultarTodos();
}
 
const consultarTodos = async() =>{
    const valor = axios.get(`http://localhost:8080/API/v1.0/Nomina/vehiculos`).then(r=> r.data)
    console.log(valor);
    return valor
}
 