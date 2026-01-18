import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";

const documents = [
  {
    id: "doc-1",
    title: "Rod Resume Download",
    description: "Official professional resume and career portfolio for Rod Page.",
    url: "https://digiucard.com/RodResDL",
    type: "Resume / CV",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768768860091-image.png"
  },
  {
    id: "doc-2",
    title: "Chinyere Okunji CV",
    description: "Curated professional curriculum vitae with comprehensive background details.",
    url: "https://digiucard.com/document-download?src=https%3A%2F%2Fdocs.google.com%2Fviewer%3Furl%3Dhttps%253A%252F%252Fxrwnptogkhxeyamjcxhd.supabase.co%252Fstorage%252Fv1%252Fobject%252Fpublic%252Fattachments%252F1766503421946-ChinyereOkunji_CV_23Dec2025.docx%26embedded%3Dtrue&download=https%3A%2F%2Fxrwnptogkhxeyamjcxhd.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fattachments%2F1766503421946-ChinyereOkunji_CV_23Dec2025.docx",
    type: "Contract / CV",
    image: "https://xrwnptogkhxeyamjcxhd.supabase.co/storage/v1/object/public/attachments/1768769128792-image.png"
  }
];

export function DocumentsSection() {
  return (
    <section id="documents" className="px-8 py-16 md:py-24 max-w-[1400px] mx-auto border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-blue-600 mb-4 font-semibold tracking-widest uppercase text-xs">
            <ShieldCheck size={16} />
            <span>Secure Access</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-slate-900">Documents & Contracts</h2>
          <p className="text-slate-500 text-lg">
            Direct access to official documentation, resumes, and legal agreements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img 
                src={doc.image} 
                alt={doc.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} className="text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{doc.type}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {doc.description}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full text-xs hover:bg-blue-600 transition-all shadow-lg"
                >
                  <Download size={14} /> Download
                </a>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-400 hover:text-blue-600"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
