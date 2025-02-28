import HeaderNavLink from "./HeaderNavLink.js";

function HeaderNav() {
  return (
    <ul className="flex items-center gap-8">
      <HeaderNavLink href={"#"}>Pricing</HeaderNavLink>
      <HeaderNavLink href={"#"}>Blog</HeaderNavLink>
    </ul>
  );
}

export default HeaderNav;
