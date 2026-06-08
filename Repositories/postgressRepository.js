import { randomUUID } from "crypto";


class postgressRepository {
    constructor(db) {
        this.db =db;
    }

    async show(){
        return await this.db`
            SELECT * FROM veiculos
        `;
    }

   async create(plate, model, vehicle_year){
    const driver_id = randomUUID();

    const [veiculo] = await this.db`
        INSERT INTO veiculos (plate, model, vehicle_year, driver_id)
        VALUES (${plate}, ${model}, ${vehicle_year}, ${driver_id})
        RETURNING *
    `;
    
    return veiculo;
}

}


export default postgressRepository;