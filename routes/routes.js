module.exports = (app) => {
    app.route("/api/title")
        .get(app.api.title.get)
        .post(app.api.title.save)
        .post(app.api.title.save)
        .post(app.api.title.save)


    app.route("/api/title/:id")
        .get(app.api.title.getById)
        .put(app.api.title.save)
        .delete(app.api.title.erase)
}