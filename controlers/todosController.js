const schemaModle = require('../models/todosModel')

module.exports.getTodos = async (req, res) => {
    const todos = await schemaModle.find()
    res.send(todos)
}

module.exports.searchTodos = async (req, res) => {
    const query = req.query.q;
    try {
        const todos = await schemaModle.find({ title: new RegExp(query, 'i') });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.addTodos = async (req, res) => {
    const { userId, title, finishDate } = req.body

    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Пустое значения" });
    }

    schemaModle
        .create({ userId, title, finishDate })
        .then((data) => {
            console.log(data);
            console.log('Added todos');
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ error: "Server error" });
        })
}

module.exports.editTodos = async (req, res) => {
    const { _id, title, finishDate } = req.body

    schemaModle
        .findByIdAndUpdate(_id, { title, finishDate })
        .then(() => res.send("Edit todos"))
        .catch(err => console.log(err))
}

module.exports.deleteTodos = async (req, res) => {
    const { _id } = req.body

    schemaModle
        .findByIdAndDelete(_id)
        .then(() => res.send("Delete todos"))
        .catch(err => console.log(err))
}

module.exports.compTodos = async (req, res) => {
    const { _id } = req.body
    const { comp } = await schemaModle.findById(_id)

    schemaModle
        .findByIdAndUpdate(_id, { comp: !comp })
        .then(() => res.send("Complated todos"))
        .catch(err => console.log(err))
}