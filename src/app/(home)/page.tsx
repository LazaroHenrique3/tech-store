import Image from "next/image";

import Categories from "./components/categories";
import ProductList from "./components/product-list";

import { prismaClient } from "@/lib/prisma";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deal = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />

      <div className=" px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deal} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>
    </div>
  );
}
