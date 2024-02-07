import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1 sm:py-2 px-3 sm:px-5  bg-green-600 bg-opacity-50 text-light rounded-full capitalize font-semibold  hover:scale-105  transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
