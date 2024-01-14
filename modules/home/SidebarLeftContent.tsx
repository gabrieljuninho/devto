"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const SidebarLeftContent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="row-end-[initial] hidden min-w-0 md:block">
      <aside>
        <div className="overflow-wrap-anywhere rounded-card bg-white p-4 text-primary shadow-[0_0_0_1px_rgba(23,23,23,0.05)]">
          <h2 className="mb-4 text-lg font-bold !leading-tight text-base-90 sm:text-xl">
            {" "}
            DEV Community is a community of 1,235,792 amazing developers{" "}
          </h2>
          <p className="mb-4 text-base-70">
            {" "}
            We're a place where coders share, stay up-to-date and grow their
            careers.{" "}
          </p>
          <div>
            <Link
              href={"/enter?state=new-user"}
              className="overflow-wrap-normal relative mb-1 inline-flex w-full justify-center rounded-md border border-cta-branded bg-transparent px-border-1-md py-border-1-sm text-center font-medium text-cta-branded outline-0 hover:border-hover hover:bg-cta-branded hover:text-white"
            >
              Create account
            </Link>
            <Link
              href={"/enter"}
              className="overflow-wrap-normal relative flex max-w-full justify-center rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
        <nav className="my-4" aria-label="DEV Community">
          <ul>
            <li>
              <Link
                href={"/"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#A0041E"
                        d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                      ></path>
                      <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                      <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                      <path
                        fill="#66757F"
                        d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                      ></path>
                      <path
                        fill="#66757F"
                        d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                      ></path>
                      <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                      <path
                        fill="#55ACEE"
                        d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                      ></path>
                      <path
                        fill="#5C913B"
                        d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/pod"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#292F33"
                        d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                      ></path>
                      <path
                        fill="#66757F"
                        d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                      ></path>
                      <path
                        fill="#99AAB5"
                        d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                      ></path>
                      <g fill="#292F33" transform="translate(4 4)">
                        <circle cx="15.5" cy="2.5" r="1.5"></circle>
                        <circle cx="20.5" cy="2.5" r="1.5"></circle>
                        <circle cx="17.5" cy="6.5" r="1.5"></circle>
                        <circle cx="22.5" cy="6.5" r="1.5"></circle>
                        <circle cx="12.5" cy="6.5" r="1.5"></circle>
                        <circle cx="15.5" cy="10.5" r="1.5"></circle>
                        <circle cx="10.5" cy="10.5" r="1.5"></circle>
                        <circle cx="20.5" cy="10.5" r="1.5"></circle>
                        <circle cx="25.5" cy="10.5" r="1.5"></circle>
                        <circle cx="17.5" cy="14.5" r="1.5"></circle>
                        <circle cx="22.5" cy="14.5" r="1.5"></circle>
                        <circle cx="12.5" cy="14.5" r="1.5"></circle>
                      </g>
                      <path
                        fill="#66757F"
                        d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                      ></path>
                      <path
                        fill="#66757F"
                        d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Podcasts{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/videos"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g transform="translate(4 4)">
                      <path
                        fill="#31373D"
                        d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                      ></path>
                      <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
                      <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
                      <path
                        fill="#8899A6"
                        d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Videos{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/tags"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#FFD983"
                        d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                      ></path>
                      <path
                        fill="#D99E82"
                        d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                      ></path>
                      <path
                        fill="#C1694F"
                        d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Tags{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/faq"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#FFD983"
                        d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                      ></path>
                      <path
                        fill="#CCD6DD"
                        d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                      ></path>
                      <path
                        fill="#FFCC4D"
                        d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                      ></path>
                      <path
                        fill="#99AAB5"
                        d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                      ></path>
                      <path
                        fill="#CCD6DD"
                        d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                FAQ{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"https://shop.forem.com"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <Image
                    src="/assets/sidebar/forem-shop.svg"
                    alt="Forem Shop"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                Forem Shop{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/advertise"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="#DD2E44"
                      d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                    ></path>
                  </svg>
                </span>{" "}
                Advertise on DEV{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <Image
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                    alt="DEV Community"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#FFAC33"
                        d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                      ></path>
                      <path
                        fill="#BE1931"
                        d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                      ></path>
                      <path
                        fill="#BE1931"
                        d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Contact{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/guides"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <Image
                    src="/assets/sidebar/guides.svg"
                    alt="Guides"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                Guides{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/software-comparisons"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <Image
                    src="/assets/sidebar/software-comparisons.svg"
                    alt="Software comparisons"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                Software comparisons{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mb-4">
          <h2 className="py-2 pl-3 text-base font-bold leading-normal text-base-90">
            Other
          </h2>
          <ul>
            <li>
              <Link
                href={"/code-of-conduct"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g className="nc-icon-wrapper">
                      <path
                        fill="#FFDB5E"
                        d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                      ></path>
                      <path
                        fill="#EE9547"
                        d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Code of Conduct{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/code-of-conduct"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g transform="translate(4 4)">
                      <circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle>
                      <path
                        fill="#664500"
                        d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                      ></path>
                      <path
                        fill="#65471B"
                        d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                      ></path>
                      <path
                        fill="#65471B"
                        d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                      ></path>
                      <path
                        fill="#292F33"
                        d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                      ></path>
                    </g>
                  </svg>
                </span>{" "}
                Privacy Policy{" "}
              </Link>
            </li>
            <li>
              <Link
                href={"/code-of-conduct"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                <span className="ml-icon-sm mr-2 inline-flex shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 44"
                    width="24"
                    height="24"
                  >
                    <g transform="translate(4 4)">
                      <ellipse
                        fill="#F5F8FA"
                        cx="8.828"
                        cy="18"
                        rx="7.953"
                        ry="13.281"
                      ></ellipse>
                      <path
                        fill="#E1E8ED"
                        d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                      ></path>
                      <circle
                        fill="#8899A6"
                        cx="6.594"
                        cy="18"
                        r="4.96"
                      ></circle>
                      <circle
                        fill="#292F33"
                        cx="6.594"
                        cy="18"
                        r="3.565"
                      ></circle>
                      <circle
                        fill="#F5F8FA"
                        cx="7.911"
                        cy="15.443"
                        r="1.426"
                      ></circle>
                      <ellipse
                        fill="#F5F8FA"
                        cx="27.234"
                        cy="18"
                        rx="7.953"
                        ry="13.281"
                      ></ellipse>
                      <path
                        fill="#E1E8ED"
                        d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                      ></path>
                      <circle fill="#8899A6" cx="25" cy="18" r="4.96"></circle>
                      <circle fill="#292F33" cx="25" cy="18" r="3.565"></circle>
                      <circle
                        fill="#F5F8FA"
                        cx="26.317"
                        cy="15.443"
                        r="1.426"
                      ></circle>
                    </g>
                  </svg>
                </span>{" "}
                Terms of use{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mb-4 flex justify-start">
          <Link
            href={"https://twitter.com/thepracticaldev"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="af9p4ugttfannlrpkspscvtfma18y09c"
              className="fill-current align-bottom"
            >
              <title id="af9p4ugttfannlrpkspscvtfma18y09c">Twitter</title>
              <path
                d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                fill="#65bbf2"
              ></path>
            </svg>
          </Link>
          <Link
            href={"https://facebook.com/thepracticaldev"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="akwt7bxczdjr500nqbjlotb5w0jwgq3r"
              className="fill-current align-bottom"
            >
              <title id="akwt7bxczdjr500nqbjlotb5w0jwgq3r">Facebook</title>
              <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
            </svg>
          </Link>
          <Link
            href={"https://github.com/forem"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="ah1s4uh1u7db3nbsc1ufthh3vd6tk8qt"
              className="fill-current align-bottom"
            >
              <title id="ah1s4uh1u7db3nbsc1ufthh3vd6tk8qt">Github</title>
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
            </svg>
          </Link>
          <Link
            href={"https://instagram.com/thepracticaldev"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="akjbw1wuxkfju8mqrb5zevgok8hnct74"
              className="fill-current align-bottom"
            >
              <title id="akjbw1wuxkfju8mqrb5zevgok8hnct74">Instagram</title>
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
            </svg>
          </Link>
          <Link
            href={"https://twitch.com/thepracticaldev"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="acjzbjbkg3adipglcfg4237ga6z6mhz2"
              className="fill-current align-bottom"
            >
              <title id="acjzbjbkg3adipglcfg4237ga6z6mhz2">Twitch</title>
              <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
            </svg>
          </Link>
          <Link
            href={"https://fosstodon.org/@thepracticaldev"}
            className="overflow-wrap-normal relative inline-block max-w-full rounded-md bg-transparent p-2 text-primary outline-0 hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="a8vrt9677hs2tofbxwit1g7odquo2unj"
              className="fill-current align-bottom"
            >
              <title id="a8vrt9677hs2tofbxwit1g7odquo2unj">Mastodon</title>
              <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
            </svg>
          </Link>
        </div>
        <nav className="mb-6">
          <h3 className="p-2 text-base font-bold leading-tight text-base-90 sm:leading-normal">
            Popular Tags
          </h3>
          <div className="max-h-[42vh] overflow-y-auto">
            <div>
              <Link
                href={"/t/webdev"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #webdev
              </Link>
            </div>
            <div>
              <Link
                href={"/t/javascript"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #javascript
              </Link>
            </div>
            <div>
              <Link
                href={"/t/beginners"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #beginners
              </Link>
            </div>
            <div>
              <Link
                href={"/t/programming"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #programming
              </Link>
            </div>
            <div>
              <Link
                href={"/t/tutorial"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #tutorial
              </Link>
            </div>
            <div>
              <Link
                href={"/t/react"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #react
              </Link>
            </div>
            <div>
              <Link
                href={"/t/python"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #python
              </Link>
            </div>
            <div>
              <Link
                href={"/t/productivity"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #productivity
              </Link>
            </div>
            <div>
              <Link
                href={"/t/aws"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #aws
              </Link>
            </div>
            <div>
              <Link
                href={"/t/devops"}
                className="overflow-wrap-normal relative flex max-w-full rounded-md bg-transparent px-4 py-2 text-primary outline-0 hover:bg-hover hover:text-hover hover:underline"
              >
                #devops
              </Link>
            </div>
          </div>
        </nav>
        <div>
          <div>
            <div className="overflow-wrap-anywhere max-h-billboard rounded-card bg-white p-3 pb-4 text-primary shadow-[0_0_0_1px_rgba(23,23,23,0.05)]">
              <div className="relative flex w-full items-center justify-between">
                <div className="ml-1 self-center text-sm leading-normal text-label-secondary">
                  DEV Community
                </div>
                <button
                  type="button"
                  className="overflow-wrap-normal relative inline-block rounded-md p-1 text-center text-sm leading-normal text-ghost transition-all duration-100 ease-modifier hover:bg-ghost-hover hover:text-base-100"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="atowwedepw09pte0qskkb3rm5ye2syjx"
                    className="pointer-events-none fill-current align-bottom"
                  >
                    <title id="atowwedepw09pte0qskkb3rm5ye2syjx">
                      Dropdown menu
                    </title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    ></path>
                  </svg>
                </button>
                <div
                  className={clsx(
                    "absolute right-0 top-full z-[400] mt-1 rounded-md bg-white p-2 text-body shadow-card sm:w-max md:min-w-[auto] lg:max-w-[250px]",
                    isOpen ? "block" : "hidden",
                  )}
                >
                  <ul>
                    <li>
                      <Link
                        href={"/billboards"}
                        className="flex items-center rounded-md bg-transparent p-2 text-body hover:bg-hover hover:text-hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          role="img"
                          aria-hidden="true"
                          className="mr-2 inline-flex h-6 w-6 items-center justify-center fill-current align-middle text-xl"
                        >
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                        </svg>{" "}
                        What's a billboard?{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/settings/customization#sponsors"}
                        className="flex items-center rounded-md bg-transparent p-2 text-body hover:bg-hover hover:text-hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          role="img"
                          aria-hidden="true"
                          className="mr-2 inline-flex h-6 w-6 items-center justify-center fill-current align-middle text-xl"
                        >
                          <path
                            d="M3.34 16.9999C2.91727 16.2689 2.58866 15.4874 2.362 14.6739C2.85531 14.423 3.26959 14.0406 3.55903 13.5688C3.84846 13.0971 4.00176 12.5545 4.00197 12.0011C4.00218 11.4476 3.84928 10.9049 3.5602 10.4329C3.27112 9.961 2.85712 9.57821 2.364 9.32694C2.81604 7.69243 3.67673 6.1999 4.865 4.98994C5.32909 5.29167 5.86762 5.45911 6.42098 5.47373C6.97434 5.48834 7.52095 5.34958 8.00033 5.07278C8.47971 4.79598 8.87315 4.39194 9.13713 3.90539C9.4011 3.41883 9.52531 2.86872 9.496 2.31594C11.1381 1.89157 12.8612 1.89226 14.503 2.31795C14.474 2.87071 14.5984 3.42073 14.8626 3.90715C15.1268 4.39357 15.5204 4.79742 15.9998 5.07401C16.4793 5.35059 17.0259 5.48913 17.5793 5.4743C18.1326 5.45946 18.671 5.29183 19.135 4.98994C19.714 5.57994 20.228 6.25095 20.66 6.99995C21.093 7.74895 21.417 8.52995 21.638 9.32595C21.1447 9.57685 20.7304 9.95932 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9988C19.9978 12.5523 20.1507 13.095 20.4398 13.5669C20.7289 14.0389 21.1429 14.4217 21.636 14.6729C21.184 16.3075 20.3233 17.8 19.135 19.0099C18.6709 18.7082 18.1324 18.5408 17.579 18.5262C17.0257 18.5115 16.479 18.6503 15.9997 18.9271C15.5203 19.2039 15.1268 19.6079 14.8629 20.0945C14.5989 20.5811 14.4747 21.1312 14.504 21.6839C12.8619 22.1083 11.1388 22.1076 9.497 21.6819C9.52605 21.1292 9.4016 20.5792 9.13742 20.0927C8.87324 19.6063 8.47964 19.2025 8.00017 18.9259C7.5207 18.6493 6.97405 18.5108 6.42073 18.5256C5.8674 18.5404 5.32896 18.7081 4.865 19.0099C4.27399 18.4069 3.76159 17.7315 3.34 16.9999ZM9 17.1959C10.0656 17.8106 10.8668 18.797 11.25 19.9659C11.749 20.0129 12.25 20.0139 12.749 19.9669C13.1324 18.7978 13.934 17.8114 15 17.1969C16.0652 16.5806 17.3205 16.3794 18.525 16.6319C18.815 16.2239 19.065 15.7889 19.273 15.3339C18.4524 14.4174 17.9991 13.2302 18 11.9999C18 10.7399 18.47 9.56295 19.273 8.66595C19.0635 8.21109 18.8125 7.77658 18.523 7.36795C17.3193 7.62025 16.0648 7.41942 15 6.80395C13.9344 6.18932 13.1332 5.20293 12.75 4.03394C12.251 3.98694 11.75 3.98594 11.251 4.03294C10.8676 5.20209 10.066 6.1885 9 6.80295C7.93478 7.41926 6.67948 7.62046 5.475 7.36795C5.18556 7.77623 4.93513 8.21081 4.727 8.66595C5.54757 9.5825 6.00088 10.7697 6 11.9999C6 13.2599 5.53 14.4369 4.727 15.3339C4.93647 15.7888 5.18754 16.2233 5.477 16.6319C6.68072 16.3796 7.93521 16.5805 9 17.1959ZM12 14.9999C11.2044 14.9999 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 11.9999C9 11.2043 9.31607 10.4412 9.87868 9.87862C10.4413 9.31602 11.2044 8.99995 12 8.99995C12.7956 8.99995 13.5587 9.31602 14.1213 9.87862C14.6839 10.4412 15 11.2043 15 11.9999C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 14.9999 12 14.9999ZM12 12.9999C12.2652 12.9999 12.5196 12.8946 12.7071 12.7071C12.8946 12.5195 13 12.2652 13 11.9999C13 11.7347 12.8946 11.4804 12.7071 11.2928C12.5196 11.1053 12.2652 10.9999 12 10.9999C11.7348 10.9999 11.4804 11.1053 11.2929 11.2928C11.1054 11.4804 11 11.7347 11 11.9999C11 12.2652 11.1054 12.5195 11.2929 12.7071C11.4804 12.8946 11.7348 12.9999 12 12.9999Z"
                            fill="black"
                          ></path>
                        </svg>{" "}
                        Manage preferences{" "}
                      </Link>
                    </li>
                    <hr className="m-2 border-[0.5px] border-[rgb(229,229,229)]" />
                    <li>
                      <Link
                        href={"/report-abuse?billboard=52888"}
                        className="flex items-center rounded-md bg-transparent p-2 text-body hover:bg-hover hover:text-hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          role="img"
                          aria-hidden="true"
                          className="mr-2 inline-flex h-6 w-6 items-center justify-center fill-current align-middle text-xl"
                        >
                          <path d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3h9.382Zm-.618 2H5v9h8.236l1 2H19V7h-6.236l-1-2Z"></path>
                        </svg>{" "}
                        Report billboard{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="break-words pb-1 pl-1 pr-1 pt-3 text-base">
                <h2 className="mx-0 my-heading text-[1.5em] font-bold leading-tight text-primary">
                  <Link
                    href={
                      "/latest#discover-the-benefits-of-dev-organization-accounts"
                    }
                  >
                    Discover the Benefits of DEV Organization Accounts!
                  </Link>
                </h2>
                <p>
                  Showcase your brand with organization branding, engage with
                  your audience, and gain insights with advanced analytics. Join
                  a community that includes industry leaders like Microsoft
                  Azure and DigitalOcean.
                  <br />
                  <Link
                    href={"/"}
                    className="overflow-wrap-normal relative block rounded-md border border-cta-branded bg-transparent px-4 py-2 text-center font-medium text-cta-branded outline-0 hover:border-hover hover:bg-cta-branded hover:text-white"
                  >
                    Get started today!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div></div>
        </div>
        <footer className="mt-6 text-sm text-secondary">
          <p>
            <Link
              href={"/"}
              className="font-medium text-cta-branded hover:text-hover hover:underline"
            >
              DEV Community
            </Link>{" "}
            A constructive and inclusive social network for software developers.
            With you every step of your journey.
          </p>
          <p className="mt-4">
            Built on{" "}
            <Link
              href={"https://www.forem.com"}
              className="text-cta-branded hover:text-hover hover:underline"
            >
              Forem
            </Link>{" "}
            - the{" "}
            <Link
              href={"/"}
              className="text-cta-branded hover:text-hover hover:underline"
            >
              open source
            </Link>{" "}
            software that powers{" "}
            <Link
              href={"/"}
              className="text-cta-branded hover:text-hover hover:underline"
            >
              DEV
            </Link>{" "}
            and other inclusive communities.
          </p>
          <p className="mt-4">
            Made with love and{" "}
            <Link
              href={"/"}
              className="text-cta-branded hover:text-hover hover:underline"
            >
              Ruby on Rails
            </Link>
            . DEV Community © 2016 - 2024.
          </p>
        </footer>
      </aside>
    </div>
  );
};

export default SidebarLeftContent;
