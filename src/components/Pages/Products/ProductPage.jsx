import React, { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useAuth0 } from "@auth0/auth0-react";

function ProductPage() {
  const { user, isAuthenticated } = useAuth0();

  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState("");

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNumber = parseInt(inputNumber, 10);
    if (!isNaN(newNumber)) {
      const updatedNumbers = [...numbers, newNumber];
      setNumbers(updatedNumbers.sort((a, b) => b - a));
      setInputNumber("");
    }
  };

  return (
    <section>
      <Navbar />
      {isAuthenticated ? (
        <section>
          <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src="https://m.media-amazon.com/images/I/61Yc75iMUWL._SL1500_.jpg"
                  class="aspect-square w-full rounded-xl object-cover"
                />

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                  <img
                    alt="Les Paul"
                    src="https://m.media-amazon.com/images/I/71Uqzn6rqJL._SL1500_.jpg"
                    class="aspect-square w-full rounded-xl object-cover"
                  />

                  <img
                    alt="Les Paul"
                    src="https://m.media-amazon.com/images/I/71G44HUh7yL._SL1500_.jpg"
                    class="aspect-square w-full rounded-xl object-cover"
                  />

                  <img
                    alt="Les Paul"
                    src="https://m.media-amazon.com/images/I/81GPddcfSqL._SL1500_.jpg"
                    class="aspect-square w-full rounded-xl object-cover"
                  />

                  <img
                    alt="Les Paul"
                    src="https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg"
                    class="aspect-square w-full rounded-xl object-cover"
                  />
                </div>
              </div>

              <div class="sticky top-0">
                <strong class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                  Reselling
                </strong>

                <div class="mt-8 flex justify-between">
                  <div class="max-w-[35ch] space-y-2">
                    <h1 class="text-xl font-bold sm:text-2xl">
                      Apple iPhone 13 (128GB) - (Product) RED
                    </h1>

                    <p class="text-sm">Ratings</p>

                    <div class="-ms-0.5 flex">
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        class="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p class="text-sm font-semibold uppercase text-gray-400">
                      Auction Starting Price
                    </p>
                    <p class="text-3xl text-green-500 font-bold">₹61,999</p>
                  </div>
                </div>

                <div class="mt-4">
                  <div class="prose max-w-none">
                    <p>
                      <ul>
                        <li>•15 cm (6.1-inch) Super Retina XDR display</li>
                        <li>
                          • Cinematic mode adds shallow depth of field and
                          shifts focus automatically in your videos
                        </li>
                        <li>
                          • Advanced dual-camera system with 12MP Wide and Ultra
                          Wide cameras; Photographic Styles, Smart HDR 4, Night
                          mode, 4K Dolby Vision HDR recording
                        </li>
                        <li>
                          • 12MP TrueDepth front camera with Night mode, 4K
                          Dolby Vision HDR recording
                        </li>
                        <li>•A15 Bionic chip for lightning-fast performance</li>
                      </ul>
                    </p>
                  </div>
                </div>

                <form class="mt-8" onSubmit={handleSubmit}>
                  <fieldset>
                    <legend class="mb-1 text-sm font-medium">Color</legend>

                    <div class="flex flex-wrap gap-1">
                      <label for="color_tt" class="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          RED (PRODUCT RED)
                        </span>
                      </label>

                      <label for="color_fr" class="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Space Gray
                        </span>
                      </label>

                      <label for="color_cb" class="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_cb"
                          class="peer sr-only"
                        />

                        <span class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          White
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <div class="mt-8 flex gap-4 items-center">
                    <div>
                      <label for="quantity" class="mr-3">
                        Bidding Amount
                      </label>

                      <input
                        type="number"
                        value={inputNumber}
                        id="quantity"
                        onChange={handleInputChange}
                        class="w-28 rounded border-solid border-2 border-gray-300 py-3 text-center text-md [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="block rounded bg-green-600 px-5 py-3 text-md font-medium text-white hover:bg-green-500"
                      >
                        Submit BID
                      </button>
                    </div>
                  </div>
                </form>
                <div>
                  <div className="py-3 mt-12">
                    <h1 className="font-bold text-2xl">Current Bids</h1>
                  </div>

                  {numbers.map((number, index) => (
                    <div
                      className="flex justify-between border-2 border-gray-200 rounded items-center my-2"
                      key={index}
                    >
                      <p class="w-3/2 px-4 py-2 font-medium text-left">
                        {user.email}
                      </p>
                      <div className="flex items-center text-xl px-4 py-2">
                        <h1 className="mx-2">₹</h1>
                        <h1 className="text-2xl font-bold">{number}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <h1 className="text-center text-4xl font-bold my-12">
            Please log in to view the product in detail.
          </h1>
        </section>
      )}

      <Footer />
    </section>
  );
}

export default ProductPage;
