import React, { useState } from 'react';
import { FolderIcon, PlusIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface Folder {
  id: string;
  name: string;
  hasUnread: boolean;
  jobs: Job[];
}

interface Job {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'error';
}

interface FolderTreeProps {
  searchQuery: string;
}

const FolderTree: React.FC<FolderTreeProps> = ({ searchQuery }) => {
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);
  const [folders] = useState<Folder[]>([
    {
      id: '1',
      name: 'Jobs',
      hasUnread: true,
      jobs: [
        { id: '1', name: 'Job 1', status: 'running' },
        { id: '2', name: 'Job 2', status: 'completed' },
      ],
    },
    {
      id: '2',
      name: 'Tesla',
      hasUnread: false,
      jobs: [
        { id: '3', name: 'Job 3', status: 'error' },
      ],
    },
  ]);

  const filteredFolders = folders.filter(folder =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {filteredFolders.map((folder) => (
        <div key={folder.id} className="mb-2">
          <div className="flex items-center justify-between p-2 hover:bg-dark-surface rounded-lg">
            <div className="flex items-center">
              <FolderIcon className="w-5 h-5 text-dark-text-secondary mr-2" />
              <span className="text-dark-text">{folder.name}</span>
              {folder.hasUnread && (
                <ExclamationCircleIcon className="w-4 h-4 text-accent ml-2" />
              )}
            </div>
            <button
              onClick={() => setOpenFolderId(openFolderId === folder.id ? null : folder.id)}
              className="text-dark-text-secondary hover:text-dark-text"
              aria-label={openFolderId === folder.id ? 'Close chat' : 'Open chat'}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>

          {openFolderId === folder.id && (
            <div className="ml-6 mt-2 bg-dark-surface rounded-lg p-4">
              <div className="flex space-x-2 mb-4">
                <button className="px-3 py-1 bg-accent text-white rounded hover:bg-accent-hover">
                  Summarize
                </button>
                <button className="px-3 py-1 border border-dark-border rounded hover:bg-dark-bg">
                  Flag for review
                </button>
              </div>

              <div className="space-y-2">
                {folder.jobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-2 hover:bg-dark-bg rounded"
                  >
                    <span className="text-dark-text-secondary">{job.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        job.status === 'running'
                          ? 'bg-blue-500/20 text-blue-400'
                          : job.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderTree; 