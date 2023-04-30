import React from "react";

function ProductCard() {
  return (
    <li>
      <a href="/productpage" class="group block overflow-hidden mb-2">
        <img
          src="https://m.media-amazon.com/images/I/61Yc75iMUWL._SL1500_.jpg"
          alt=""
          class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 rounded-lg shadow-lg"
        />

        <div class="relative bg-white pt-3">
          <h3 class="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4">
            Apple iPhone 13 (128GB) - (Product) RED
          </h3>

          <p class="mt-2">
            <span class="sr-only"> Resell Price </span>

            <span class="tracking-wider text-gray-900"> ₹ 61,999</span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default ProductCard;
