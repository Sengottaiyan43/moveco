import { AboutUs } from "../../features/about-us/containers/about-us-page";
import { Home } from "../../features/home/containers/home-page";

const BaseUrls = {
  Home: "/",
  AboutUs: "/about-us",
};

const UrlPages = {
  "/": { page: Home },
  [BaseUrls.AboutUs]: { page: AboutUs },
};

export { UrlPages, BaseUrls };
