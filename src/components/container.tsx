import { ReactNode } from "react";

export const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="items-center py-2 pt-10 bg-gradient-to-b from-[#1e242c] via-[#14181c] to-[#14181c] bg-no-repeat">
      <section className="mx-4 lg:mx-52 items-center relative">
        {children}
      </section>
    </div>
  );
};
