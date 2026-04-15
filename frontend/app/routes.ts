import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/default.tsx", 
    [route("/", "routes/index.tsx"),
     route("vendors", "routes/vendor.tsx"),
     route("customers", "routes/customer.tsx")])
] satisfies RouteConfig;