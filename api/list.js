module.exports = (app) => {
    const get = async (req, res) => {
        const title = await app.database("cad_filmes").select("*");
        return res.json(title);
    }
    return { get }
}