type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id : number) => void;
};

export const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click Me</button>;
};
