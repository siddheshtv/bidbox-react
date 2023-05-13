import React from "react";
// import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import { client } from "../../client";

const Sell = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: "",
  //   brand: "",
  //   description: "",
  //   category: "",
  //   manufacturer: "",
  //   serialno: "",
  //   image: null,
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       image: file,
  //     }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create a Sanity document with the form data
  //   const doc = {
  //     _type: "product",
  //     name: formData.name,
  //     price: parseFloat(formData.price),
  //     brand: formData.brand,
  //     description: formData.description,
  //     category: formData.category,
  //     manufacturer: formData.manufacturer,
  //     serialno: formData.serialno,
  //   };

  //   // Upload the image to Sanity asset library
  //   if (formData.image) {
  //     const imageFile = formData.image;
  //     const response = await client.assets.upload("image", imageFile);
  //     const { _id } = response;
  //     doc.image = {
  //       _type: "image",
  //       asset: {
  //         _type: "reference",
  //         _ref: _id,
  //       },
  //     };
  //   }

  //   // Save the document to Sanity
  //   try {
  //     await client.create(doc);
  //     // Reset form fields
  //     setFormData({
  //       name: "",
  //       price: "",
  //       brand: "",
  //       description: "",
  //       category: "",
  //       manufacturer: "",
  //       serialno: "",
  //       image: null,
  //     });
  //     console.log("Product created successfully!");
  //   } catch (error) {
  //     console.error("Error creating product:", error);
  //   }
  // };
  return (
    <section>
      <Navbar />
      {/* <form className="my-12">
        <input type="text" name="name" placeholder="Product Name" />
        <input type="number" name="price" placeholder="Price" />
        <input type="text" name="brand" placeholder="Brand" />
        <textarea name="description" placeholder="Description" />
        <select name="category">
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="accessories">Accessories</option>
          <option value="headphones">Headphones</option>
        </select>
        <input type="text" name="manufacturer" placeholder="Manufacturer" />
        <input type="text" name="serialno" placeholder="Serial Number" />
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form> */}
      <section>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto my-12">
            <div>
              <h2 class="font-semibold text-5xl my-1">
                Let's get you up and running
              </h2>
              <p class="text-gray-600 mb-6 mt-1">
                To set up Noel on your website, we require some details from
                you.
              </p>

              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">Product Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div class="lg:col-span-2">
                    <form action="">
                      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                          <label for="full_name">Product Name</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Brand</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Description</label>
                          <textarea
                            cols={90}
                            required
                            type="text"
                            class=" py-3 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>
                        <div class="md:col-span-5">
                          <label for="full_name">Serial Number</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>

                        <div class="md:col-span-5">
                          <label for="expprice">Expected Start Price</label>
                          <input
                            required
                            type="expprice"
                            name="number"
                            id="expprice"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>

                        <div class="md:col-span-3">
                          <label for="address">Category</label>
                          <input
                            required
                            type="text"
                            name="address"
                            id="address"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div class="md:col-span-5 text-right my-3">
                          <div class="inline-flex items-end">
                            <button
                              type="submit"
                              class="inline-flex items-center justify-center px-3 text-sm py-1  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
                            >
                              Add Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Sell;
