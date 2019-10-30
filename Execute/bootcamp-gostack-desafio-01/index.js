const express = require ('express');

const server = express();

const projects = [];

function cheskUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User name is required' });
    }
    return next();
}



server.use(express.json());

server.get('/projects', (req, res) => {
    return res.json(projects);
});
    server.post('/projects', (req, res) => {
        const { id } = req.body;        
        projects.push(id);
        const { nome } = req.body;        
        projects.push(nome);
        
        return res.json(projects);
    });

    server.delete('/projects/:index', cheskUserExists, (req, res) => {
        const { index } = req.params;
        projects.splice(index, 1);

        return res.json(projects);
    })


server.listen(3000);
