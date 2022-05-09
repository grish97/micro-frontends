const API_URL = "//localhost:8000/api";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/user`);
  const users = response.json();

  return users;
};

export const getUserById = async (id: string) => {
  const response = await fetch(`${API_URL}/user`);
  const users: any[] = await response.json();

  const foundUser = users.find((user: any) => user._id === id);
  console.log({ foundUser, id });

  return foundUser;
};
