import NavLink from "../NavLink";

function FooterNav() {
  return (
    <div className="flex items-baseline flex-wrap gap-10 max-md:flex-col max-md:items-center justify-around w-full max-w-[600px]">
      <nav className="flex flex-col max-md:items-center gap-4">
        <h3>Products</h3>
        <ul className="flex flex-col max-md:items-center gap-2">
          <NavLink href="#">AI Tools</NavLink>
          <NavLink href="#">Blogs</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">FAQ</NavLink>
        </ul>
      </nav>
      <nav className="flex flex-col max-md:items-center gap-4">
        <h3>Information</h3>
        <ul className="flex flex-col max-md:items-center gap-2">
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Help Center</NavLink>
          <NavLink href="#">Terms of Use</NavLink>
          <NavLink href="#">Privacy Policy</NavLink>
        </ul>
      </nav>
      <div className="flex flex-col max-md:items-center gap-4">
        <h3>Contact US</h3>
        <a href="mailto:support@synthart.com" className="text-gray-400">
          support@synthart.com
        </a>
      </div>
    </div>
  );
}

export default FooterNav;
