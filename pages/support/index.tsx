import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { GithubIcon, MailIcon } from "@/components/icons";
import { Link } from "@heroui/link";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2">
        {/* Page title */}
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Support</h1>
        </div>
        {/* Cards */}
        <div className={"flex flex-col items-center gap-8 py-16"}>
          {/* Social Coding info */}
          <Card className={"sm:w-1/2"}>
            <CardBody className={"space-y-3"}>
              <p>
                GopherMaps is maintained by Social Coding, a student group at
                the University of Minnesota. Please contact them with any
                questions, concerns, or bug reports.
              </p>
              <Button
                as={Link}
                color="primary"
                href={"mailto:coding@umn.edu"}
                variant="shadow"
                startContent={<MailIcon />}
              >
                Contact Social Coding
              </Button>
            </CardBody>
          </Card>
          {/* GitHub info */}
          <Card className={"sm:w-1/2"}>
            <CardBody className={"space-y-3"}>
              <p>
                Alternatively, if you are reporting a bug, you can create an
                issue on our GitHub.
              </p>
              <Button
                as={Link}
                className={"font-mono text-center items-center"}
                href={"https://github.com/ryan-roche/gophermaps-ios/issues/new?template=Blank+issue"}
                startContent={<GithubIcon />}
                variant="shadow"
              >
                ryan-roche/gophermaps-ios
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
