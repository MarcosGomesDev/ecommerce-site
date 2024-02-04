import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function searchProducts(
  router: AppRouterInstance,
  search: string | undefined | null,
  categoryId: string | undefined | null
) {
  let path = `/produtos`;

  const urlSearchParams = new URLSearchParams();

  if (search) {
    urlSearchParams.append("search", search);
  }

  if (categoryId && categoryId !== "0") {
    urlSearchParams.append("categoryId", categoryId);
  }

  if (urlSearchParams.toString()) {
    path += `?${urlSearchParams.toString()}`;
  }

  router.push(path);
}
