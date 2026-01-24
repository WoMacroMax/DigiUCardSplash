import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { useCart } from "@/lib/cart-context";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Your Cart
          </motion.h1>
          <Link href="/signup">
            <a className="flex items-center text-slate-500 hover:text-slate-700 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pricing
            </a>
          </Link>
        </div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-slate-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-slate-500 mb-8">
              Add some items from our pricing page to get started.
            </p>
            <Link href="/signup">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-8 rounded-2xl text-lg font-semibold">
                View Pricing
              </Button>
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-slate-200 bg-white rounded-2xl overflow-hidden" data-testid={`cart-item-${item.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-bold text-slate-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-slate-500">{item.priceLabel}</p>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                              data-testid={`decrease-${item.id}`}
                            >
                              <Minus className="w-4 h-4 text-slate-600" />
                            </button>
                            <span className="w-8 text-center font-semibold text-slate-900" data-testid={`quantity-${item.id}`}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                              data-testid={`increase-${item.id}`}
                            >
                              <Plus className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>

                          <div className="text-right min-w-[100px]">
                            <p className="text-xl font-bold text-slate-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-10 h-10 rounded-lg border border-red-200 flex items-center justify-center hover:bg-red-50 transition-colors text-red-500"
                            data-testid={`remove-${item.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-blue-200 bg-blue-50/50 rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-display font-bold text-slate-900">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-slate-600">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-200 pt-4 flex justify-between text-xl font-bold text-slate-900">
                    <span>Total</span>
                    <span data-testid="cart-total">${totalPrice.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1 h-14 rounded-2xl text-lg font-semibold border-slate-300 hover:bg-slate-100"
                    data-testid="clear-cart"
                  >
                    Clear Cart
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700 h-14 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-600/20"
                    data-testid="checkout-button"
                  >
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </>
        )}

        <div className="mt-12 text-center">
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
