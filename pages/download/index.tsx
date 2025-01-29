import DefaultLayout from "@/layouts/default";

// This page shouldn't ever be shown. middleware.tsx should "intercept" the
// request and automatically give the platform-specific download subpage AS
// the download page

export default function DownloadPage() {
  return (
    <DefaultLayout>
      <p>dummy</p>
    </DefaultLayout>
  );
}
