export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary focus-visible:text-primary"
        >
          VS Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary focus-visible:text-primary"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary focus-visible:text-primary"
        >
          Tailwind CSS
        </a>
        . Deployed on{" "}
      </p>
    </footer>
  );
}
