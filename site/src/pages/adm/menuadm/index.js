import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import './index.scss'


export default function Index(){

    const navigate = useNavigate();

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/loginadm');   
     }

     function ConsultarPedidos(){
         navigate('/consultarPedidos');
     }

     function cadastrarProduto(){
        navigate('/cadastrar');
    }

    
  
    
      return(

<main className='page-menu'>
    
    <section className='menu-corpo'>
    
       
    <div className='logo-menu'>
       <img src='/assets/images/image96.png'/>


    </div>
            
        <div className='sair-menu' onClick={sairClick}>
                <img src='/assets/images/icon6.png'/>
                <div className='text-sair'>SAIR</div>
        </div>
        
    </section>
    
    
   
    <section className='centro'>
    
    <h1 className='bem-vindo'>Bem-vindo</h1>
   
    
        <div className='linha-1'>
            
            <div className='co-1' onClick={ConsultarPedidos}>
           <img src='/assets/images/image103.png'/>
           <div className='text-pedidos'> Consultar pedidos pendentes</div>
            </div>
            
            <div className='co-2'>
            <img src='/assets/images/image104.png'/>
           <div className='text-historico'>Consultar histórico de pedidos </div>
            </div>

        </div>
       

<div className='linha-2'>
            <div className='co-3' onClick={cadastrarProduto}>
            <img className='image-3' src='/assets/images/image105.png'/>
           <div className='text-adicionar'>Adicionar produto</div>
            </div>
           
      <div className='co-4'>
            <div className='co-4'>
            <img className='image-4' src='/assets/images/image106.png'/>
           <div className='text-produtos'>Consultar produtos </div>
            </div>
            </div>
</div>


    </section>

    


</main>
    )
}
