import Image from "next/image";
import Card from "../atoms/card";

type Officer = {
  avatarSrc?: string;
  name: string;
  role?: string;
};
const OfficerCard: React.FC<Officer> = (officer) => {
  return (
    <Card className="officer-card flex-row w-72 bg-base-300">
      <figure>
        {officer.avatarSrc ? (
          <div className="avatar p-6">
            <div className="rounded-full">
              <Image
                src={officer.avatarSrc}
                alt={`Portrait of ${officer.name}`}
                width={64}
                height={64}
              />
            </div>
          </div>
        ) : (
          <div className="avatar p-6 placeholder">
            <div className="rounded-full w-16 bg-neutral">
              {officer.name
                .split(" ")
                .map((n) => n.at(0))
                .join("")}
            </div>
          </div>
        )}
      </figure>
      <div className="card-body pl-0">
        {/* might need to revisit what to do with long names later*/}
        <h2
          className="card-title overflow-hidden text-nowrap w-36"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
          }}
        >
          {officer.name}
        </h2>
        <p>{officer.role ?? "Officer"}</p>
      </div>
    </Card>
  );
};

export default OfficerCard;
export type { Officer };
