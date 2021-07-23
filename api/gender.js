module.exports = (app) => {


    const save = (req, res) => {

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

    return { save }
}