import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SearchBar } from "../SearchBar";
import Link from "next/link";
import Image from "next/image";
import { SelectCategory } from "../SelectCategory";
import { UserMenu } from "../UserMenu";
import { CategoryService } from "@/services";

export async function Navbar() {
  const categories = await new CategoryService().getCategories();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <Image
          src="/logo.png"
          alt="logo"
          width={147.66}
          height={63.66}
          priority
        />
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", ml: 1 }}
        >
          <SearchBar />
        </Box>
        <IconButton LinkComponent={Link} size="large" href="/my-cart">
          <ShoppingCartIcon />
        </IconButton>
        <UserMenu user={{}} />
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          alignContent: "center",
          p: 1,
        }}
      >
        <SelectCategory categories={categories} />
        <Box
          component={Link}
          href={"/produtos"}
          sx={{
            textDecoration: "none",
            display: "flex",
            ml: 3,
          }}
        >
          <HomeIcon sx={{ color: "text.primary" }} />
          <Typography
            color={"text.primary"}
            sx={{ fontWeight: 500, display: "flex" }}
          >
            Home
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
