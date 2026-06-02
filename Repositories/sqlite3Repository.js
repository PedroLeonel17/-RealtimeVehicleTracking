class sqlite3Repository {
    constructor(db) {
        this.db =db;
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


export default sqlite3Repository;