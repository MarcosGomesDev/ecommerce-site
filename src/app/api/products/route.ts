import { ProductService } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const productService = new ProductService();

  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get("search") as string;
  const categoryId = searchParams.get("categoryId") as string;

  const products = await productService.getProducts({ search, categoryId });

  return NextResponse.json(products);
}
