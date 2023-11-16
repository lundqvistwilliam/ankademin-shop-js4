
interface ButtonProps {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  className: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, label, icon, className }) => (
  <button className={className}  onClick={onClick}>
    {icon && <>{label} {icon}</>}
    {!icon && label}
  </button>
);

export default Button;
