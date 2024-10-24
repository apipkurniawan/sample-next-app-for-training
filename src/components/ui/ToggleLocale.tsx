import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

const ToggleLocale: React.FC = () => {
  const router = useRouter();

  const updateLocale = (localePar: string) => {
    router.push(router.pathname, router.asPath, { locale: localePar });
  };

  return (
    <div className="flex flex-row items-center rounded-full bg-gray-300 text-white">
      <div
        onClick={() => updateLocale("id")}
        className={twMerge(
          "cursor-pointer px-4 py-2 transition-all",
          router.locale === "id" && "rounded-full bg-orange-400"
        )}
      >
        ID
      </div>
      <div
        onClick={() => updateLocale("en")}
        className={twMerge(
          "cursor-pointer px-4 py-2 transition-all",
          router.locale === "en" && "rounded-full bg-orange-400"
        )}
      >
        EN
      </div>
    </div>
  );
};

export default ToggleLocale;
