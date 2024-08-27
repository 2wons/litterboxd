import { ReactNode } from "react";

export const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <main className="items-center py-2 pt-10 bg-gradient-to-b from-[#1e242c] via-black-pearl to-black-pearl bg-no-repeat">
      <section className="mx-4 lg:mx-52 items-center relative">
        {children}
      </section>
    </main>
  );
};
