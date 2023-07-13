import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { categories } = useHeaderContext();

  const mainCategory = categories[0];
  const subCategories = categories.slice(1);

  return (
    <>
      <header className={`header mt-8 pt-12 pb-3`}>
        <nav className="navbar container text-center md:text-left">
          {/* navbar toggler */}
          <button
            className="btn btn-primary inline-flex items-center md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <svg className="mr-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="mr-1 h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
            Menu
          </button>
          {/* /navbar toggler */}

          {router.asPath !== "/" && (
            <div className="hidden text-center md:block">
              <Link
                className="mb-12  inline-flex items-center text-primary hover:underline"
                href="/"
              >
                <svg
                  className="mr-2"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z"
                    fill="currentcolor"
                  ></path>
                </svg>
                Back to Home
              </Link>
            </div>
          )}

          <ul
            id="nav-menu"
            className={`navbar-nav order-3 ${
              !openMenu && "hidden"
            } w-full justify-center md:flex md:w-auto md:space-x-2 md:order-1`}
          >
            <li className="nav-item">
              <Link
                onClick={() => setOpenMenu(false)}
                href={mainCategory.url}
                className={`nav-link inline-block ${
                  !mainCategory.url.includes("/categories") && "text-dark"
                } ${router.asPath === mainCategory.url && "nav-link-active"}`}
              >
                {mainCategory.name}
              </Link>
              {subCategories.length > 0 && (
                <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                  {subCategories.map((subcategory, i) => (
                    <li className="nav-dropdown-item" key={`children-${i}`}>
                      <Link
                        href={subcategory.url}
                        className="nav-dropdown-link block"
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
