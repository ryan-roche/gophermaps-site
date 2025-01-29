import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image } from "@heroui/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pb-8">
        <div className="inline-block max-w-xl text-center justify-center">
          <img
            alt={"GopherMaps word mark"}
            src="/wordmark-white.svg"
            width={500}
          />
          <div className={subtitle({ class: "mt-4" })}>
            An interactive map for the Gopher Way
          </div>
        </div>
        <Image className={"object-fit max-h-1/2 w-auto"} src={"/mockups/multi.png"} />
      </section>
    </DefaultLayout>
  );
}
