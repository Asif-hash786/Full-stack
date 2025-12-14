const mongoose = require('mongoose');

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazone');
}

// Schema Validation-->Basic rule for schema

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    // not null
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1,"Price is too low for Amazone selling"],
  },
  discount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

// const Book1 = new Book({
//   title: "Gone girl",
//   author: "xyz",
//   price: 800,
//   category: "fiction",
//   // category: "comics", // give error
//   genre:["fiction","superhero","comics"],
// });
// Book1.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Book.findByIdAndUpdate('693eb57a87de2644bdad2689', { price: -500 },
  { runValidators: true })
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err.errors.price.properties.message);
  });