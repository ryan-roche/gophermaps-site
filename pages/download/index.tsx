import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { appCodes } from "./appCodes";
import { Link } from "@heroui/link";

export default function DesktopDownloadPage() {
  return (
    <DefaultLayout>
      {/* Page Title */}
      <section className="flex flex-col items-center justify-center gap-4 pb-4">
        <div className="inline-block md:max-w-none text-center justify-center">
          <span className={`${title()}`}>Download&nbsp;</span>
          <span className={`${title({ color: "yellow" })}`}>GopherMaps</span>
        </div>
      </section>

      {/* Upper subtitle */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={`${subtitle()} inline-block text-center`}>
          Scan the QR code for your respective platform using your mobile device
          <br /> (Android version still in development)
        </span>
      </section>

      {/* Platform QR Codes */}
      <section className={"flex flex-row items-center justify-center gap-16"}>
        {appCodes.map((item) => (
          <Card
            key={item.title}
            isBlurred
            className={"border"}
            isDisabled={!item.isAvailable}
            isPressable={item.isAvailable}
            shadow={"sm"}
            onPress={() => {
              window.location.replace(item.link);
            }}
          >
            <CardBody>
              <div>
                <Image
                  className={!item.isAvailable ? "blur z-0" : "z-0"}
                  src={item.imgSrc}
                  width={300}
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </section>

      {/* Lower subtitle */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={`${subtitle()} inline-block text-center`}>
          Alternatively, visit this page on your device to be redirected
          automatically
        </span>
      </section>
    </DefaultLayout>
  );
}
