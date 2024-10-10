import Officers from "../components/organisms/officers";
import Heading from "../components/atoms/heading";
export default function About() {
  return (
    <div className="about py-10">
      <Heading>Officers</Heading>
      <Officers width={"60rem"} />
    </div>
  );
}
