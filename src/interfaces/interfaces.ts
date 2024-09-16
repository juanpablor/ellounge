export interface CompanyDetails {
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  whatsApp: string;
  instagram: string;
  facebook: string;
}

export interface CompanyData {
  name: React.ReactNode;
  clubMenu: string[];
  companyName: string;
  companyDetails: CompanyDetails;
  menu: string[];
}

export interface DataLayout {
  data?: CompanyData;
}

export interface IndexLayoutProps {
  children: React.ReactNode;
  data?: CompanyData;
}

export interface Product {
  name: string;
  price: string;
  image: string;
  note1?: string;
  subtitle?: string;
}

export interface FoodMenu {
  entrees: Product[];
  mainDishes: Product[];
  extras: Product[];
  sideDishes: Product[];
  desserts: Product[];
}

export interface DrinksMenu {
  cocktailsSignature: Product[];
  houseCocktails: Product[];
  classicCocktails: Product[];
  shots: Product[];
  glass: Product[];
  houseShots: Product[];
  bottles: Product[];
  wineBeer: Product[];
  mocktails: Product[];
  non_alcoholic: Product[];
}