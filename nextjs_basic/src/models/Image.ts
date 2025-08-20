import mongoose, { Schema, models, model, Model, Document } from "mongoose";

export interface IImage extends Document {
  image: string; // Bildpfad oder Bild-URL
  createdAt: Date;
}

const imageSchema = new Schema<IImage>(
  {
    image: { type: String, required: true }, // speichert den Bildpfad oder die URL
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Image: Model<IImage> = models.Image || model<IImage>("Image", imageSchema);
export default Image;
