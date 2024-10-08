import React from "react";
import Card from "../atoms/card";

type ResourceCardProps = {
  title: string;
  links: { name: string; url: string }[];
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, links }) => {
  return (
    <Card className="mb-5 bg-gray-800 max-w-4xl mx-auto animate-fade-in-left">
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold text-slate-300 border-b-2 border-gray-700 pb-4">
          {title}
        </h2>
        <ul className="pt-4 space-y-3">
          {links.map((link, index) => (
            <li key={index} className="transition-transform duration-200 hover:translate-x-1">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xl flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ResourceCard;
