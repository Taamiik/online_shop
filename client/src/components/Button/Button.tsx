import cn from "clsx";

import styles from "./Button.module.scss";
import { ButtonProps, ButtonVariants } from "./types";

const Button: React.FC<ButtonProps> = (props): React.ReactElement => {
  const { title, variant } = props;

  return (
    <div>
      <button
        className={cn(styles.button, {
          [styles.text]: variant === ButtonVariants.text,
        })}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
