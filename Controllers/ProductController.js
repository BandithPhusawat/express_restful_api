const Product = require('../Models/Product');

exports.lists = async (req, res) => {
     try {
          const producted =  await Product.find({}).exec();
          res.send(producted);
     } catch (error) {
          res.send(error.message);
     }
}

exports.listID = async (req, res) => {
     try {
          const id = req.params.id;

          const producted =  await Product.findOne({ _id : id }).exec();
          res.send(producted);
     } catch (error) {
          res.send(error.message);
     }
}

exports.create = async (req, res) => {
     try { 
          console.log(req.body);
          const productCreate = await Product(req.body).save();
          res.send(productCreate);
     } catch (error) {
          res.status(500).send(error.message)
     }
}

exports.update = async (req, res) => {
     try { 
          const id = req.params.id;
          const productUpdate = await Product.findOneAndUpdate({ _id:id }, req.body, { new: true}).exec();
          res.send(productUpdate);  
     } catch (error) {
          res.status(500).send(error.message)
     }
}

exports.remove = async (req, res) => {
     try {
          const id = req.params.id;
          const removed = Product.findOneAndDelete({ _id:id }).exec();
          res.json({ message: "deleted" , id: id });
     } catch (error) {
          res.status(500).send(error.message)
     }
}