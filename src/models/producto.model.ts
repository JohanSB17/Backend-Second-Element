import { Model, Schema, Types, model } from "mongoose";

interface ProductoInterface extends Document {
  imagenPath?: string;
  nombre: string;
  sku: string;
  precio: string;
  talla:String,
  descripcion: String,
  createdAt: Date;
  usuario: Types.ObjectId;
}

const ProductoSchema = new Schema<ProductoInterface>({
  imagenPath:{type:String},
  nombre: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  precio: { 
    type: String, 
    required: true,
  },
  talla: {type:String},
  descripcion: {type:String},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
});

const ProductoModel: Model<ProductoInterface> = model<ProductoInterface>(
  "producto",
  ProductoSchema
);
export default ProductoModel;
