/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Providers from "layouts/providers";
// @mui icons
import Icon from "@mui/material/Icon";
import Reports from "layouts/reports";
import Clients from "layouts/clients";
import Shops from "layouts/shops";
import SignIn from "layouts/authentication/sign-in";
import Provider from "layouts/providers/Provider";
import Order from "layouts/orders/Order";
import Client from "layouts/clients/Client";
import Orders from "layouts/orders";
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    context: "private",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Providers",
    context: "private",
    key: "providers",
    icon: <Icon fontSize="small">providers</Icon>,
    route: "/providers",
    component: <Providers />,
  },
  {
    type: "collapse",
    name: "Clients",
    context: "private",
    key: "clients",
    icon: <Icon fontSize="small">clients</Icon>,
    route: "/clients",
    component: <Clients />,
  },
  {
    type: "collapse",
    name: "Orders",
    context: "private",
    key: "orders",
    icon: <Icon fontSize="small">orders</Icon>,
    route: "/orders",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Reports",
    context: "private",
    key: "reports",
    icon: <Icon fontSize="small">reports</Icon>,
    route: "/reports",
    component: <Reports />,
  },
  {
    type: "collapse",
    name: "Billing",
    context: "private",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    context: "private",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    context: "private",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Shops",
    context: "private",
    key: "shops",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/shops",
    component: <Shops />,
  },
  {
    context: "private",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    context: "private",
    name: "Provider",
    key: "provider",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/providers/:id",
    component: <Provider />,
  },
  {
    context: "private",
    name: "Order",
    key: "order",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/orders/:id",
    component: <Order />,
  },
  {
    context: "private",
    name: "Provider",
    key: "provider",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/clients/:id",
    component: <Client />,
  },
  // {
  //   type: "collapse",
  //   context: "public",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
