import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const Header = () => {
  // router
  const router = useRouter();

  // Define the fixed categories
  const categories = [
    { name: "Software Engineering", slug: "software-engineering" },
    { name: "Solutions Architect", slug: "solutions-architect" },
    { name: "Technical Artist", slug: "technical-artist" },
    { name: "Cooking", slug: "cooking" },
  ];

  const renderCategories = () => {
    return (
      <ul className="navbar-nav order-3 w-full justify-center md:flex md:w-auto md:space-x-2 md:order-1">
        <li className="nav-item">
          <Link href="/" className={`nav-link inline-block ${router.asPath === "/" && "nav-link-active"}`} style={{ color: "orange" }}>
            Home
          </Link>
        </li>
        {categories.map((category, index) => (
          <li className="nav-item" key={index}>
            <Link
              href={`/categories/${category.slug}`}
              className={`nav-link inline-block ${
                router.asPath === `/category/${category.slug}` && "nav-link-active"
              }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link href="/contact" className={`nav-link inline-block ${router.asPath === "/contact" && "nav-link-active"}`}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/elements" className={`nav-link inline-block ${router.asPath === "/elements" && "nav-link-active"}`}>
            Elements
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about-me" className={`nav-link inline-block ${router.asPath === "/about-me" && "nav-link-active"}`}>
            About me
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <header className="header mt-8 pt-12 pb-3">
        <nav className="navbar container text-center md:text-left">
          {/* Navbar toggler */}
          {/* ... */}
          {/* /Navbar toggler */}

          {/* Render fixed categories and buttons */}
          {renderCategories()}
        </nav>
      </header>
    </>
  );
};

export default Header;
