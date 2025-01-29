import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* Page title */}
      <section className="flex flex-col items-center justify-center gap-4 pb-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>About&nbsp;</span>
          <span className={title({ color: "yellow" })}>GopherMaps</span>
        </div>
      </section>

      {/* Cards, side-by size on desktop, vertical on mobile */}
      <section className="flex flex-col sm:flex-row text-center justify-evenly gap-4 py-2">
        {/* "The developer" card */}
        <div className={"flex-grow flex flex-col sm:w-1/2"}>
          <h2 className={`block mb-2 ${title({ size: "sm" })}`}>The Developers</h2>
          <Card className={""}>
            <CardBody>
              whar
            </CardBody>
          </Card>
        </div>
        {/* "The Project" card */}
        <div className={"flex-grow flex flex-col sm:w-1/2"}>
          <h2 className={`block mb-2 ${title({ size: "sm" })}`}>The Project</h2>
          <Card className={""}>
            <CardBody>
              whar
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Site stack icons */}
      <section>
      {/* TODO add web stack icons for flexing purposes lol */}
      </section>
    </DefaultLayout>
  );
}
