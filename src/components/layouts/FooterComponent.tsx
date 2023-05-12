import React from "react";
import { SiGithubsponsors } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import BaseImage from "../images/BaseImage";
import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 md:justify-between",
        "px-2 py-16 md:px-1"
      )}
    >
      <div className="flex items-center gap-4">
        <UnderlineLink href="https://is-a.fun">
          {new Date().getFullYear()} | L RMN
        </UnderlineLink>
        <UnstyledLink
          href="https://www.producthunt.com/posts/qr-generator-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-qr&#0045;generator&#0045;3"
          target="_blank"
        >
          <BaseImage
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=393953&theme=light"
            alt="QR&#0032;Generator - simply&#0032;and&#0032;effortlessly&#0032;with&#0032;our&#0032;tool&#0046; | Product Hunt"
            style="width: 250px; height: 54px;" width="250" height="54" /></a>
          />
        </UnstyledLink>
      </div>
      <UnderlineLink
        href="https://github.com/sponsors/lrmn7"
        className="group gap-2"
      >
        <SiGithubsponsors
          size={24}
          className="text-darkpurple-400 group-hover:text-primary-500 dark:group-hover:text-primary-300"
        />
        Support me through Github Sponsor
      </UnderlineLink>
    </footer>
  );
};

export default FooterComponent;
