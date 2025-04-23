import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-dark-surface rounded-lg p-6 h-full">
        <h2 className="text-xl font-semibold text-dark-text mb-4">
          Detailed Insights
        </h2>
        <p className="text-dark-text-secondary">
          This panel will display detailed insights and analytics for the selected folder or job.
        </p>
      </div>
    </div>
  );
};

export default RightPanel; 