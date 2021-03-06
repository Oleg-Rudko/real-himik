import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="1920">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO 1
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton aria-label="cart" size="large">
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -10,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default Header;
