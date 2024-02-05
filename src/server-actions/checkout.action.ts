"use server";

import { Order } from "@/@models";
import { CartServiceFactory } from "@/services/cart.service";
import { OrderServiceFactory } from "@/services/order.service";
import { redirect } from "next/navigation";

export async function checkoutAction(formData: FormData) {
  const orderService = OrderServiceFactory.create();
  const cartService = CartServiceFactory.create();
  const cart = cartService.getCart();
  let order: Order;

  try {
    order = await orderService.createOrder({
      card_hash: formData.get("card_hash") as string,
      items: cart.items.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    });

    cartService.clearCart();
  } catch (error) {
    console.error(error);

    return {
      error: { message: "O pagamento não foi aprovado. Tente novamente." },
    };
  }

  redirect(`/checkout/${order.id}/success`);
}
