import React from 'react';
import { BookMarked } from 'lucide-react';
import type { VocabularyItem } from '../types';

interface VocabularySectionProps {
  vocabulary: VocabularyItem[];
}

export function VocabularySection({ vocabulary }: VocabularySectionProps) {
  return (
    <div className="space-y-8">
      {vocabulary.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="bg-pink-500 rounded-full p-2">
              <BookMarked className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{item.word.original}</h3>
                <span className="text-pink-300 text-sm">{item.partOfSpeech}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-pink-300 mb-1">Urdu</p>
                  <p className="text-xl font-urdu" dir="rtl">{item.word.translated}</p>
                </div>
                <div>
                  <p className="text-pink-300 mb-1">Pashto</p>
                  <p className="text-xl font-pashto">{item.word.pashto}</p>
                </div>
              </div>

              <div className="border-t border-pink-800/30 pt-4">
                <h4 className="text-pink-300 mb-2">Definition</h4>
                <p className="mb-2">{item.definition.original}</p>
                <p className="text-pink-200 font-urdu text-right mb-2" dir="rtl">
                  {item.definition.translated}
                </p>
                <p className="text-pink-200 font-pashto">
                  {item.definition.pashto}
                </p>
              </div>

              <div className="border-t border-pink-800/30 mt-4 pt-4">
                <h4 className="text-pink-300 mb-2">Usage</h4>
                <p>{item.usage}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}