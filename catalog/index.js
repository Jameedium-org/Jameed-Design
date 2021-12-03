import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import "../assets/css/style.css";

const pages = [
  {
    path: "/",
    title: "Home الرئيسة",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },
  {
    title: "The Logo الشعار",
    pages: [
      {
        path: "/logo/brandmark",
        title: "Brandmark العلامة",
        content: pageLoader(() => import("./pages/logo/brandmark.md"))
      },
      {
        path: "/logo/typography",
        title: "Logo Typography الخط",
        content: pageLoader(() => import("./pages/logo/typography.md"))
      },
      {
        path: "/logo/responsive-design",
        title: "Responsive design التصميم المتجاوب",
        content: pageLoader(() => import("./pages/logo/responsive.md"))
      }
    ]
  },
  {
    title: "Colors الألوان",
    pages: [
      {
        path: "/colors/main",
        title: "Main Colors الألوان الرئيسة",
        content: pageLoader(() => import("./pages/colors/colors.md"))
      },
      {
        path: "/colors/shades",
        title: "Color Shades درجات الألوان",
        content: pageLoader(() => import("./pages/colors/shades.md"))
      }
    ]
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
  }
];

const theme = {
  // Colors
  background: "#000000",
  textColor: "#000000",
  codeColor: "#000000",
  linkColor: "#000000",
  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#000000",
  // Used in PageHeader
  pageHeadingBackground: "#000000",
  pageHeadingTextColor: "#fff",
  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,
  // Used for navigation bar
  navBarBackground: "#F2F2F2",
  navBarTextColor: "#003B5C",
  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#003B5C",

  sidebarColor: "red",
  sidebarColorText: "#003B5C",
  sidebarColorTextActive: "#FF5555",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#003B5C",
  // Used in the html, react, and image specimens.
  bgLight: "#F2F2F2",
  bgDark: "#333333",
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
  checkerboardPatternLight:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=",
  checkerboardPatternDark:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==",
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
            //theme={theme}
            />,
  document.getElementById("catalog")
);
