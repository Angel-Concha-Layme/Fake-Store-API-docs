import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";


export default defineConfig({
  integrations: [
    starlight({
      title: "Fake Store API",
      favicon: "/favicon.png",
      head: [

        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500&display=swap",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-TS6JSW87G9",
            async: true,
          },
        },
        {
          tag: "script",
          content: `window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-TS6JSW87G9');`,
        },
      ],
      logo: {
        src: "./src/assets/logo.png",
      },
      social: {
        github: "https://github.com/Angel-Concha-Layme/Fake-Store-API",
      },
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
      },
      sidebar: [
        {
          label: "Características",
          items: [
            { label: "Introducción", link: "en/about/introduction/" }
            // { label: "Open Source", link: "en/about/open-source/" },
          ],
        },
        {
          label: "API REST",
          items: [
            { label: "Productos", link: "en/rest/products/" },
            { label: "Filtrar productos", link: "en/rest/products-filter/" },
            { label: "Categorías", link: "en/rest/categories/" },
            { label: "Usuarios", link: "en/rest/users/" },
            { label: "Autenticación con JWT", link: "en/rest/auth-jwt/" },
            { label: "Pedidos", link: "en/rest/order/" },
            { label: "Detalles del pedido", link: "en/rest/order-details/" },
            //{ label: "Swagger Docs", link: "en/rest/swagger/" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Postman", link: "en/resources/postman/" }
          ],
        },
      ],
      customCss: [
        "@fontsource/ibm-plex-serif/400.css",
        "@fontsource/ibm-plex-serif/600.css",
        "./src/styles/custom.css",
      ],
    }),
  ],
});
