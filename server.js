import express from "express";
import route  from "./routes.js";
import path from "path";
import{connection} from "./db.js"
const app = express();
const getDirname = () => {
	const { cwd } = process;
	return cwd();
  };
const __dirname = getDirname();

app.set('views', path.resolve(__dirname, 'src','views'));//caminho absoluto da pasta view
app.set('view engine', 'ejs');// engine


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname,'global')))//lida com os arquivos estaticos
app.use(route);
app.use(express.json());


connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
        app.listen(3000, ()=>{
            console.log('Server started!')
            console.log('url: http://127.0.0.1:3000')
        })
		console.log('Database Connected Successfully..!!');
        
	}
});

