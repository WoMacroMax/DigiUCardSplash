import img1 from '@assets/stock_images/fashion_editorial_lu_2f5ffe14.jpg';
import img2 from '@assets/stock_images/fashion_editorial_lu_b6af720c.jpg';
import img3 from '@assets/stock_images/fashion_editorial_lu_89ca740e.jpg';
import img4 from '@assets/stock_images/fashion_editorial_lu_f1409a82.jpg';
import img5 from '@assets/stock_images/fashion_editorial_lu_3112e4d6.jpg';
import img6 from '@assets/stock_images/fashion_editorial_lu_9bec9e9f.jpg';
import img7 from '@assets/stock_images/fashion_editorial_lu_38f22b56.jpg';
import img8 from '@assets/stock_images/fashion_editorial_lu_11220563.jpg';
import img9 from '@assets/stock_images/fashion_editorial_lu_fefc8bd2.jpg';
import img10 from '@assets/stock_images/fashion_editorial_lu_0e0d7215.jpg';

export interface Article {
  slug: string;
  title: string;
  publishDate: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
}

export interface DigiUCardPreview {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}

export const articles: Article[] = [
  {
    slug: "about-james",
    title: "Who's James?",
    publishDate: "March 20, 2024",
    image: img1
  },
  {
    slug: "editorial-elegance",
    title: "Statement Jewelry",
    publishDate: "March 15, 2024",
    image: img2
  },
  {
    slug: "desert-dreams",
    title: "Bold Lip",
    publishDate: "March 15, 2024",
    image: img3
  },
  {
    slug: "vintage-highway",
    title: "Luxury Streetwear",
    publishDate: "March 12, 2024",
    image: img4
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Vybe Gala",
    date: "July 15, 2026",
    location: "Malibu, CA",
    image: img1
  },
  {
    id: "2",
    title: "Travelers Summit",
    date: "August 22, 2026",
    location: "Reykjavik, Iceland",
    image: img2
  },
  {
    id: "3",
    title: "Luxury Expo 2026",
    date: "September 10, 2026",
    location: "Milan, Italy",
    image: img3
  }
];

export const showcasedCards: DigiUCardPreview[] = [
  {
    id: "1",
    title: "Standard Connect",
    description: "Full digital identity with active connection modules. The ultimate professional networking tool.",
    url: "https://digiucard.info/digiucard?primarychecksum=0000418de2aa&digiu_pay=false&digiu_connect=true",
    image: img5,
    type: "Connect"
  },
  {
    id: "2",
    title: "Portfolio Edition",
    description: "Streamlined portfolio layout focusing on work and personal brand visualization.",
    url: "https://digiucard.info/digiucard?primarychecksum=00007f5b1e73",
    image: img6,
    type: "Portfolio"
  },
  {
    id: "3",
    title: "Creator Pro",
    description: "Bespoke creator identity with modular content hubs for cross-platform presence.",
    url: "https://digiucard.info/digiucard?primarychecksum=0000210c161d",
    image: img7,
    type: "Creator"
  },
  {
    id: "4",
    title: "Business Elite",
    description: "Corporate-grade digital business card with seamless CRM integration paths.",
    url: "https://digiucard.com/CPetDGU",
    image: img8,
    type: "Business"
  },
  {
    id: "5",
    title: "Minimal Identity",
    description: "Clean, essential digital presence focusing strictly on core identity and contact.",
    url: "https://digiucard.info/digiucard?primarychecksum=00001b9fab72&digiu_pay=false&digiu_connect=false",
    image: img9,
    type: "Minimal"
  }
];
