import { notFound } from "next/navigation";
import { products } from "../data/products";
import ProductHero from "../components/ProductHero";
import ProductKeyPoints from "../components/ProductKeyPoints";
import RelatedProducts from "../components/RelatedProducts";
import dynamic from "next/dynamic";
import Footer from "@/app/components/Footer";

// ✅ Remove ssr: false
const ClientNavbar = dynamic(
  () => import("@/app/components/Navbar")
);

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="mt-14">
      <ClientNavbar />
      <ProductHero product={product} />
      <ProductKeyPoints product={product} />
      <RelatedProducts product={product} />
      <Footer/>
    </main>
  );
}