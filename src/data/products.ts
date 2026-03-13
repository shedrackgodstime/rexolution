export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  whatsappMsg: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: 'RV-001',
    name: 'Rex Denim Editorial Set',
    price: '₦215,000',
    image: '/608317e168b89ad27ac7b6e4b359b82e.png',
    whatsappMsg: "I'm interested in the Rex Denim Editorial Set",
    category: 'Couture'
  },
  {
    id: 'RV-002',
    name: 'Vogue Structure Jacket',
    price: '₦185,000',
    image: '/668cb479149fa552bea03f5782950c74.png',
    whatsappMsg: "I'm interested in the Vogue Structure Jacket",
    category: 'Outerwear'
  },
  {
    id: 'RV-003',
    name: 'Revolution Cargo Pants',
    price: '₦120,000',
    image: '/1122d71cdce5e82c08428a1acdc444e5.png',
    whatsappMsg: "I'm interested in the Revolution Cargo Pants",
    category: 'Bottoms'
  },
  {
    id: 'RV-004',
    name: 'Street Luxury Hoodie',
    price: '₦145,000',
    image: '/926964970db5c26dee7557c81e612e70 (1).png',
    whatsappMsg: "I'm interested in the Street Luxury Hoodie",
    category: 'Essentials'
  },
  {
    id: 'RV-005',
    name: 'Evolve Signature Tee',
    price: '₦65,000',
    image: '/f100df685cc01922cf64f59c927c727d (1).png',
    whatsappMsg: "I'm interested in the Evolve Signature Tee",
    category: 'Essentials'
  }
];
