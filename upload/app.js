const express = require('express');
const app = express();
const uploadUser = require('./middlewares/uploadImage');

app.get('/upload/:file',function(req,res) {
    const file = req.params.file
    console.log(file);
     
    // Download function provided by express
    res.download("public/upload/users"+'/' + file, function(err) {
        if(err) {
            console.log(err);
        }
    })
})

app.post("/upload", uploadUser.single('file'), async (req, res) => {

    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!",
            path: req.file.path
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });



});

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001: http://localhost:3001");
});
