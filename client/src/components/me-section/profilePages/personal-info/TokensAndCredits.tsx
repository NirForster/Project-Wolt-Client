import React from "react";

interface InfoCardProps {
  title: string;
  value: string;
  description: string;
  linkText: string;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  description,
  linkText,
  onClick,
}) => {
  return (
    <div className="border rounded-lg p-4 w-full max-w-[300px] bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-gray-600 font-medium">{value}</span>
      </div>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <button
        onClick={onClick}
        className="text-blue-500 text-sm font-semibold mt-4 hover:underline"
      >
        {linkText}
      </button>
    </div>
  );
};

const TokenAndCreditsCards: React.FC = () => {
  const handleTokensClick = () => {
    console.log("View tokens clicked");
  };

  const handleCreditsClick = () => {
    console.log("View credits clicked");
  };

  return (
    <div className="flex gap-6 mt-6">
      <InfoCard
        title="Wolt tokens"
        value="0 × 🪙"
        description="Each token will get you a standard delivery with no delivery fee."
        linkText="View tokens"
        onClick={handleTokensClick}
      />
      <InfoCard
        title="Wolt credits"
        value="₪79.00"
        description="Your first credits will expire Jan 24, 2025."
        linkText="View credits"
        onClick={handleCreditsClick}
      />
    </div>
  );
};

export default TokenAndCreditsCards;
