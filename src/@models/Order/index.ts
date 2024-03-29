import { Product } from "../Product";

export enum OrderStatus {
  PENDING = "pending",
  PAID = "paid",
  FAILED = "failed",
}

export type Order = {
  id: string;
  total: number;
  status: OrderStatus;
  items: OrderItem[];
  created_at: string;
};

export type OrderItem = {
  id: number;
  quantity: number;
  price: number;
  product: Product;
};
