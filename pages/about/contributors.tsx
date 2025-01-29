import React from "react";

export type Contributor = {
  name: string;
  imgSrc: string;
  role: string;
  contributions: React.ReactNode;
  links: ContributorLinks;
};

export type ContributorLinks = {
  GitHub?: string;
  LinkedIn?: string;
  personalSite?: string;
};

export const contributors: Contributor[] = [
  {
    name: "Ryan Roche",
    imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQHLe3XucCFiCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726627572884?e=1743638400&v=beta&t=DcFDdK15JsGEWBc37XaLyO26znsDOqYgzdtvY-iJuXQ",
    role: "Lead Developer",
    contributions: (
      <ul className={"list-disc list-inside"}>
        <li>Developed the entirety of the GopherMaps iOS app</li>
        <li>
          Developed the entirety of the Backend logic such as route planning and
          reachability calculation
        </li>
        <li>
          Built out the graph database representation of the Gopher Way network
          and its buildings used by the app and backend
        </li>
        <li>Developed the app&#39;s CI/CD pipelines</li>
        <li>
          Organized the database of every building connection within the Gopher
          Way and the automated system for assigning them to volunteer
          instruction-writers, then converting and add the submitted
          instructions to the app&#39;s CDN
        </li>
        <li>
          Directed the publicity campaign for the app&#39;s launch, and designed
          marketing materials such as the GopherMaps logo wordmark and icon
        </li>
        <li>Developed the promotional website you&#39;re viewing right now!</li>
      </ul>
    ),
    // "Developed the Backend (route planning, building metadata system, graph database, etc.), developed the entire iOS app, and directed the publicity campaign. Built internal system for writing and organizing route instructions. Configured cloud infrastructure for hosted API server.",
    links: {
      GitHub: "https://github.com/ryan-roche",
      LinkedIn: "www.linkedin.com/in/ryan-b-roche",
    },
  },
];
