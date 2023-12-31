type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person: React.FC<PersonProps> = (props) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
