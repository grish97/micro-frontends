///<reference types="react" />

declare module "home/Header" {
  const Header: React.ComponentType;

  export default Header;
}

declare module "home/Footer" {
  const Footer: React.ComponentType;

  export default Footer;
}

declare module "home/users" {
  const getUsers: () => any[];
  const getUserById: (userId: string) => any;

  export { getUsers, getUserById };
}
