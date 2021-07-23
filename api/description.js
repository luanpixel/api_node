module.exports = (app) => {


    const save = (req, res) => {

        const description = { ...req.body };
        if (!description.description) {
            return res.json({ error: "Descrição não informado" });
        }

        app
            .database("cad_filmes")
            .insert(description)
            .then((_) => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }

    return { save }
}