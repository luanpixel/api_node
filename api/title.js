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
                .then((_) => res.status(200).send())
                .catch((err) => res.status(500).send(err))
        }
    }


    return { save }
}