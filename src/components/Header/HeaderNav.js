import NavLink from "../NavLink";

function HeaderNav() {
  return (
    <ul className="flex items-center gap-8 max-md:hidden">
      <NavLink href={"#"}>Pricing</NavLink>
      <NavLink href={"#"}>Blog</NavLink>
    </ul>
  );
}

export default HeaderNav;
