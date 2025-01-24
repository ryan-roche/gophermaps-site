import { Divider } from "@heroui/divider";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";

import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* Page Title */}
      <section className="flex flex-col items-center justify-center gap-4 md:py-10">
        <div className="inline-block md:max-w-none text-center justify-center">
          <span className={title()}>Download&nbsp;</span>
          <span className={title({ color: "yellow" })}>GopherMaps</span>
        </div>
      </section>

      {/* Upper subtitle */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={`${subtitle()} inline-block text-center`}>
          Scan the QR code for your respective platform using your mobile device
        </span>
      </section>

      {/* Platform QR Codes */}
      <section className="flex items-center justify-center gap-4 py-8 md:py-10">
        <Image alt={"App Store QR code"} src={"/qr-appstore.svg"} width={300} />
        <Divider orientation="vertical" />
        <Image
          alt={"Google Play Store QR code"}
          src={"/qr-playstore-placeholder.svg"}
          width={300}
        />
      </section>

      {/* Lower subtitle */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={`${subtitle()} inline-block text-center`}>
          Alternatively, visit this page on your device to be redirected
          automatically.
        </span>
      </section>
    </DefaultLayout>
  );
}
