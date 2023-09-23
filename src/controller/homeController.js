import{connection} from "../../db.js"


export const home = (req,res) => {
   
        res.render('index'); 
}

export const registerTask=(req,res) => {
  const q = "INSERT INTO Task(`taskUser`,`username` ,`status`) VALUES(?)";
  const values = [
    req.body.taskUser,
    req.body.username,
    req.body.iniciado,
];
 

  connection.query(q,[values],(err) => {
      if(err) return res.json(err);
      //return res.status(200).json("Tarefa criada com sucesso");
    return res.render('index')
  });
};
