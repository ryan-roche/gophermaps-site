import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { contributors } from "@/components/contributors";
import {
  BookIcon,
  GithubIcon,
  LinkedInIcon,
  GlobeIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Page title */}
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-lg text-center justify-center pb-8">
          <span className={title({ size: "lg" })}>About&nbsp;</span>
          <span className={title({ color: "yellow", size: "lg" })}>GopherMaps</span>
        </div>
      </section>

      {/* Cards, side-by size on desktop, vertical on mobile */}
      <section className="flex flex-col sm:flex-row text-center justify-evenly gap-4">
        {/* "The Project" card */}
        <div className={"flex-grow flex flex-col sm:w-1/2"}>
          <h2 className={`block mb-6 ${title({ size: "md" })}`}>The Project</h2>
          <Card className={""}>
            <CardBody className={"gap-4"}>
              {/* TODO: Add Social Coding and USG logos */}
              <p>
                GopherMaps is a project made with support from Social Coding,
                student group at the University of Minnesota Twin Cities where
                students work together to create real projects with the skills
                learned in their coursework.
              </p>
              <p>
                Social Coding funds the backend services for GopherMaps, and
                handles the distribution costs of the GopherMaps app.
              </p>
              <p>
                GopherMaps has received additional support from the University
                of Minnesota&#39;s Undergraduate Student Government, who helped
                with writing instructions as well as advertising the app
                throughout campus.
              </p>
              <Divider />
              <p>
                Social Coding is a student group and is not directly affiliated
                with the University of Minnesota, only operating as a registered
                student organization as per the University of Minnesota&#39;s
                Student Unions and Activities (SUA) policies.
              </p>
              <div className={"flex flex-col gap-2"}>
                <Button
                  as={Link}
                  className={"bg-gradient-to-br from-orange-300 to-orange-700"}
                  href={"https://socialcoding.net"}
                  variant={"shadow"}
                >
                  {/* TODO add social coding logo to startContent */}
                  Visit Social Coding
                </Button>
                <Button
                  as={Link}
                  className={"bg-gray-500"}
                  href={"https://sua.umn.edu/student-group-policies"}
                  startContent={<BookIcon />}
                  variant={"shadow"}
                >
                  View SUA Policies
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        {/* "The team" card */}
        <div className={"flex-grow flex flex-col sm:w-1/2"}>
          <h2 className={`block mb-6 ${title({ size: "md" })}`}>The People</h2>
          {contributors.map((person) => (
            <Card key={person.name} className={""}>
              <CardBody className={"flex flex-col gap-4"}>
                <div className={"flex flex-row justify-center items-center gap-4"}>
                  {/* Profile Image */}
                  <Image
                    className={""}
                    isBlurred
                    width={"128"}
                    src={person.imgSrc}
                  />
                  <div>
                    {/* Name */}
                    <h3 className={`font-serif ${title({ size: "sm" })}`}>{person.name}</h3>
                    {/* Role */}
                    <h3 className={`font-serif ${subtitle({ className: "my-0" })}`}>
                      {person.role}
                    </h3>
                  </div>
                </div>
                <Divider />
                {/* Contributions */}
                {person.contributions}
                <Divider />
                {/* Links */}
                <div className={"flex flex-row justify-center gap-1.5"}>
                  {person.links?.GitHub && (
                    <Button isExternal isIconOnly aria-label={`GitHub link for ${person.name}`} as={Link} href={person.links.GitHub}>
                      <GithubIcon />
                    </Button>
                  )}
                  {person.links?.LinkedIn && (
                    <Button isExternal isIconOnly aria-label={`LinkedIn link for ${person.name}`} as={Link} href={person.links.LinkedIn}>
                      <LinkedInIcon fill={"white"} />
                    </Button>
                  )}
                  {person.links?.personalSite && (
                    <Button isExternal isIconOnly aria-label={`Personal site link for ${person.name}`} as={Link} href={person.links.personalSite}>
                      <GlobeIcon />
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Site stack icons */}
      <section>
        {/* TODO add web stack icons for flexing purposes lol */}
      </section>
    </DefaultLayout>
  );
}
