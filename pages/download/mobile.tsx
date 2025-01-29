import { useEffect, useState } from 'react';
import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { Spinner, SpinnerProps } from "@heroui/spinner";
import { appCodes } from "../../components/appCodes";

export default function MobileDownloadPage() {
  const [deviceType, setDeviceType] = useState("unknown");
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [spinnerMessage, setSpinnerMessage] = useState("Checking device type...");
  type SpinnerColors = "danger" | "warning" | "success" | "primary";
  const [spinnerType, setSpinnerType] = useState<SpinnerColors>("primary");

  useEffect(() => {
    // Get userAgent string
    const userAgent = window.navigator.userAgent.toLowerCase();

    // Detect device type from userAgent string
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType("ios");
    } else if (/android/.test(userAgent)) {
      setDeviceType("android");
    } else {
      setDeviceType("neither");
    }
  }, []);

  useEffect(() => {
    if (deviceType === "neither") {
      setSpinnerMessage("Incompatible device type!");
      setSpinnerType("danger");
    } else if (deviceType === "ios") {
      setSpinnerMessage("Redirecting to your download!");
      setSpinnerType("success");
      window.location.replace(appCodes[0].link);
    } else if (deviceType === "android") {
      setSpinnerMessage("Sorry! The Android version of GopherMaps isn't out yet");
      setSpinnerType("warning");
    }
  }, [deviceType]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center text-center gap-4 pb-4">
        <span className={title()}>Redirecting to your Download...</span>
        <span className={subtitle()}>
          Attempting to redirect to your device&#39;s download page
        </span>
      </section>
      <section className={"flex items-center justify-center text-center py-20"}>
        <Spinner color={spinnerType} labelColor={spinnerType} size={"lg"}>
          {spinnerMessage}
        </Spinner>
      </section>
    </DefaultLayout>
  );
}
