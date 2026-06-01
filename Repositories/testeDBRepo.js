import sqlite from 'sqlite3';


class TesteDBRepo {
    constructor(path) {
        this.db =this.connectDB(path);
    }

    connectDB = (path) => {
        const db = new sqlite.Database(path, (err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err.message);
            } else {
                console.log('Conexão com o banco de dados estabelecida.');
            }
        });
        return db;
    }

    show(){

        return new Promise ((resolve, reject) => {
            this.db.all('SELECT * FROM veiculos', (err, rows) => {
                if (err) {
                    console.error('Erro ao executar a consulta:', err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    create(marca){

        return new Promise ((resolve, reject) => {
            this.db.run('INSERT INTO veiculos (marca) VALUES (?)', [marca], function(err) {
                if (err) {
                    console.error('Erro ao executar a consulta:', err.message);
                    reject(err);
                } else {
                    resolve({ "CRIADO": true, marca });
                }
            });
        });
    }

}


export default TesteDBRepo;