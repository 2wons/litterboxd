import Head from "@/components/seo/head";
import { ReactNode } from "react";

type ContainerProps = {
  children?: ReactNode;
  title: string;
};

export const Container = ({ title, children }: ContainerProps) => {
  return (
    <>
      <Head title={title} />
      <div className="py-2 pt-10 bg-gradient-to-b from-[#1e242c] via-black-pearl to-black-pearl bg-no-repeat">
        <section className="mx-4 lg:mx-52 items-center relative">
          {children}
        </section>
      </div>
    </>
  );
};
