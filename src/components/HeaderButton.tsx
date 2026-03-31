import type { PropsWithChildren } from "react";

interface HeaderButtonProps {
  title: string;
}

export default function HeaderButton(
  props: PropsWithChildren<HeaderButtonProps>,
) {
  return <button>{props.title}</button>;
}
