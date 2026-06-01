class TesteController {
    constructor(repo) {
        this.repo = repo;
    }

    show = async(req, res) =>{
        const resp = await this.repo.show();
        res.json(resp);
    }

}

export default TesteController;