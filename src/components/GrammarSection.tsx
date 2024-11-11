import React from 'react';
import { BookOpen } from 'lucide-react';
import type { GrammarConcept } from '../types';

interface GrammarSectionProps {
  concepts: GrammarConcept[];
}

export function GrammarSection({ concepts }: GrammarSectionProps) {
  return (
    <div className="space-y-8">
      {concepts.map((concept, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 rounded-full p-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{concept.name.original}</h3>
              <p className="text-right font-urdu mb-4" dir="rtl">
                {concept.name.translated}
              </p>
              
              <div className="mb-6">
                <h4 className="text-blue-300 mb-2">Explanation</h4>
                <p className="text-white mb-2">{concept.explanation.original}</p>
                <p className="text-blue-200 font-urdu text-right" dir="rtl">
                  {concept.explanation.translated}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-blue-300 mb-2">Examples</h4>
                {concept.examples.map((example, i) => (
                  <div key={i} className="mb-4 bg-blue-900/30 rounded-lg p-4">
                    <p className="mb-2">{example.original}</p>
                    <p className="text-blue-200 font-urdu text-right" dir="rtl">
                      {example.translated}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-blue-300 mb-2">Rules</h4>
                {concept.rules.map((rule, i) => (
                  <div key={i} className="mb-4">
                    <p className="mb-2">{rule.original}</p>
                    <p className="text-blue-200 font-urdu text-right" dir="rtl">
                      {rule.translated}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}