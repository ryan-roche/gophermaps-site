import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-xl text-center items-center justify-center -mt-6">
          <img
            alt={"GopherMaps word mark"}
            src="/wordmark-white.svg"
            width={500}
          />
          <div className={subtitle({ class: "mt-1" })}>
            An interactive map for the Gopher Way
          </div>
        </div>
        <Image className={""} src={"/mockups/multi.png"} />
        <Button as={Link} href={"/download"} className={"md:hidden mt-8"} color={"primary"}>
          Download
        </Button>
      </section>
    </DefaultLayout>
  );
}
