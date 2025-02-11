import DefaultLayout from "@/layouts/default";

export default function StatusPage() {
  return (
    <DefaultLayout>
      <iframe
        className="w-full h-full"
        src="https://status.socialcoding.net/status/gophermaps"
        title="Status"
      />
    </DefaultLayout>
  )
}