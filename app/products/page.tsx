import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { products } from "../products/data/products";

export async function generateStaticParams() {
  return products.map((product: { slug: any; }) => ({
    slug: [product.slug],
  }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // Get the slug from the array
  const slug = params?.slug?.[0] || "";
  
  // If no slug, show error
  if (!slug) {
    return (
      <div className="min-h-screen pt-[68px] p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">No Product Specified</h1>
          <a href="/products" className="mt-6 inline-block bg-white text-white px-6 py-3 rounded-lg">
            View All Products
          </a>
        </div>
      </div>
    );
  }

  // Find the product
  const product = products.find((p: { slug: string; }) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen pt-[68px] p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">Product Not Found</h1>
          <p className="text-gray-600 mt-4">Slug: {slug}</p>
          <a href="/products" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg">
            View All Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[68px] p-8 bg-gray-50">
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-sm font-semibold text-blue-600 mb-2">{product.badge}</div>
        <h1 className="text-4xl font-bold text-slate-900">{product.title}</h1>
        <p className="text-xl text-slate-600 mt-2">{product.subtitle}</p>
        <p className="text-gray-700 mt-6">{product.description}</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900">Key Features</h2>
          <ul className="mt-4 space-y-2">
            {product.heroFeatures.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a href="/products" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          ← Back to Products
        </a>
      </div>
    </div>
  );
}