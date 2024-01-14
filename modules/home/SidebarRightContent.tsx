import Link from "next/link";

const SidebarRightContent = () => {
  return (
    <div className="min-w-0">
      <div className="grid gap-4">
        <section className="overflow-wrap-anywhere min-w-0 rounded-card bg-white text-primary shadow-[0_0_0_1px_rgba(23,23,23,0.05)]">
          <header className="border-tertiary border-b px-4 py-3">
            <h3 className="text-lg font-bold leading-tight text-base-90 sm:text-xl sm:leading-normal">
              <Link href={"/"} className="text-primary hover:text-cta-branded">
                #discuss
              </Link>
            </h3>
            <div className="text-xs text-base-70">
              Discussion threads targeting the whole community
            </div>
          </header>
          <div>
            <Link href={"/"} className="border-tertiary block border-b p-4">
              What is your favorite open source alternative to proprietary
              software?{" "}
              <div className="text-comment pt-1 text-sm">16 comments</div>
            </Link>
            <Link href={"/"} className="block p-4">
              What is your favorite open source alternative to proprietary
              software?{" "}
              <div className="text-comment pt-1 text-sm">
                <span className="inline-block min-w-2 rounded-md bg-[rgb(252,211,77)] p-1 text-center text-sm leading-none text-[rgb(120,53,15)]">
                  New
                </span>
              </div>
            </Link>
          </div>
        </section>
        <section className="relative mb-4 mt-2 overflow-hidden pb-4 pl-4 pr-4 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-tertiary after:opacity-25 after:content-['']">
          <header className="font-widget relative px-0 py-2 text-[0.9em] font-bold text-body">
            <h4>trending guides/resources</h4>
          </header>
          <div className="break-words after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-tertiary after:opacity-25 after:content-['']">
            <div>
              <Link
                href={"/"}
                className="border-tertiary block border-b p-4 text-primary hover:bg-white hover:text-cta-branded"
              >
                Books That Helped Me Become a Tech Lead
              </Link>
            </div>
          </div>
        </section>
        <section className=""></section>
      </div>
    </div>
  );
};

export default SidebarRightContent;
