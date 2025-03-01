import Link from "next/link";

function NavLink({ children, href }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-white font-medium text-[1rem]  text-gray-400 disabled:cursor-not-allowed"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
