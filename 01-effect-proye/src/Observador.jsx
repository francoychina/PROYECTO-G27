const Observador = (props) => {
console.log("Props", props.contador)
    return(
        
        <h3>Observador: {props.contador}</h3>
    )
} 

export default Observador;