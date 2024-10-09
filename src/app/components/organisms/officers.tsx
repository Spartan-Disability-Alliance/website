import OfficerCard, { Officer } from "../molecules/officer-card";
import { promises as fs } from "fs";

export default async function Officers({ width }: { width: string | number }) {
  const file = await fs.readFile(
    process.cwd() + "/src/app/assets/data.json",
    "utf8",
  );
  const data = JSON.parse(file);
  const officers: Officer[] = data.officers;
  return (
    <div
      className="officer-cards flex flex-wrap justify-center gap-4"
      style={{ maxWidth: width }}
    >
      {officers.map((officer, i) => {
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
