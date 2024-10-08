import { classNames } from "shared/lib/classNames/classNames";
import cls from "./button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])}{...otherProps } >
      {children}
      {}
    </button>
  );
};
