module.exports = (app) => {

    const save = async (req, res) => {

        const title = { ...req.body };

        if (req.params.id) {
            title.id = req.params.id;
        }


        if (!title.name) {
            return res.json({ error: "Titulo não informado" });
        }

        const titleExists = await app
            .database("cad_filmes")
            .where({ name: title.name })
            .first();

        if (titleExists) {
            return res.status(400).json({ error: "Titulo já cadastrado" });
        }

        if (req.params.id) {
            await app
                .database("cad_filmes")
                .update(title)
                .where({ id: title.id })
                .then((_) => res.status(200).send())
                .catch((err) => res.status(500).send(err))

        } else {

            await app
                .database("cad_filmes")
                .insert(title)
                .then((_) => res.status(201).send())
                .catch((err) => res.status(500).send(err))
        }

        const description = { ...req.body };
        if (!description.description) {
            return res.json({ error: "Descrição não informado" });
        }

        app
            .database("cad_filmes")
            .insert(description)
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send(err))

        const gender = { ...req.body };
        if (!gender.gender) {
            return res.json({ error: "genero não informado" });
        }

        app
            .database("cad_filmes")
            .insert(genero)
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }

    const get = async (req, res) => {
        const title = await app.database("cad_filmes").select("*");
        return res.json(title);
    }

    const getById = async (req, res) => {

        const idTitle = req.params.id;

        const titleExists = await app.database("cad_filmes").where({ id: idTitle }).first();

        if (!titleExists) {
            return res.status(400).json({ error: "Jogo não encontrado" });
        }

        const title = await app.database("cad_filmes").where({ id: idTitle }).first();

        return res.json(title);
    }

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

        return res.status(410).send();
    }

    return { get, save, getById, erase }
}