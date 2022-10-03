import { con } from './connection.js'

export async function LoginAdm (email,senha){
    const comando = 
    ` SELECT id_admin       id,
             ds_email       email
        FROM tb_admin
       WHERE ds_email          =?
       AND   ds_senha          =?`

const [linhas] = await con.query(comando, [email,senha])
return linhas[0];

}
