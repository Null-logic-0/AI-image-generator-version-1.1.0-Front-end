import Link from "next/link";

function HeaderNavLink({ children, href, ...props }) {
  return (
    <li>
      <Link
        href={href}
        {...props}
        className="hover:text-white font-medium text-[1rem] underline underline-offset-4 text-gray-400 disabled:cursor-not-allowed"
      >
        {children}
      </Link>
    </li>
  );
}

export default HeaderNavLink;
