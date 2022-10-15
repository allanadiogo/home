import './index.scss';
import  MenuAmarelo from '../../../componentes/menuqrpix'
export default function Index(){
    return(
        <main className='page-toda1'>
           <MenuAmarelo/>


        <section className='section-pagamentos'>  
        
        <div className='div'>

     
            <button className='dinheiro'> <img className='foto1' src='/assets/images/Money.png'/> Dinheiro  </button>  
     
            
            
            <button className='dinheiro'> <img className='foto1' src='/assets/images/Money.png'/> Crédito  </button>  
           </div>
            
           </section>
         
        

</main>




    )
}