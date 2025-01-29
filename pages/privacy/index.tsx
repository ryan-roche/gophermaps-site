import { Card, CardBody } from "@heroui/card";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Privacy Policy</h1>
        </div>
        <p className={"text-center"}>
          We respect your privacy and are committed to protecting it.
          <br />
          This Privacy Policy outlines how we handle information in connection
          with the use of our app.
        </p>
        <Card>
          <CardBody>
            <h2 className={subtitle()}>1. Information We Collect</h2>
            We do not collect or store any personal information. We do not ask
            for or track your name, email address, location, or any other
            personally identifiable information (PII). The only data we collect
            are general usage statistics, such as the number of API requests and
            the time of day these requests are made, to help us improve our
            app&#39;s performance.
            <h2 className={subtitle()}>2. How We Collect Usage Data</h2>
            Our backend host, Amazon Web Services, provides basic analytics
            regarding the amount of API requests our app&#39;s servers receive.
            This data is entirely anonymous, and is limited to basic information
            like the amount of requests made to the API and the time of day
            those requests were received.
            <h2 className={subtitle()}>3. How We Use Your Information</h2>
            We use the anonymized data collected to improve the performance and
            functionality of the app, understand usage trends (e.g., which times
            of day the app is used most). We do not share, sell, or disclose
            this data to any third parties except as required by law.
            <h2 className={subtitle()}>4. Cookies and Tracking Technologies</h2>
            Our app does not use cookies, tracking pixels, or any similar
            technology to collect information.
            <h2 className={subtitle()}>5. Third-Party Services</h2>
            As mentioned, we use Amazon Web Services to host our backend, and it
            provides basic anonymized usage statistics. Amazon does not have
            access to any personal information (since we don&#39;t collect any),
            and their privacy policies can be viewed on their website.
            <h2 className={subtitle()}>6. Data Security</h2>
            Since we do not collect any personal data, there are no personal
            data security concerns associated with your use of our app. The
            anonymized usage data we collect through AWS is securely stored and
            protected by Amazon’s data security protocols.
            <h2 className={subtitle()}>7. Your Data Rights</h2>
            As we do not collect personal data, there is no personal data for
            you to request, update, or delete. If this changes in the future, we
            will update this privacy policy accordingly.
            <h2 className={subtitle()}>8. Changes to This Privacy Policy</h2>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &#34;Last updated&#34; date.
            <h2 className={subtitle()}>9. Contact Us</h2>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at coding@umn.edu
          </CardBody>
        </Card>
        <h3>Last Updated Jan 22, 2025</h3>
      </section>
    </DefaultLayout>
  );
}
