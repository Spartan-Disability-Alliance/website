import Officers from "../components/organisms/officers";
import Heading from "../components/atoms/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Spartan Disability Association, its purpose, and its officers.",
};
export default function About() {
  return (
    <div className="about py-10">
      <Heading>Officers</Heading>
      <Officers width={"60rem"} />
    </div>
  );
}
