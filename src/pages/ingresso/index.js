
import {useState} from "react";
import axios from "axios";


export default function Index () {

    const [qtd, setQtd] = useState(0);
    const [qtdM, setQtdM] = useState(0);
    const [dia, setDia] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular(){
        const resp = await axios.post('http//localhost:5000/dia2/ingresso',{
            
                "qtd": qtd,
                "qtdM": qtdM, 
                "dia": dia, 
                "nacionalidade": nacionalidade
        })

        setTotal(resp.data.total);
    }


    return(
        <main>

        <h1>Ingresso</h1>

        <div>
            Qtd.Inteiras: <input type='text' value={qtd} onChange={e => setQtd(Number(e.target.value))}/>
        </div>
        <div>
            Qtd.Meias: <input type='text' value={qtdM} onChange={e => setQtdM(Number(e.target.value))}/>
         </div>
        <div>
            Dia da semana: <input type='text' value={dia} onChange={e => setDia(e.target.value)}/>
        </div>
        <div>
            Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)}/>
        </div>

        <div>
            <button onClick={calcular}>Calcular</button>
        </div>

        <div>O total é:</div>

        </main>
    )
    }