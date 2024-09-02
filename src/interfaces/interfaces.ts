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
  