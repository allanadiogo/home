import { useState, useRef} from 'react';
import './index.scss'

export default function Index(){

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState();
    const [nacional, setNacional] = useState('');

    
    const [resposta, setResposta] = useState('');
    

    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();

    
  
    function TotalCompra(inteiras,meias,diaSemana, nacional){
    
let total = 0;

        if (nacional ) {
            total = (meias + inteiras) * 5.0;
        }
    
        else {
            if (diaSemana == "quarta-feira") {
                total = (28.5 / 2);
            }
            else {
                total = (inteiras * 28.5) + (meias * 28.5 / 2);
            }
        }
    
        return total;
    }
 


    function calcularClick(){
        let x = TotalCompra(inteiras,meias,diaSemana, nacional);
        setResposta(x);
        
    }


    return(
        <main className='todo-tem'>
            <h1>Total Compra ingresso</h1>
          
        
       
        <p>Digite quantas inteiras deseja: </p>

        <input type="text" value={inteiras} onChange={e => setInteiras(Number(e.target.value))} ></input>

       
        <p>Digite quantas meias deseja: </p>
        <input type="text" value={meias} onChange={e => setMeias(Number(e.target.value))} ></input>
        
        <p>Que dia da semana deseja assistir?: </p>
        <select type="text" onChange={e => setDiaSemana(e.target.value)} value={diaSemana} >
            <option>"segunda-feira"</option>
            <option>"terça-feira"</option>
            <option >"quarta-feira" </option>
            <option>"quinta-feira"</option>
            <option>"sexta-feira"</option>
            <option>"sabado"</option>
            <option>"domingo"</option>
        </select>
        
        <p>Nacional?: </p>
        <input  value={nacional} onChange={e => setNacional(e.target.value)} ></input>
       


        <div>
        <button className='botao-tem' onClick={calcularClick} >
           Verifique
        </button>
        </div>

        <div className='resposta-tem'>
            O total a se pagar pelos ingressos é<span> {resposta}  </span>
        </div>


        <div>
            {erro}
        </div>

        
        </main>
    )
    }
