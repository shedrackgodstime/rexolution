export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  whatsappMsg: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "RV CLASSIC COUTURE",
    price: "₦85,000",
    image: "/images/product-couture.png",
    category: "Signature",
    whatsappMsg: "I'm interested in the RV Classic Couture piece."
  },
  {
    id: "2",
    name: "STREET BOTTOMS V1",
    price: "₦45,000",
    image: "/images/product-bottoms.png",
    category: "Bottoms",
    whatsappMsg: "I'm interested in the Street Bottoms V1."
  },
  {
    id: "3",
    name: "URBAN HOODIE",
    price: "₦65,000",
    image: "/images/product-hoodie.png",
    category: "Topwear",
    whatsappMsg: "I'm interested in the Urban Hoodie."
  },
  {
    id: "4",
    name: "REVOLUTION TEE",
    price: "₦35,000",
    image: "/images/product-tee.png",
    category: "Basics",
    whatsappMsg: "I'm interested in the Revolution Tee."
  },
  {
    id: "5",
    name: "UTILITY JACKET",
    price: "₦120,000",
    image: "/images/product-jacket.png",
    category: "Outerwear",
    whatsappMsg: "I'm interested in the Utility Jacket."
  }
];
