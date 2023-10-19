"use client"

import { useState } from "react";

import { ProductsWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";

interface ProductInfoProps {
    product: Pick<
        ProductsWithTotalPrice,
        "name" |
        "basePrice" |
        "description" |
        "discountPercentage" |
        "totalPrice"
    >
}

const ProductInfo = ({product: {name, basePrice, totalPrice, discountPercentage, description}}: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1)
    }

    return ( 
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>

            <div className="flex items-center gap-1">
                <h1 className="text-xl font-bold gap-2">R$ {Number(totalPrice).toFixed(2)}</h1>
                {discountPercentage > 0 && (
                   <DiscountBadge>
                    {discountPercentage}
                   </DiscountBadge>
                )}
            </div>

            {discountPercentage > 0 && (
                <p className="text-sm line-through opacity-75">R$ {Number(basePrice).toFixed(2)}</p>
            )}

            <div className="mt-4 flex items-center gap-2">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>

                <span>{quantity}</span>

                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-justify text-sm opacity-60">{description}</p>
            </div>

            <Button className="mt-8 uppercase font-bold">
                Adicionar ao carrinho
            </Button>

            <div className="mt-5 rounded-lg bg-accent flex items-center px-5 py-2 justify-between">
                <div className="flex items-cente gap-2">
                    <TruckIcon/>

                    <div className="flex flex-col">
                        <p className="text-xs">
                            Entrega via <span className="font-bold">FSPacket®</span>
                        </p>

                        <p className="text-xs text-[#8162FF]">
                            Envio para <span className="font-bold">todo o Brasil</span>
                        </p>
                    </div>
                </div>

                <p className="text-xs font-bold">Frete grátis</p>
            </div>
        </div>
     );
}
 
export default ProductInfo;