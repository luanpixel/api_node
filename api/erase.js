module.exports = (app) => {
    const erase = async (req, res) => {
        const idTitle = req.params.id;
        if (!idTitle) {
            return res.status(400).json({ error: "ID do jogo não informado" });
        }

        const titleExists = await app.database("cad_filmes").where({ id: idTitle });

        if (!titleExists) {
            return res.status(400).json({ error: "Jogo não encontrado" });
        }

        await app.database("cad_filmes").where({ id: idTitle }).del();

        return res.status(204).send();
    }
    return { erase }
}
