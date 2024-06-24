import type { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  const classes = classNames("rounded-md border p-4 drop-shadow-md", className);

  return <div className={classes}>{children}</div>;
};

export default Card;
