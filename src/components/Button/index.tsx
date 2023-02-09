import Image from 'next/image';
import { SButton } from './styles';

interface ButtonProps {
  width?: string;
  onClick?: () => void;
  icon?: string;
  altText?: string;
	quantity?: number;
  label: string;
}

const Button = ({
  width,
  onClick,
  icon,
  altText,
	quantity,
  label,
}: ButtonProps) => {
  return (
    <SButton quantity={quantity} width={width} onClick={onClick}>
      {icon && altText ? <Image src={icon} alt={altText} /> : null}

			<p>{quantity}</p>

      <p>{label}</p>
    </SButton>
  );
};

export default Button;
