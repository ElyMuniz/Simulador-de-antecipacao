import "./style.css"
// import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { yupResolver } from '@hookform/resolvers/yup'
// import { number } from "yup/lib/locale";
import api from "../../Services/api"; 


const FormularioSimulador = ({ setDadosApi }) => {
    const { register, handleSubmit } = useForm()
    

const dadosFormulario = (data) => {
    const consultaApi = new Promise((resolve, reject) => {
        api.post("/", data)
        
        .then((response) => 
        
        setDadosApi(response.data)
         
        )
    })
    
}

    return (
        <div>      
            <form className="cadastro_form" onSubmit={handleSubmit(dadosFormulario)}>
                <h1 className="titulo">Simule sua antecipação</h1>
                <label className="cadastro_form_nome">Informe o valor da venda*</label>
                <input className="cadastro_form_inputnome" type="number" {...register("amount")}/>
                <label className="cadastro_form_qtdeparcela"> Em quantas parcelas*</label>
                <input className="cadastro_form_inputqtdeparcelar" type="number" {...register("installments")}/>
                <span>Máximo de 12 parcelas</span>
                <label className="cadastro_form_percentual">Informe o percentual de MDR*</label>
                <input className="cadastro_form_inputpercentual" {...register("mdr")}/>
                <button className="cadastro_form_botao" type="submit">Calcular</button>
            </form>
        </div>
    )
}


export default FormularioSimulador;