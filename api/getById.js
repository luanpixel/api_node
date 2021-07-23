module.exports = (app) => {

    const getById = async (req, res) => {

        const idTitle = req.params.id;

        const titleExists = await app.database("cad_filmes").where({ id: idTitle }).first();

        if (!titleExists) {
            return res.status(400).json({ error: "Jogo não encontrado" });
        }

        const title = await app.database("cad_filmes").where({ id: idTitle }).first();

        return res.json(title);
    }
    return { getById }
}

