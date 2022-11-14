import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.MY_DB, {
      dbName: "k91-blog",
    })
    .then(() => {
      console.log("Database bağlantısı başarılı");
    })
    .catch((err) => {
      console.log(`Bağlantı Hatası : ${err}`);
    });
};

export default connectDb;
