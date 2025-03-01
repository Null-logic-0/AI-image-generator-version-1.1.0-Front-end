import Link from "next/link";

function NavLink({ children, href, ...props }) {
  return (
    <li>
      <Link
        href={href}
        {...props}
        className="hover:text-white font-medium text-[1rem]  text-gray-400 disabled:cursor-not-allowed"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
