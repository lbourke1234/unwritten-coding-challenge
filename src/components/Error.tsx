import React from "react";

type ErrorProps = {
  error: string;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg font-semibold text-red-500">Error: {error}</p>
    </div>
  );
};

export default Error;
