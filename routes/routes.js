module.exports = (app) => {
    app.route("api/title")
        .get(app.api.list.get)
        .post(app.api.title.save)
        .post(app.api.gender.save)
        .post(app.api.description.save)


    app.route("api/title/:id")
        .get(app.api.getById.getById)
        .put(app.api.title.save)
        .delete(app.api.erase.erase)
}