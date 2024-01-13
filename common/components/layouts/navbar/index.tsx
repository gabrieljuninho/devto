import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] h-14 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
      <span tabIndex={-1}></span>
      <Link
        href={"#"}
        className="pointer-events-none absolute left-1/2 z-[500] -translate-x-1/2 -translate-y-[200px] rounded-md bg-body px-4 py-3 text-white opacity-0 transition-transform duration-100 ease-modifier"
      >
        Skip to content
      </Link>
      <div className="relative m-auto flex h-14 max-w-7xl items-center px-0 py-0 md:px-2 lg:px-4">
        <span className="inline-block md:hidden">
          <button
            type="button"
            className="overflow-wrap-normal relative mx-2 inline-block rounded-md border-none bg-transparent p-2 text-center text-normal hover:bg-hover hover:text-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="arnmgvbj91dmq4qu7brw2k2tzmrrm48j"
              className="pointer-events-none fill-current align-bottom"
            >
              <title id="arnmgvbj91dmq4qu7brw2k2tzmrrm48j">
                Navigation menu
              </title>
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
            </svg>
          </button>
        </span>
        <Link
          href={"/"}
          className="overflow-wrap-anywhere inline-flex max-w-[125px] shrink-0 items-center self-center align-middle text-base font-medium leading-none -tracking-[0.02em] text-base-100 outline-0 sm:max-w-[150px] md:max-w-[175px] md:text-lg md:font-bold lg:max-w-[200px] lg:text-xl"
          aria-label="DEV Community Home"
        >
          <Image
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DEV Community"
            width={50}
            height={40}
            className="h-logo inline-block w-auto max-w-full object-contain align-middle outline-0"
          />
        </Link>
        <div className="mx-2 my-0 hidden max-w-[420px] flex-auto md:mx-4 md:my-0 md:block">
          <form>
            <input type="hidden" value="✓" />
            <div className="flex flex-wrap">
              <div className="relative flex flex-1 flex-col text-base">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-border-1.5 border-form w-full resize-y rounded-md border-[1.5px] bg-white px-[0.5em] text-base leading-normal text-body outline-0 transition-all duration-100 ease-modifier placeholder:text-body"
                  autoComplete="off"
                  aria-label="Search term"
                />
                <button
                  type="submit"
                  className="overflow-wrap-normal absolute bottom-[1px] left-auto right-[1px] top-[1px] mt-0 inline-block rounded-md border-none bg-transparent p-2 py-0 text-center text-normal hover:bg-hover hover:text-hover"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="pointer-events-none fill-current align-bottom"
                    focusable="false"
                  >
                    <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="ml-auto flex h-full items-center">
          <Link
            href={"/search"}
            className="overflow-wrap-normal text-primary relative mx-1 inline-block max-w-full rounded-md bg-transparent p-2 outline-0 hover:bg-hover hover:text-hover md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="anulmqjg27dqj7kpvoc4sx3d2k0087r0"
              className="fill-current align-bottom"
            >
              <title id="anulmqjg27dqj7kpvoc4sx3d2k0087r0">Search</title>
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
            </svg>
          </Link>
          <div className="flex">
            <span className="hidden md:block">
              <Link
                href={"/enter"}
                className="text-primary hover:text-link-branded overflow-wrap-normal relative ml-auto mr-2 flex max-w-full whitespace-nowrap rounded-md bg-transparent px-4 py-2 outline-0 hover:bg-hover hover:underline"
              >
                Log in
              </Link>
            </span>
            <Link
              href={"/enter?state=new-user"}
              className="hover:bg-cta-branded text-cta-branded border-cta-branded py-border-1-sm px-border-1-md overflow-wrap-normal relative mr-2 inline-flex whitespace-nowrap rounded-md border bg-transparent font-medium outline-0 hover:border-hover hover:text-white"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
