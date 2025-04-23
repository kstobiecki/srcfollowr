import React, { useState } from 'react';
import LeftMenu from './components/LeftMenu';
import FolderTree from './components/FolderTree';
import RightPanel from './components/RightPanel';
import SearchBar from './components/SearchBar';

function App() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-screen bg-dark-bg text-dark-text">
      {/* Left Menu */}
      <LeftMenu isExpanded={isMenuExpanded} onToggle={() => setIsMenuExpanded(!isMenuExpanded)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="p-4 border-b border-dark-border">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Center and Right Panels */}
        <div className="flex flex-1 overflow-hidden">
          {/* Folder Tree */}
          <div className="w-1/2 border-r border-dark-border overflow-y-auto">
            <FolderTree searchQuery={searchQuery} />
          </div>

          {/* Right Panel */}
          <div className="w-1/2 overflow-y-auto">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 