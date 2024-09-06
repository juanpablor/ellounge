export interface CompanyDetails {
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
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

export interface Dish {
  name: string;
  fr_desc: string;
  en_desc: string;
  price: string;
  image: string;
  note1?: string;
}

export interface FoodMenu {
  entrees: Dish[];
  mainDishes: Dish[];
  extras: Dish[];
  sideDishes: Dish[];
  desserts: Dish[];
}