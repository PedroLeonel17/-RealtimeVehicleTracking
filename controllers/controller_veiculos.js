class ControllerVeiculos {
    constructor(repo) {
        this.repo = repo;
        console.log('ControllerVeiculos criado');
    }

    create = async (req, res) => {
        
        const {plate, model, vehicle_year, driver_id } = req.body;

        const resp = await this.repo.create( plate, model, vehicle_year, driver_id);

        res.json(resp);
    }

}
export default ControllerVeiculos;