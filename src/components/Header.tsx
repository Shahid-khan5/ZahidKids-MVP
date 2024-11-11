import React from 'react';
import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <Rocket className="w-12 h-12 text-purple-400" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Universe Learning Hub</h1>
      <p className="text-purple-200">Explore the vastness of space in multiple languages</p>
    </header>
  );
}