"use server"

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

export const createOrder = async (cartProducts: CartProduct[], userId: string) => {

    return await prismaClient.order.create({
        data: {
            userId,
            status: 'WAYTING_FOR_PAYMENT',
            orderProducts: {
                createMany: {
                    data: cartProducts.map((product) => ({
                        basePrice: product.basePrice,
                        discountPercentage: product.discountPercentage,
                        productId: product.id,
                        quantity: product.quantity
                    })),
                },
            },
        },
    });
};