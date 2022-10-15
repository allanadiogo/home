import{BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from './pages/home'
import HomeComponent2 from './componentes/homeComponent2'
import Rodape from './componentes/roda-pe'


import Cadastrar from './pages/adm/cadastrarProduto'
import ConsultarPedidos from './pages/adm/consultarPedidos'


import MenuUsuario from './pages/usuario/menuusuario'
import LoginUsuario from './pages/usuario/loginUsuario'
import Carrinho from './pages/usuario/carrinho'
import RecuperacaoSenha from './pages/usuario/recuperacaoSenha'
import PerfilUsuario from './pages/usuario/perfilUsuario'
import RegistrarUsuario from './pages/usuario/registrarUsuario' 

import QrPix from './pages/usuario/qrPix'
import InformarPagamento from './pages/usuario/informarPagamento'


export default function Index(){
    return(
        <BrowserRouter>
        <Routes>

           <Route path='/' element={<Home/>} />
           <Route path='/homeComponent2' element={<HomeComponent2/>} />
           <Route path='/rodape' element={<Rodape/>} />

          


            <Route path='/cadastrar' element={<Cadastrar/>} />
            <Route path='/consultarPedidos' element={<ConsultarPedidos/>} />


            <Route path='/menuusuario' element={<MenuUsuario/>} />
            <Route path='/loginUsuario' element={<LoginUsuario/>} />
            <Route path='/carrinho' element={<Carrinho/>} />
            <Route path='/recuperacaoSenha' element={<RecuperacaoSenha/>} />
            <Route path='/perfilUsuario' element={<PerfilUsuario/>} />
            <Route path='/registrarUsuario' element={<RegistrarUsuario/>} />

            <Route path='/qrPix' element={<QrPix/>} />
            <Route path='/informarPagamento' element={<InformarPagamento/>} />




        </Routes>
        </BrowserRouter>
    )
};