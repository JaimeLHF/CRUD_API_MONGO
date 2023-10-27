import express from 'express'
import mongoose, { mongo } from 'mongoose';
import cors from 'cors'

const PORT = 3300


const app = express();

mongoose.connect("mongodb+srv://jaimehansenfilho:jaime0hansen@apimongo.dkffyb5.mongodb.net/?retryWrites=true&w=majority");

app.use(cors());
app.use(express.json());

const Products = mongoose.model('products', {
    id: Number,
    produto: String,
    acab: String,
    img_url: String,
})



app.get("/", async (req, res) => {

    const products = await Products.find()
    res.status(200).json(products)

})

app.post("/cadastro", async (req, res) => {

    const products = new Products({
        id: req.body.id,
        produto: req.body.produto,
        acab: req.body.acab,
        img_url: req.body.img_url
    });

    await products.save();

    res.status(201).json(products);

});



app.delete("/:id", async (req, res) => {

    const products = await Products.findOneAndRemove().where({ id: req.params.id });

    if (!products) {
        return res.status(404).json("Produto não encontrado!")
    }

    return res.send(products);
})

app.listen(PORT, () => {
    console.log(`Server UP - PORT: ${PORT}`)
});

export default app;
