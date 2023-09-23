import{connection} from "../../db.js"
export const login=(req,res)=>{
  
    res.render('templates/login')
};
export const loginUser=(req,res)=>{

    const { email, password } = req.body;
    // Valida os dados do formulário
    if (!email || !password) {
        res.status(400).send("Os dados do formulário estão inválidos.");
        return;
    }
    // Verifica se o usuário existe no banco de dados
     connection.query(`SELECT * FROM User WHERE email = ? AND password=?`, [email,password], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao verificar o usuário.");
      return;
    }

    if (!results.length) {
      res.status(401).send("Usuário não encontrado.");
      return;
    }


    // Redireciona o usuário para a página protegida
    res.redirect("/dashboard");
  });
}
export const registerUser=(req,res) => {
    const q = "INSERT INTO User(`email`,`password`) VALUES(?)";
    const values = [
        req.body.email,
        req.body.password1,
    ];
    connection.query(q,[values],(err) => {
        if(err) return res.json(err);
        // return res.status(200).json("Usuario criado com sucesso");
        return res.render('templates/login')
    });
};

export const updateUser=(req,res) => {
    const q = "UPDATE User SET `email` = ?,`password` = ? WHERE `id` = ?";
    const values = [
        req.body.email,
        req.body.password,
    ];
    connection.query(q,[...values, req.params.id],(err) => {
        if(err) return res.json(err);
        return res.status(200).json("Usuario atualizado com sucesso");
    });
};

export const deleteUSer=(req,res) => {
    const q = "DELETE FROM User WHERE `id` = ?";
    connection.query(q,[req.params.id], (err) =>{
        if(err) return res.json(err);
        return res.status(200).json("Usuario deletado com sucesso");
    })
}