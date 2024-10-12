import OfficerCard from "../molecules/officer-card";
import data from "../../assets/data.json";

export default async function Officers({ width }: { width: string | number }) {
  return (
    <div
      className="officer-cards flex flex-wrap justify-center gap-4 mx-auto"
      style={{ maxWidth: width }}
    >
      {data.officers.map((officer, i) => {
        return (
          <OfficerCard
            key={i}
            name={officer.name}
            avatarSrc={officer.avatarSrc}
            role={officer.role}
          />
        );
      })}
    </div>
  );
}
