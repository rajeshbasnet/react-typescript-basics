type StatusProps = {
  status: "loading" | "error" | "success";
  statusEnum: {
    LOADING: string;
    SUCCESS: string;
    ERROR: string;
  };
};

export const Status: React.FC<StatusProps> = ({ status, statusEnum }) => {
  let message;

  if (status === statusEnum.LOADING) {
    message = "Loading...";
  } else if (status === statusEnum.SUCCESS) {
    message = "Data fetched successfully!";
  } else if (status === statusEnum.ERROR) {
    message = "Error fetching data";
  }

  return <div>{message}</div>;
};
