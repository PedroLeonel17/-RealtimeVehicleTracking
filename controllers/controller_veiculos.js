class ControllerVeiculos {
    constructor(repo) {
        this.repo = repo;
        console.log('ControllerVeiculos criado');
    }

    create = async (req, res) => {
        
        const {marca } = req.body;

        const resp = await this.repo.create( marca);

        res.json(resp);
    }

}
export default ControllerVeiculos;