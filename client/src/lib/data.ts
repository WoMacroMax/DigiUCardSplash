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
  },
  {
    slug: "lavender-fields",
    title: "The Hat Edit",
    publishDate: "March 8, 2024",
    image: img5
  },
  {
    slug: "coastal-classic",
    title: "Ocean Breeze",
    publishDate: "March 5, 2024",
    image: img6
  },
  {
    slug: "stories-unbound",
    title: "Stories Unbound",
    publishDate: "March 3, 2024",
    image: img7
  },
  {
    slug: "circular-horizons",
    title: "Circular Horizons",
    publishDate: "March 1, 2024",
    image: img8
  },
  {
    slug: "retro-revival",
    title: "Retro Revival",
    publishDate: "February 28, 2024",
    image: img9
  },
  {
    slug: "golden-spheres",
    title: "Golden Spheres",
    publishDate: "February 25, 2024",
    image: img10
  }
];
