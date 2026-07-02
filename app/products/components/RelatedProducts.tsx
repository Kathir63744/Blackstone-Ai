"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "../types";
import { products } from "../data/products";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({
  product,
}: RelatedProductsProps) {
  const theme = product.theme;
  const related = products.filter((item) =>
    product.relatedProducts.includes(item.slug)
  );

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className={`${theme.accent} font-semibold uppercase tracking-widest text-sm`}>
              MORE PRODUCTS
            </span>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Explore Related Solutions
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="group"
            >
              <div className={`rounded-3xl bg-white border ${theme.borderLight} p-8 h-full hover:border-sky-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                <span className={`inline-flex rounded-full ${theme.bg} ${theme.badgeText} text-xs font-semibold px-3 py-2`}>
                  {item.badge}
                </span>
                <h3 className={`mt-6 text-xl font-bold ${theme.textPrimary} group-hover:${theme.accent} transition`}>
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm">
                  {item.subtitle}
                </p>
                <div className={`mt-8 flex items-center gap-2 ${theme.accent} font-semibold`}>
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}