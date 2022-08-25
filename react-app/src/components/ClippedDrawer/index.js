import React from "react";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

//Import Pages
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Orders from "../../pages/Orders";
import OrderDetails from "../../pages/OrderDetails";
import NotFound from "../../pages/NotFound";

const drawerWidth = 200;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Fancy Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem
              component={NavLink}
              exact
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              activeClassName="Mui-selected"
              to="/"
            >
              <ListItemText primary="Home" />
            </ListItem>{" "}
            <ListItem
              component={NavLink}
              exact
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              activeClassName="Mui-selected"
              to="/products"
            >
              <ListItemText primary="Products" />
            </ListItem>{" "}
            <ListItem
              component={NavLink}
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
              activeClassName="Mui-selected"
              to="/orders"
            >
              <ListItemText primary="Orders" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/orders/:id">
              <OrderDetails />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}
