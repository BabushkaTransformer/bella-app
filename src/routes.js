import Main from "./pages/MainPage/Main";
import ProductPage from "./pages/ProductPage/ProductPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import SingleNewsPage from "./pages/SingleNewsPage/SingleNewsPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import SingleOrderPage from "./pages/SingleOrderPage/SingleOrderPage";

export const MAIN_ROUTE = "/";
export const PRODUCT_PAGE_ROUTE = "/product";
export const COLLECTION_PAGE_ROUTE = "/collection";
export const INFO_PAGE_ROUTE = "/info";
export const NEWS_PAGE_ROUTE = "/news";
export const SINGLE_NEWS_ROUTE = "/singleNews";
export const CATEGORY_PAGE_ROUTE = "/category";
export const CART_PAGE_ROUTE = "/cart";
export const ABOUT_PAGE_ROUTE = "/aboutUs";
export const ORDER_PAGE_ROUTE = "/orders";
export const SINGLE_ORDER_ROUTE = "/SingleOrder";

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: PRODUCT_PAGE_ROUTE + "/:id",
		Component: ProductPage,
	},
	{
		path: COLLECTION_PAGE_ROUTE,
		Component: CollectionPage,
	},
	{
		path: INFO_PAGE_ROUTE,
		Component: InfoPage,
	},
	{
		path: NEWS_PAGE_ROUTE,
		Component: NewsPage,
	},
	{
		path: SINGLE_NEWS_ROUTE + "/:id",
		Component: SingleNewsPage,
	},
	{
		path: CATEGORY_PAGE_ROUTE,
		Component: CategoryPage,
	},
	{
		path: CART_PAGE_ROUTE,
		Component: CartPage,
	},
	{
		path: ABOUT_PAGE_ROUTE,
		Component: AboutUs,
	},
	{
		path: ORDER_PAGE_ROUTE,
		Component: OrdersPage,
	},
	{
		path: SINGLE_ORDER_ROUTE + "/:id",
		Component: SingleOrderPage,
	},
];
