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

   async create(id, plate, model, vehicle_year, driver_id){
    

    const [veiculo] = await this.db`
        INSERT INTO vehicle (id, plate, model, vehicle_year, driver_id)
        VALUES (${id}, ${plate}, ${model}, ${vehicle_year}, ${driver_id})
        RETURNING *
    `;
    
    return veiculo;
}

}


export default postgressRepository;