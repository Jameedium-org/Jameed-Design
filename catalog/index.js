import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import "../assets/css/style.css";

const pages = [
  {
    path: "/",
    title: "Home",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },
  {
    title: "The Logo",
    pages: [
      {
        path: "/logo/brandmark",
        title: "Brandmark",
        content: pageLoader(() => import("./pages/logo/brandmark.md"))
      },
      {
        path: "/logo/typography",
        title: "Logo Typography",
        content: pageLoader(() => import("./pages/logo/typography.md"))
      },
      {
        path: "/logo/responsive-design",
        title: "Responsive design",
        content: pageLoader(() => import("./pages/logo/responsive.md"))
      },
      {
        path: "/logo/usage",
        title: "Logo Usage",
        content: pageLoader(() => import("./pages/logo/usage.md"))
      }
    ]
  },
  {
    title: "Colors",
    pages: [
      {
        path: "/colors/main",
        title: "Main Colors",
        content: pageLoader(() => import("./pages/colors/colors.md"))
      },
      {
        path: "/colors/shades",
        title: "Color Shades",
        content: pageLoader(() => import("./pages/colors/shades.md"))
      },
      {
        path: "/colors/greyscale",
        title: "Grey Scale",
        content: pageLoader(() => import("./pages/colors/greyscale.md"))
      }
    ]
  },
  {
    title: "Fonts",
    path: "/fonts",
    content: pageLoader(() => import("./pages/fonts/fonts.md"))
  },
  {
    title: "UI Components",
    pages: [
      {
        path: "/ui/buttons",
        title: "Buttons",
        content: pageLoader(() => import("./pages/ui/buttons.md"))
      },
      {
        path: "/ui/cards",
        title: "Cards",
        content: pageLoader(() => import("./pages/ui/cards.md"))
      }
    ]
  },
  {
    title: "Social Media",
    pages: [
      {
        path: "/socials/profile",
        title: "Profile",
        content: pageLoader(() => import("./pages/social/profile.md"))
      },
      {
        path: "/youtube/banner",
        title: "Youtube Banner",
        content: pageLoader(() => import("./pages/social/yt-banner.md"))
      }
    ]
  },
  {
    title: "Downloads",
    pages: [
      {
        path: "/downloads/logo",
        title: "Logo Files",
        content: pageLoader(() => import("./pages/downloads/logo.md"))
      }
    ]
  }
];

const theme = {
  // Colors
  background: "#ffffff",
  textColor: "#131315",
  codeColor: "#000",
  linkColor: "#0074CC",
  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#d3d3d5",
  // Used in PageHeader
  pageHeadingBackground: "#d3d3d5",
  pageHeadingTextColor: "#131315",
  pageHeadingHeight: 140,
  // Used for navigation bar
  navBarBackground: "#d3d3d5",
  navBarTextColor: "#212123",
  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#0074CC",

  sidebarColor: "#212123",
  sidebarColorText: "#ededef",
  sidebarColorTextActive: "#33A7FF",
  sidebarColorLine: "#ededef",
  sidebarColorHeading: "#fff",
  // Used in the html, react, and image specimens.
  bgLight: "#d3d3d5",
  bgDark: "#131315",
  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: "#FF5555" },
    punctuation: { color: "#535353" },
    script: { color: "#3F7397" },
    function: { color: "#FF5555" },
    keyword: { color: "#3F7397" },
    string: { color: "#00263E" }
  },
  // Patterns
  
  // Fonts
  fontFamily: "'Roboto', sans-serif",
  fontHeading: "'Roboto', sans-serif",
  fontMono: "'Roboto Mono', monospace",
  // Base font size in pixels.
  baseFontSize: 16,
  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2
};

ReactDOM.render(
  <Catalog  title="Jameedium Brand Guidelines" 
            responsiveSizes= {[
                {name: 'phone', width: 450, height: 900},
                {name: 'tablet', width: 1024, height: 768},
                {name: 'desktop', width: 1920, height: 1080},
            ]}
            pages={pages}
            theme={theme}
            useBrowserHistory = {true}
            />,
  document.getElementById("catalog")
);
