var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    prizeUnit: { type: Number, required: [true, 'El precio unitario es necesario'] },
    description: { type: String, required: false },
    available: { type: Boolean, required: true, default: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    img: { type: String, required: false },
});


module.exports = mongoose.model('Product', productSchema);