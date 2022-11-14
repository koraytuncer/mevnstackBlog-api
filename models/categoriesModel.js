import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const categoriesSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  color: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  slug: {
    type: Schema.Types.String,
  },
},
{
  timestamps: true,
}

);

categoriesSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });
  next();
});

const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories;
