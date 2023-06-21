const Products = require("./modules/product");

// GET /products: Retrieves a list of all products

const getallproducts = async (req, res) => {
    await Products.find()
        .then(data => {
            res.json(data).status(200)
        }).catch((err) => {
            res.status(400).json({ err })
        })
}

// POST /products: Creates a new product

const createProduct = (req, res) => {
    var { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
        res.status(400).json({ error: "Invalid data" })
    }
    else {
        const data = new Products({
            name, description, price, category
        })
        data.save();
        res.send({ success: "data added to database", data })
    }
}

// GET /products/:id: Retrieves a specific product by ID

const retriveProduct = async (req, res) => {
const id = req.body.id;
await Products.findOne({_id:id})
.then((data)=>{
    res.status(200).json(data)
}).catch((err)=>{
    res.status(400).json({error: "No Product found"})
})
}

// PUT /products/:id: Updates a specific product by ID

const updateProduct = async (req, res) => {
    const id = req.body.id;
    var { name, description, price, category } = req.body;
    await Products.findByIdAndUpdate(id,{
        name, description, price, category
    })
    .then(()=>{
        res.status(200).json({success : "data updated"})
    }).catch(()=>{
        res.status(400).json({error: "Not able to update"})
    })
}

// DELETE /products/:id: Deletes a specific product by ID

const DeleteProduct = async (req, res) => {
    const id = req.body.id;
    await Products.findByIdAndRemove({_id:id})
    .then(()=>{
        res.status(200).json({success : "product deleted"})
    }).catch(()=>{
        res.status(400).json({error: "error while deleting"})
    })
}

module.exports = {
    getallproducts, createProduct, retriveProduct,
    updateProduct, DeleteProduct
}