export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
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
      href: "/privacy-policy",
    },
  ],
  links: {
    appStore: "https://apps.apple.com/us/app/gophermaps/id6670770853",
    socialCoding: "https://socialcoding.net",
  },
};
