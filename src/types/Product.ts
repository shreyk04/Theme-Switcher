export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export type Theme = 'minimal' | 'dark' | 'colorful';
  
  export interface ThemeContextType {
    currentTheme: Theme;
    setTheme: (theme: Theme) => void;
  }