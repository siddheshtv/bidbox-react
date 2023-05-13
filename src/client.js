import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: process.env.SANITY_APP_ID,
  dataset: "production",
  apiVersion: "2022-11-16",
  useCdn: true,
  token: process.env.SANITY_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
