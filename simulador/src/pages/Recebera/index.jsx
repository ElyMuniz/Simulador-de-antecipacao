import "./style.css"

const Recebera = ({ dadosApi }) => {

return(
    <div className="recebera">
        <h1>Você receberá</h1>
        <p>Amanhã: <strong>R$ {dadosApi[1]}</strong></p>
        <p>Em 15 dias:<strong> R$ {dadosApi[15]}</strong></p>
        <p>Em 30 dias:<strong> R$ {dadosApi[30]}</strong></p>
        <p>Em 90 dias:<strong> R$ {dadosApi[90]}</strong></p>
    </div>
)
}
export default Recebera
