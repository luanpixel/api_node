module.exports = (app) => {
    app.route("/title")
        .get(app.api.list.get)
        .post(app.api.title.save)
        .post(app.api.gender.save)
        .post(app.api.description.save)


    app.route("/title/:id")
        .get(app.api.getById.getById)
        .put(app.api.title.save)
        .delete(app.api.erase.erase)
}