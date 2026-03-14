export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  externalUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "RV CLASSIC COUTURE",
    image: "/images/product-couture.png",
    category: "Signature",
    externalUrl: "https://rexolutionvogue.com/"
  },
  {
    id: "2",
    name: "STREET BOTTOMS V1",
    image: "/images/product-bottoms.png",
    category: "Bottoms",
    externalUrl: "https://rexolutionvogue.com/"
  },
  {
    id: "3",
    name: "URBAN HOODIE",
    image: "/images/product-hoodie.png",
    category: "Topwear",
    externalUrl: "https://rexolutionvogue.com/"
  },
  {
    id: "4",
    name: "REVOLUTION TEE",
    image: "/images/product-tee.png",
    category: "Basics",
    externalUrl: "https://rexolutionvogue.com/"
  },
  {
    id: "5",
    name: "UTILITY JACKET",
    image: "/images/product-jacket.png",
    category: "Outerwear",
    externalUrl: "https://rexolutionvogue.com/"
  }
];
