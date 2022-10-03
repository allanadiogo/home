use lenhaaSul;

-- efetuar login adm 

select id_admin   id,
       ds_email   email,
 from tb_admin
where ds_email   = 'admn@admin.com.br'
  and ds_senha   = 'admin123';

Insert INTO tb_admin (ds_email,ds_senha)
VALUES('admin@admin.com.br', 'admin123' );    
