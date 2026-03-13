import ImgProductCouture from '~/media/product-couture.png?jsx';
import ImgProductBottoms from '~/media/product-bottoms.png?jsx';
import ImgProductHoodie from '~/media/product-hoodie.png?jsx';
import ImgProductTee from '~/media/product-tee.png?jsx';
import ImgProductJacket from '~/media/product-jacket.png?jsx';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  category: string;
  whatsappMsg: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "RV CLASSIC COUTURE",
    price: "₦85,000",
    image: ImgProductCouture,
    category: "Signature",
    whatsappMsg: "I'm interested in the RV Classic Couture piece."
  },
  {
    id: "2",
    name: "STREET BOTTOMS V1",
    price: "₦45,000",
    image: ImgProductBottoms,
    category: "Bottoms",
    whatsappMsg: "I'm interested in the Street Bottoms V1."
  },
  {
    id: "3",
    name: "URBAN HOODIE",
    price: "₦65,000",
    image: ImgProductHoodie,
    category: "Topwear",
    whatsappMsg: "I'm interested in the Urban Hoodie."
  },
  {
    id: "4",
    name: "REVOLUTION TEE",
    price: "₦35,000",
    image: ImgProductTee,
    category: "Basics",
    whatsappMsg: "I'm interested in the Revolution Tee."
  },
  {
    id: "5",
    name: "UTILITY JACKET",
    price: "₦120,000",
    image: ImgProductJacket,
    category: "Outerwear",
    whatsappMsg: "I'm interested in the Utility Jacket."
  }
];
