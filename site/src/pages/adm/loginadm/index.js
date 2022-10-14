import { login } from '../../../api/admApi.js';
import {useNavigate} from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect} from 'react'
import './index.scss';



export default function Index(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('adm-logado')){
            navigate('/');
        }
    })


    async function entrarClick() {
      ref.current.continuousStart();
      setCarregando(true);
        try {
            const r = await login(email,senha);
            storage('adm-logado', r)

            setTimeout(() => {
                navigate('/menuadm');
            }, 2000);
            
           
        }
        catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

  


    return(
      <main className="main">
          <LoadingBar color='#f11946' ref={ref} />
          <header className="Header-Home">
                <a href='/home' className="botao-home" >Home</a>
            </header>

            <section className='page-login'>
                <div className="Div-Meio-Login">

                    <div className="LOGO-TESTE">
                        <img className="Img-Logo"  src="/assets/images/logologin.png" />
                    </div>

                    <h2 className="login-administrativo">Login Administrativo</h2>

                   
                    <div className="Div-Mae-Input">
                      <img className='icons-login' src='/assets/images/usuario3.png'/>
                        <input className="Input-Email"  type="email" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>


                <div className="Div-Mae-Input-Senha">
                <img className='icons-login' src='/assets/images/cadeado.png'/>
                    <input class="Input-Senha" data-ls-module="charCounter" maxlength="25" type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>


                    <div className="Div-Button">
                        <button className="botao-entrar" onClick={entrarClick} disabled={carregando}> Entrar</button>
                    </div>


                </div>
                <div className='erro-1'>
                  {erro}
                </div>
                
            
            </section>
      </main>
    )
};