const express = require('express');
const app = express();
const uploadUser = require('./middlewares/uploadImage');
const crypto = require('crypto');
const fs = require('fs');

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

        const fileBuffer = fs.readFileSync(req.file.path);
        const hash = crypto.createHash('sha256');
        const finalHex = hash.update(fileBuffer).digest('hex');

        return res.json({
            erro: false,
            path: req.file.path,
            file: req.file.filename,
            hash_file: finalHex
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
