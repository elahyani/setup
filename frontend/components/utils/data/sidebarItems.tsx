import { routes } from "../routes";

const BASE_ICON_URL = "https://appli.hsabati.com/assets/images/img_fac/";

export const icons = {
  DASHBOARD_ICON: BASE_ICON_URL + "dashboard.png",
  CRM_ICON: BASE_ICON_URL + "CRM.png",
  SALES_ICON: BASE_ICON_URL + "icons/sales.png",
  PURCHASE_ICON: BASE_ICON_URL + "icons/purchases.png",
  PRODUCTS_ICON: BASE_ICON_URL + "icons/product.png",
  PROJECTS_ICON: BASE_ICON_URL + "icons/projects.png",
  FINANCE_ICON: BASE_ICON_URL + "icons/finance.png",
  REPORTS_ICON: BASE_ICON_URL + "icons/reports.png",
};

export const sidebarItems = [
  {
    text: "Tableau De Bord",
    // icon: icons.DASHBOARD_ICON,
    icon: "https://appli.hsabati.com/assets/images/img_fac/dashboard.png",
    routerTo: routes.ADMIN,
  },
  {
    text: "CRM",
    icon: icons.CRM_ICON,
    routerTo: routes.CLIENTS,
  },
  // {
  //   text: "Ventes",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/sales.png)]"></i>
  //   ),
  //   routerTo: routes.SALES,
  // },
  // {
  //   text: "Achats",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/purchases.png)]"></i>
  //   ),
  //   routerTo: routes.SUPPLIER_INVOICES,
  // },
  // {
  //   text: "Produits",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/product.png)]"></i>
  //   ),
  //   routerTo: routes.PRODUCTS,
  // },
  // {
  //   text: "Projects",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/projects.png)]"></i>
  //   ),
  //   routerTo: routes.PROJECTS,
  // },
  // {
  //   text: "Finances",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/finance.png)]"></i>
  //   ),
  //   routerTo: routes.FINANCES,
  // },
  // {
  //   text: "Rapports",
  //   icon: (
  //     <i className="content-[url(https://appli.hsabati.com/assets/images/img_fac/icons/reports.png)]"></i>
  //   ),
  //   routerTo: routes.REPORTS,
  // },
];
