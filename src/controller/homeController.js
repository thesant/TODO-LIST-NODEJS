import{connection} from "../../db.js"


export const home = (req,res) => {
    connection.query('SELECT * FROM User', (err, results) => {
        if (err) {
          res.status(500).send('Erro ao acessar o banco de dados');
          return;
        }
        res.render('index'); 
    });
}

