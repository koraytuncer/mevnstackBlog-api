import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Categories",
    },
    author: {
      type: Schema.Types.String,
      required: true,
    },
    slug: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

postSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    strict: true,
  });
  next();
});

const Post = mongoose.model("Post", postSchema);

export default Post;
