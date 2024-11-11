import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { LearnSection } from './components/LearnSection';
import { VocabularySection } from './components/VocabularySection';
import { GrammarSection } from './components/GrammarSection';
import { PracticeSection } from './components/PracticeSection';
import { content } from './data/content';

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="max-w-4xl mx-auto">
          {activeTab === 'learn' && <LearnSection sentences={content.sentences} />}
          {activeTab === 'vocabulary' && <VocabularySection vocabulary={content.vocabulary} />}
          {activeTab === 'grammar' && <GrammarSection concepts={content.grammar.concepts} />}
          {activeTab === 'practice' && <PracticeSection learningAid={content.learning_aids} />}
        </div>
      </div>
    </div>
  );
}