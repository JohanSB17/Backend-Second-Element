// import { Schema, model, Document, Types } from 'mongoose'

// const schema = new Schema({
//     nombre: String,
//     sku: String,
//     cantidad: Number,
//     precio: Number,
//     descripcion: String,
//     talla:String,
//     imagePath: String,
//     usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
// });

// export interface IPhoto extends Document {
//     nombre: string;
//     sku: string;
//     cantidad: number;
//     precio: number;
//     descripcion: string;
//     talla:string;
//     imagePath: string;
//     usuario: Types.ObjectId;
// }

// export default model<IPhoto>('Photo', schema);