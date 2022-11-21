import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  variant?: "default" | "blog";
}

export const Section: React.FC<SectionProps> = ({ children, variant = "default" }) => {
  return (
    <div
      className={clsx({
        "container mx-auto my-8": variant == "default",
        "mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert":
          variant == "blog",
      })}
    >
      {children}
    </div>
  );
};
