"use client";
import { About, Footer, Header } from "@/app/components";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default page;
