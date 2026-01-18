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

// Import new stock images for Splash Pages
import splash1 from '@assets/stock_images/modern_landing_pa_4826017b.jpg';
import splash2 from '@assets/stock_images/modern_landing_pa_3726017b.jpg';
import splash3 from '@assets/stock_images/modern_landing_pa_2626017b.jpg';
import splash4 from '@assets/stock_images/modern_landing_pa_1526017b.jpg';
import splash5 from '@assets/stock_images/modern_landing_pa_0426017b.jpg';

export interface Article {
  slug: string;
  title: string;
  publishDate: string;
  image: string;
  url?: string;
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
    slug: "rod-page",
    title: "Rod Page",
    publishDate: "January 2026",
    image: splash1,
    url: "https://digiucard.com/RodPage"
  },
  {
    slug: "snug-build",
    title: "Snug Build Box",
    publishDate: "January 2026",
    image: splash2,
    url: "https://snug-build-box.lovable.app"
  },
  {
    slug: "celina-mission",
    title: "Celina Mission",
    publishDate: "January 2026",
    image: splash3,
    url: "https://digiucard.com/CelinaMission1"
  },
  {
    slug: "software-dev-landing",
    title: "Software Dev Landing",
    publishDate: "January 2026",
    image: splash4,
    url: "https://digiucard.com/webviewer?url=https%3A%2F%2Fdzbtuoimibbzrdyebrbg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontact-files%2F20251229161712-roduploadayoblab7035962482_Rod_Womack_Software_Dev_Landing_Page_6.html&lock=1&iy=20&mw=540&my=-450&mx=-360&ms=2&vh=797&is=0.95&menu=0"
  },
  {
    slug: "sheryl-thanks",
    title: "Sheryl Thanks",
    publishDate: "January 2026",
    image: splash5,
    url: "https://digiucard.com/Sherylthanks00"
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
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png",
    type: "Connect"
  },
  {
    id: "2",
    title: "Portfolio Edition",
    description: "Streamlined portfolio layout focusing on work and personal brand visualization.",
    url: "https://digiucard.info/digiucard?primarychecksum=00007f5b1e73",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769005067-image.png",
    type: "Portfolio"
  },
  {
    id: "3",
    title: "Creator Pro",
    description: "Bespoke creator identity with modular content hubs for cross-platform presence.",
    url: "https://digiucard.info/digiucard?primarychecksum=0000210c161d",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png",
    type: "Creator"
  },
  {
    id: "4",
    title: "Business Elite",
    description: "Corporate-grade digital business card with seamless CRM integration paths.",
    url: "https://digiucard.com/CPetDGU",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png",
    type: "Business"
  },
  {
    id: "5",
    title: "Minimal Identity",
    description: "Clean, essential digital presence focusing strictly on core identity and contact.",
    url: "https://digiucard.info/digiucard?primarychecksum=00001b9fab72&digiu_pay=false&digiu_connect=false",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768001227-image.png",
    type: "Minimal"
  }
];
