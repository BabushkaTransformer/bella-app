import Main from "./pages/Main";
import Admin from "./pages/Admin";
import ProductPage from "./pages/ProductPage/ProductPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

const MAIN_ROUTE = "/";
const ADMIN_ROUTE = "/admin";
const PRODUCT_PAGE_ROUTE = "/productPage";
const COLLECTION_PAGE_ROUTE = "/collectionPage";

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
	{
		path: PRODUCT_PAGE_ROUTE + "/:id",
		Component: ProductPage,
	},
	{
		path: COLLECTION_PAGE_ROUTE,
		Component: CollectionPage,
	},
];
