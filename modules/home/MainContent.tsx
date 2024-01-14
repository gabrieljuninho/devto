import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <main className="scroll-margin-top-14 min-w-0">
      <header className="p-2 px-3 text-lg md:mb-2 md:p-0 md:px-0">
        <nav className="mx-icon-md items-center justify-between sm:flex md:mx-0">
          <ul className="mx-0 my-main flex flex-nowrap overflow-x-auto px-0 py-1">
            <li>
              <Link
                href={"/"}
                className="whitespace-[unset] relative rounded-md bg-none px-3 py-2 font-bold text-base-100 hover:bg-white hover:text-cta-branded sm:inline-flex"
              >
                Relevant
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="whitespace-[unset] relative rounded-md bg-none px-3 py-2 text-base-70 hover:bg-white hover:text-cta-branded sm:inline-flex"
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="whitespace-[unset] relative rounded-md bg-none px-3 py-2 text-base-70 hover:bg-white hover:text-cta-branded sm:inline-flex"
              >
                Top
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="relative mb-2 rounded-card bg-white text-xl shadow-[0_0_0_1px_rgba(23,23,23,0.05)] sm:text-3xl">
        <Link
          href={"/"}
          className="overflow-wrap-anywhere pointer-events-none absolute bottom-0 left-0 right-0 top-0 opacity-0"
        >
          What was your win this week?
        </Link>
        <div className="aspect-card h-full max-h-story w-full overflow-hidden rounded-card rounded-b-none object-contain py-0">
          <Link
            href={"/"}
            className="aspect-story max-h-story overflow-hidden rounded-card rounded-b-none object-contain py-0"
          >
            <Image
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--hQUZN7xB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/luo0sx64k6xd8dogd3um.jpg"
              alt="Cover image for What was your win this week?"
              width={1000}
              height={420}
              className="aspect-story max-h-story rounded-card rounded-b-none bg-[#DDDDDD] object-contain py-0"
            />
          </Link>
        </div>
        <div className="px-4 pb-3 pt-4 sm:p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between md:mb-2">
            <div className="flex items-center text-sm leading-tight">
              <div className="relative mr-2">
                <Link
                  href={"/"}
                  className="relative inline-block h-8 w-8 overflow-hidden rounded-md bg-white align-middle after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:border after:border-body after:opacity-[0.15] after:content-['']"
                >
                  <Image
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--XGNRCx3p--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/d908a186-5651-4a5a-9f76-15200bc6801f.jpg"
                    alt="The DEV team logo"
                    width={32}
                    height={32}
                    className="inline-block h-full w-full rounded-md align-bottom"
                  />
                </Link>
                <Link
                  href={"/"}
                  className="absolute bottom-icon-sm right-icon-sm inline-block h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-tertiary align-middle after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:border after:border-body after:opacity-[0.15] after:content-['']"
                >
                  <Image
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s---PjFGtdl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/05ce9c9d-43b7-4823-a423-f875a94edc27.jpg"
                    alt="michaeltharrington profile"
                    width={20}
                    height={20}
                    className="inline-block h-full w-full rounded-md align-bottom"
                  />
                </Link>
              </div>
              <div>
                <div>
                  <Link
                    href={"/"}
                    className="font-medium text-primary md:hidden"
                  >
                    Michael Tharrington
                  </Link>
                  <div className="relative mb-4 hidden font-medium sm:mb-0 md:inline-block">
                    <button
                      type="button"
                      className="overflow-wrap-normal relative my-icon-sm ml-icon-xs inline-block rounded-md p-1 text-center text-sm font-medium leading-6 text-ghost transition-all duration-100 ease-modifier hover:z-[1] hover:bg-ghost-hover hover:text-base-100"
                    >
                      Michael Tharrington
                    </button>
                    <div className="overflow-wrap-anywhere absolute left-0 top-full z-[400] mt-1 hidden min-w-[250px] rounded-md border-t-[2rem] border-[#9fcfac] bg-white p-4 pt-0 text-base font-normal text-base-100 shadow-card sm:w-max sm:max-w-[360px]">
                      <div className="grid gap-4">
                        <div className="mt-icon-lg">
                          <Link href={"/"} className="flex">
                            <span className="relative mr-2 inline-block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-tertiary align-middle after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-md after:border after:border-body after:opacity-[0.15] after:content-['']">
                              <Image
                                src="https://res.cloudinary.com/practicaldev/image/fetch/s---PjFGtdl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/05ce9c9d-43b7-4823-a423-f875a94edc27.jpg"
                                alt="michaeltharrington"
                                width={48}
                                height={48}
                                className="inline-block h-full w-full align-bottom"
                              />
                            </span>
                            <span className="mt-5 text-lg font-bold text-base-90 sm:text-xl sm:leading-normal">
                              Michael Tharrington
                            </span>
                          </Link>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="relative inline-block w-full whitespace-nowrap rounded-md bg-cta-branded px-4 py-2 text-center text-base font-medium leading-6 text-light shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-100 ease-modifier hover:z-[1] hover:bg-link-branded hover:shadow-[0_2px_5px_rgba(0,0,0,0.05)]"
                          >
                            Follow
                          </button>
                        </div>
                        <div className="text-base-70">
                          I'm a friendly, non-dev, cisgender guy from NC who
                          enjoys playing music/making noise, hiking, eating
                          veggies, and hanging out with my best friend/wife +
                          our 3 kitties + 1 greyhound.
                        </div>
                        <div>
                          <ul>
                            <li>
                              <div className="text-xs font-bold uppercase text-label-secondary">
                                Email
                              </div>
                              <div>
                                <Link
                                  href={"mailto:michael@forem.com"}
                                  className="text-cta-branded"
                                >
                                  michael@forem.com
                                </Link>
                              </div>
                            </li>
                            <li className="mt-3">
                              <div className="text-xs font-bold uppercase text-label-secondary">
                                Work
                              </div>
                              <div>Senior Community Manager at DEV</div>
                            </li>
                            <li className="mt-3">
                              <div className="text-xs font-bold uppercase text-label-secondary">
                                Location
                              </div>
                              <div>North Carolina</div>
                            </li>
                            <li className="mt-3">
                              <div className="text-xs font-bold uppercase text-label-secondary">
                                Education
                              </div>
                              <div>BFA in Creative Writing</div>
                            </li>
                            <li className="mt-3">
                              <div className="text-xs font-bold uppercase text-label-secondary">
                                Joined
                              </div>
                              <div>October 24, 2017</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span>
                    <span className="font-normal text-label-secondary">
                      {" "}
                      for{" "}
                    </span>
                    <Link
                      href={"/"}
                      className="font-medium text-label-secondary"
                    >
                      The DEV Team
                    </Link>
                  </span>
                </div>
                <Link href={"/"} className="text-xs text-label-secondary">
                  <time>Jan 12</time>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:pl-story">
            <h2 className="overflow-wrap-anywhere mb-1 break-words font-bold leading-tight text-body">
              <Link
                href={"/"}
                className="block text-inherit hover:text-cta-branded"
              >
                What was your win this week?
              </Link>
            </h2>
            <div className="mb-2 ml-icon-xs flex flex-wrap gap-[1px] text-sm text-ghost">
              <Link
                href={"/"}
                className="inline-flex flex-nowrap items-center whitespace-nowrap rounded-md px-2 py-tag text-primary transition-all duration-100 ease-modifier hover:bg-[rgba(247,223,30,0.10)] hover:text-body hover:shadow-tag"
              >
                <span className="shrink-0 text-[#f7df1e]">#</span>
                javascript
              </Link>
            </div>
            <div className="flex items-center justify-between text-sm leading-tight">
              <div className="ml-icon-sm flex">
                <Link
                  href={"/"}
                  className="relative inline-block rounded-md px-3 py-1 pl-2 text-center font-normal leading-6 text-ghost transition-all duration-100 ease-modifier hover:bg-ghost-hover hover:text-base-100"
                >
                  <div className="pointer-events-none flex items-center">
                    <span className="flex items-center">
                      <span className="relative z-[5] -mr-3 flex h-7 w-7 items-center justify-center rounded-[15px] border-2 border-white bg-body">
                        <Image
                          src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </span>
                      <span className="relative z-[4] -mr-3 flex h-7 w-7 items-center justify-center rounded-[15px] border-2 border-white bg-body">
                        <Image
                          src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </span>
                      <span className="relative z-[3] -mr-3 flex h-7 w-7 items-center justify-center rounded-[15px] border-2 border-white bg-body">
                        <Image
                          src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </span>
                      <span className="relative z-[2] -mr-3 flex h-7 w-7 items-center justify-center rounded-[15px] border-2 border-white bg-body">
                        <Image
                          src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </span>
                      <span className="relative z-[1] -mr-3 flex h-7 w-7 items-center justify-center rounded-[15px] border-2 border-white bg-body">
                        <Image
                          src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </span>
                    </span>
                    <span className="ml-4">
                      21
                      <span className="hidden sm:inline">&nbsp;reactions</span>
                    </span>
                  </div>
                </Link>
                <Link
                  href={"/"}
                  className="overflow-wrap-normal flex items-center rounded-md px-3 py-1 pl-2 text-center text-sm font-normal leading-6 text-ghost transition-all duration-100 ease-modifier hover:bg-ghost-hover hover:text-base-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    role="img"
                    aria-labelledby="allzgxwhinmg7lo745b7cmpco2xzhepo"
                    className="mr-1 fill-current"
                  >
                    <title id="allzgxwhinmg7lo745b7cmpco2xzhepo">
                      Comments
                    </title>
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  2 <span className="hidden sm:inline">&nbsp;comments</span>
                </Link>
              </div>
              <div className="flex items-center">
                <small className="mr-2 text-xs text-label-secondary">
                  8 min read
                </small>
                <button
                  type="button"
                  className="overflow-wrap-normal relative inline-block rounded-md p-2 text-center text-normal hover:bg-hover"
                >
                  <span className="pointer-events-none inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                    </svg>
                  </span>
                  <span className="pointer-events-none hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </main>
  );
};

export default MainContent;
