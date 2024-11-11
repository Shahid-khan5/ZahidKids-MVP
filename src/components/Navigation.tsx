import React from 'react';
import { Book, GraduationCap, BookOpen, ScrollText } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'learn', icon: Book, label: 'Learn' },
    { id: 'vocabulary', icon: GraduationCap, label: 'Vocabulary' },
    { id: 'grammar', icon: ScrollText, label: 'Grammar' },
    { id: 'practice', icon: BookOpen, label: 'Practice' }
  ];

  return (
    <nav className="flex justify-center gap-4 mb-8">
      {tabs.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            activeTab === id
              ? 'bg-white text-purple-900 shadow-lg'
              : 'bg-purple-800/50 hover:bg-purple-800'
          }`}
        >
          <Icon className="w-5 h-5" />
          {label}
        </button>
      ))}
    </nav>
  );
}