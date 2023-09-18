import{connection} from "../../db.js"
export const login=(req,res)=>{
    res.render('templates/login')
};

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