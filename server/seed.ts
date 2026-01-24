import { db } from "./db";
import { articles, showcasedCards } from "@shared/schema";

const initialArticles = [
  {
    slug: "rod-page",
    title: "Rod Page",
    publishDate: "January 2026",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png",
    url: "https://digiucard.com/RodPage"
  },
  {
    slug: "snug-build",
    title: "Snug Build Box",
    publishDate: "January 2026",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769005067-image.png",
    url: "https://snug-build-box.lovable.app"
  },
  {
    slug: "celina-mission",
    title: "Celina Mission",
    publishDate: "January 2026",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png",
    url: "https://digiucard.com/CelinaMission1"
  },
  {
    slug: "software-dev-landing",
    title: "Software Dev Landing",
    publishDate: "January 2026",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768001227-image.png",
    url: "https://digiucard.com/webviewer?url=https%3A%2F%2Fdzbtuoimibbzrdyebrbg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontact-files%2F20251229161712-roduploadayoblab7035962482_Rod_Womack_Software_Dev_Landing_Page_6.html&lock=1&iy=20&mw=540&my=-450&mx=-360&ms=2&vh=797&is=0.95&menu=0"
  },
  {
    slug: "sheryl-thanks",
    title: "Sheryl Thanks",
    publishDate: "January 2026",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png",
    url: "https://digiucard.com/Sherylthanks00"
  }
];

const initialCards = [
  {
    title: "Standard Connect",
    description: "Full digital identity with active connection modules. The ultimate professional networking tool.",
    url: "https://digiucard.info/digiucard?primarychecksum=0000418de2aa&digiu_pay=false&digiu_connect=true",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png",
    type: "Connect"
  },
  {
    title: "Portfolio Edition",
    description: "Streamlined portfolio layout focusing on work and personal brand visualization.",
    url: "https://digiucard.info/digiucard?primarychecksum=00007f5b1e73",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769005067-image.png",
    type: "Portfolio"
  },
  {
    title: "Creator Pro",
    description: "Bespoke creator identity with modular content hubs for cross-platform presence.",
    url: "https://digiucard.info/digiucard?primarychecksum=0000210c161d",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png",
    type: "Creator"
  },
  {
    title: "Business Elite",
    description: "Corporate-grade digital business card with seamless CRM integration paths.",
    url: "https://digiucard.com/CPetDGU",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png",
    type: "Business"
  },
  {
    title: "Minimal Identity",
    description: "Clean, essential digital presence focusing strictly on core identity and contact.",
    url: "https://digiucard.info/digiucard?primarychecksum=00001b9fab72&digiu_pay=false&digiu_connect=false",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768001227-image.png",
    type: "Minimal"
  }
];

export async function seed() {
  const existingArticles = await db.select().from(articles);
  if (existingArticles.length === 0) {
    for (const article of initialArticles) {
      await db.insert(articles).values({
        slug: article.slug,
        title: article.title,
        publishDate: article.publishDate,
        image: article.image,
        url: article.url || null,
      });
    }
    console.log("Database seeded with articles");
  }

  const existingCards = await db.select().from(showcasedCards);
  if (existingCards.length === 0) {
    for (const card of initialCards) {
      await db.insert(showcasedCards).values({
        title: card.title,
        description: card.description,
        url: card.url,
        image: card.image,
        type: card.type,
      });
    }
    console.log("Database seeded with showcased cards");
  }
}
