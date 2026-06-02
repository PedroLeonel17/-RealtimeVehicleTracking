class postgressRepository {
    constructor(db) {
        this.db =db;
    }

    async show(){
        return await this.db`
            SELECT * FROM veiculos
        `;
    }

   async create(marca){

    const [veiculo] = await this.db`
        INSERT INTO veiculos (marca)
        VALUES (${marca})
        RETURNING *
    `;

    return veiculo;
}

}


export default postgressRepository;