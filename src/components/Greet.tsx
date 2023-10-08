type UserDetail = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

export const Greet: React.FC<UserDetail> = ({
  name,
  messageCount,
  isLoggedIn,
}) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount || 0} unread messages`
          : "You are not logged in."}
      </h2>
    </div>
  );
};
