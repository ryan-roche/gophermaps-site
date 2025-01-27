export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GopherMaps",
  description: "An interactive map for the Gopher Way.",
  leftNavItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Download",
      href: "/download",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  rightNavItems: [
    {
      label: "Support",
      href: "/support",
    },
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
  ],
  links: {
    socialCoding: "https://socialcoding.net",
  },
};
