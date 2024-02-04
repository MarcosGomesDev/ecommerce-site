"use client";

import { Category } from "@/@models";
import { searchProducts } from "@/utils";
import { FormControl, MenuItem, Select } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter, useSearchParams } from "next/navigation";

export function SelectCategory({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        value={searchParams.get("categoryId") || "0"}
        onChange={(event) => {
          const search = searchParams.get("search");
          const categoryId = event.target.value as string;
          searchProducts(router, search, categoryId);
        }}
      >
        <MenuItem value="0">Todas as categorias</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
