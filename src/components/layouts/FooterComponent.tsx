import React from "react";
import { SiGithubsponsors } from "react-icons/si";

import clsx from "clsx";

import UnderlineLink from "../links/UnderlineLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsx(
        "mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 md:justify-between",
        "px-2 py-16 md:px-1"
      )}
    >
      <div className="flex items-center gap-4">
        {new Date().getFullYear()} | L RMN
      </div>
      <UnderlineLink
        href="https://github.com/sponsors/lrmn7"
        className="group gap-2 flex items-center"
      >
        <SiGithubsponsors
          size={24}
          className="text-darkpurple-400 group-hover:text-primary-500 dark:group-hover:text-primary-300"
        />
        <span>Support me through Github Sponsor</span>
      </UnderlineLink>
    </footer>
  );
};

export default FooterComponent;
