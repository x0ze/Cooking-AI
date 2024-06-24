import { LogoIcon } from "./Icons";
import '@/public/logo-final.png'

export const Footer = () => {
  return (
    <footer id="footer" className="py-8 text-center bottom-0 w-full">
      <hr className="w-11/12 mx-auto pb-8" />
      
      <div className="container flex flex-col gap-4">
        <div className="flex items-center justify-center">
        <img src="logo-final.png" className="h-12"/>
          {/* <LogoIcon /> */}
          <span className="ml-2 font-bold text-xl">LetHimCook</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/x0ze"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Github
          </a>
          <a
            rel="noreferrer noopener"
            href="https://nextjs.org/"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Next.js
          </a>
          <a
            rel="noreferrer noopener"
            href="https://shadcn.com/"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Shadcn
          </a>
        </div>
      </div>

      <div className="container pt-3">
        <p className="text-sm opacity-60">
          &copy; 2024 Home page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/x0ze"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            x0ze
          </a>
        </p>
      </div>
    </footer>
  );
};
