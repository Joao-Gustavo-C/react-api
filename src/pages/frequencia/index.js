import {useState} from "react";
import axios from "axios";



export default function Index () {
    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

   async function VerificarFreq() {
    const resp = await axios.get('http://localhost:5000/dia2/freqcaractere/${texto}/${caractere}')
    setResposta(resposta.data.freq);    
}

    return(
        <main>

        <h1>Frequência</h1>

        <div>
            Texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}></input>
        </div>
        <div>
            Caractere: <input type='text' value={caractere} onChange={e => setCaractere(e.target.value)}></input>
        </div>
        <div>
            <button onClick={VerificarFreq}>Verificar Frequência</button>
        </div>
        <div>
            Frequência:
        </div>


        </main>
    )
    }