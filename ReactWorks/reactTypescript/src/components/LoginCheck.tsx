import { useState } from "react";

type UserTypes = {
  name: string;
  surname: string;
  age: number;
  email: string;
};
function LoginCheck() {
  const [user, setUser] = useState<UserTypes | null>({} as UserTypes);
  const handleLogin = () => {
    setUser({
      name: "Elif",
      surname: "Marali",
      age: 21,
      email: "elif@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({} as UserTypes);
  };
  return (
    <div>
      <button onClick={handleLogin}>Giris Yap</button>
      <button onClick={handleLogout}>Cikis Yap</button>
      <div>
        <h3>
          {user?.name} {user?.surname}
          <br />
          {user?.email}
          <br />
          {user?.age}
          <br />
        </h3>
      </div>
    </div>
  );
}

export default LoginCheck;
