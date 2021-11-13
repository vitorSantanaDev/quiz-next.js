import { ButtonElement } from "./styles";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: string;
  onClick?: (event: any) => void;
}

export default function Button(props: ButtonProps) {
  function renderButton() {
    return (
      <ButtonElement onClick={props.onClick}>{props.children}</ButtonElement>
    );
  }

  return (
    <>
      {props.href ? (
        <Link href={props.href}>{renderButton()}</Link>
      ) : (
        renderButton()
      )}
    </>
  );
}
