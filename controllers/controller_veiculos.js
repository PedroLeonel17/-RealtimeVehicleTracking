
import { randomUUID } from "crypto";

class ControllerVeiculos {
    constructor(repo) {
        this.repo = repo;
        console.log('ControllerVeiculos criado');
    }

    create = async (req, res) => {
        
        const {plate, model, vehicle_year} = req.body;

        const driver_id= "550e8400-e29b-41d4-a716-446655440000"
        const resp = await this.repo.create(randomUUID(), plate, model, vehicle_year, driver_id);

        res.json(resp);
    }

}
export default ControllerVeiculos;