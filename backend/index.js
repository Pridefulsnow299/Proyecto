const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');




const servidor=express();

servidor.use(cors({
    origin:'*',
    methods:'HEAD,GET,PUT,DELETE,POST,PATHC',
}));

servidor.use(bodyParser.urlencoded({extend:false}));
servidor.use(bodyParser.json());

const confibd={
    host:'localhost',
    user:'root',
    password:'',
    database:'trabajo'
};

const poolconexion=mysql.createPool(confibd);

//logiar us_empresa
servidor.get("/us_empresa",(req,res)=>{
    console.log(req);
    let correo=req.query.contraseña;
    let contraseña=req.query.contraseña;
    console.log(nombre_empresa + "" + contraseña);

    poolconexion.query ("select * from us_empresa where nombre='"+correo+' and contraseña='"+contraseña+'",(err,result)=>{})
    if (err) throw console.log("error base de datos")
    res.json(result)
});
//logiar us_candidato
servidor.get("/us_candidato",(req,res)=>{
    console.log(req);
    let correo=req.query.contraseña;
    let contraseña=req.query.contraseña;
    console.log(correo + "" + contraseña);
    poolconexion.query ("select * from us_empresa where nombre='"+correo+'" and contraseña='"+contraseña+'",(err,result)=>{})
    if (err) throw console.log("error base de datos")
    res.json(result)
});
//TABLA EMPRESA
//guardar tabla us_empresa
servidor.get("/us_empresa",(req,res)=>{
    console.log(req);
    let id_empresa=req.body.id_empresa;
    let nombre_empresa=req.body.nombre_empresa;
    let ubicacion=req.body.ubicacion;
    let correo=req.body.correo;
    let contraseña=req.body.contraseña;
    let tell=req.body.tell;
    let sql=`insert into us_empresa(id_empresa,ombre_empresa,ubicacion,correo,contraseña,tell) values('${id_empresa}','${nombre_empresa}','${ubicacion}','${correo}','${contraseña}','${tell}')`;
    poolconexion.query(sql,(error,result)=>{
        if(error) throw console.log("error de guardado");
        res.send({mensaje:'guardado correctamente'});
    });
  });
  //extraccion tabla us_empresa
servidor.get("/us_empresa",(req,res)=>{
    let sentencia="select * us_empresa";
    poolconexion.query(sentencia,(err,result)=>{
        if(err) throw console.log("error mysql");
        res.json(result);
    });
    });
//eliminacion de datos tabla us_empresa
servidor.delete("/us_empresa",(req,res)=>{
    let id=req.body.id;
poolconexion.query("delete from us_empresa where id=" + id_empresa,(err,restul)=>{
    if(err) throw "error en eliminacion";
});
});
//actualizar datos us_empresa
servidor.put("/us_empresa",(req,res)=>{
    let id_empresa=req.body.id_empresa;
    let nombre_empresa=req.body.nombre_empresa;
    let ubicacion=req.body.ubicacion;
    let correo=req.body.correo;
    let contraseña=req.body.contraseña;
    let tell=req.body.tell;
poolconexion.query("update us_empresa set nombre_empresa='"+nombre_empresa+"',ubicacion='"+ubicacion+"',correo='"+correo+"',contraseña='"+contraseña+"',tell='"+tell+"' where id=empresa" + id_empresa,(err,result)=>{
if(err) throw console.log("error en edicion de datos");

});

});


//TABLA CANDIDATOS

//guardar tabla us_candidato
servidor.post("/us_candidato",(req,res)=>{
    let id_candidato=req.body.id_candidato;
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let correo=req.body.correo;
    let tel=req.body.tel;
    let exp_laboral=req.body.exp_laboral;
    let contraseña=req.body.contraseña;
    let sql=`insert into us_candidato(id_candidato,nombre,apellido,correo,tel,exp_laboral,contraseña) values('${nombre}','${id_candidato}','${apellido}','${correo}','${tel}','${exp_laboral}','${contraseña}')`;
    poolconexion.query(sql,(error,result)=>{
        if(error) throw console.log("error de guardado");
        res.send({mensaje:'guardado correctamente'});
    });
    });
//extraccion tabla us_candidato
servidor.get("/us_candidato",(req,res)=>{
    let sentencia="select * us_candidato";
    poolconexion.query(sentencia,(err,result)=>{
        if(err) throw console.log("error mysql");
        res.json(result);
    });
    });

//eliminacion de datos tabla us_candidato
servidor.delete("/us_candidato",(req,res)=>{
    let id=req.body.id;
poolconexion.query("delete from us_candidato where id=" + id_candidato,(err,restul)=>{
    if(err) throw "error en eliminacion";
});
});
//actualizar datos us_candidato
servidor.put("/us_candidato",(req,res)=>{
    let id_candidato=req.body.id_candidato;
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let correo=req.body.correo;
    let contraseña=req.body.contraseña;
    let tel=req.body.tel;
    let exp_laboral=req.body.exp_laboral;
poolconexion.query("update us_empresa set nombre='"+nombre+"',apellido='"+apellido+"',correo='"+correo+"',tel='"+tel+"',exp_laboral='"+exp_laboral+"',educacion='"+educacion+"' where id=empresa",contraseña='"+contraseña+"' + id_candidato,(err,result)=>{
if(err) throw console.log("error en edicion de datos");

});
});

//TABLA POSTULACIONES
//guardar tabla postulaciones
servidor.post("/postulaciones",(req,res)=>{
    let id_postulacion=req.body.id_postulacion;
    let id_empleos=req.body.id_empleos;
    let id_candidato=req.body.id_candidato;
    let fecha=req.body.fecha;
    let confirmacion=req.body.confirmacion;
    let sql=`insert into postulaciones(id_postulacion,id_empleos,id_candidato,fecha,confirmacion) values('${fecha}','${confirmacion}','${id_candidato}','${id_empleos}','${id_postulacion}')`;
    poolconexion.query(sql,(error,result)=>{
        if(error) throw console.log("error de guardado");
        res.send({mensaje:'guardado correctamente '});
    });
    });

servidor.listen(proyecto,()=>{
    console.log("servidor en linea proyecto");
});

