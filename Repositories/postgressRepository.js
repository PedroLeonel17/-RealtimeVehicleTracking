import { randomUUID } from "crypto";


class postgressRepository {
    constructor(db) {
        this.db =db;
    }

    async show(){
        return await this.db`
            SELECT * FROM driver
        `;
    }

   async create(plate, model, vehicle_year){
    const id = randomUUID();

    const [veiculo] = await this.db`
        INSERT INTO vehicle (id, plate, model, vehicle_year, driver_id)
        VALUES (${id}, ${plate}, ${model}, ${vehicle_year}, ${"550e8400-e29b-41d4-a716-446655440000"})
        RETURNING *
    `;
    
    return veiculo;
}

}


export default postgressRepository;