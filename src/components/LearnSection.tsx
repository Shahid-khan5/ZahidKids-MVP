import React from 'react';
import { BookOpen } from 'lucide-react';
import type { Sentence } from '../types';

interface LearnSectionProps {
  sentences: Sentence[];
}

export function LearnSection({ sentences }: LearnSectionProps) {
  return (
    <div className="space-y-8">
      {sentences.map((sentence) => (
        <div
          key={sentence.id}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 rounded-full p-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-lg mb-4">{sentence.original.text}</p>
              <p className="text-purple-200 font-urdu text-right mb-4" dir="rtl">
                {sentence.translation.text}
              </p>
              <p className="text-purple-200 font-pashto">
                {sentence.pashto.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}