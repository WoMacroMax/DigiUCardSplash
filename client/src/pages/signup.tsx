import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function SignUp() {
  const pricingFeatures = [
    { name: "Cost", setup: "$150 one-time", credits: "$150 per credit" },
    { name: "What You Get", setup: "Setup of initial card, digital branding, basic SEO", credits: "Additional cards & multi-profile management" },
    { name: "Commitment", setup: "One-time payment", credits: "Flexible / Pay-as-needed" },
    { name: "Ideal For", setup: "Individual professionals", credits: "Teams & scaling enterprises" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Flexible Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Choose the option that fits your growth goals best. No long-term contracts, simple pricing.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">Feature</th>
                <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">Setup</th>
                <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">Credits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pricingFeatures.map((feature, i) => (
                <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                  <td className="p-6 font-semibold text-slate-900">{feature.name}</td>
                  <td className="p-6 text-slate-600">{feature.setup}</td>
                  <td className="p-6 text-slate-600">{feature.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pay-as-you-go Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center mb-12 shadow-sm"
        >
          <h2 className="text-2xl font-display font-bold text-emerald-900 mb-2">Pay-as-you-go</h2>
          <p className="text-emerald-700">After setup, pay only for delivered results.</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="relative flex flex-col w-full border-amber-200 shadow-lg shadow-amber-500/5 hover:border-amber-400 transition-all rounded-[2rem]">
              <div className="absolute top-0 left-0 w-full h-2 bg-amber-400 rounded-t-[2rem]" />
              <CardHeader className="pt-10 pb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 text-amber-600">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-slate-900">Free Trial</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">$0</span>
                  <span className="text-slate-500 ml-2">Setup</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Setup is completely FREE. Pay only 20% of your SRP per qualified lead we deliver. Zero risk, pure performance.
                </p>
                <button className="text-blue-600 font-semibold hover:underline flex items-center">
                  View More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </CardContent>
              <CardFooter className="pb-10">
                <Button className="w-full bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 h-14 rounded-2xl text-lg font-semibold shadow-none">
                  Sign Up Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex"
          >
            <Card className="flex flex-col w-full border-slate-200 shadow-sm hover:border-blue-200 transition-all rounded-[2rem]">
              <CardHeader className="pt-10 pb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-slate-900">Setup</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">$150</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Setup of initial digital identity, lead capture modules, SEO, and activity calendar to boost your presence.
                </p>
                <button className="text-blue-600 font-semibold hover:underline flex items-center">
                  View More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </CardContent>
              <CardFooter className="pb-10">
                <Button className="w-full bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200 h-14 rounded-2xl text-lg font-semibold shadow-none">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Add Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex"
          >
            <Card className="relative flex flex-col w-full border-blue-500 shadow-xl shadow-blue-500/10 rounded-[2rem]">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-500 rounded-t-[2rem]" />
              <CardHeader className="pt-10 pb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-slate-900">Add Credits</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-slate-900">$150</span>
                  <span className="text-slate-500 ml-2">/ credit</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Credits are used for additional campaigns and response volume (prospect calls, inquiries, emails).
                </p>
                <button className="text-blue-600 font-semibold hover:underline flex items-center">
                  View More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </CardContent>
              <CardFooter className="pb-10">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-600/20">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/">
            <a className="text-slate-400 hover:text-slate-600 font-medium transition-colors">
              ← Back to main page
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
