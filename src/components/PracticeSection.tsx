import React from 'react';
import { HelpCircle } from 'lucide-react';
import type { LearningAid } from '../types';

interface PracticeSectionProps {
  learningAid: LearningAid;
}

export function PracticeSection({ learningAid }: PracticeSectionProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-500 rounded-full p-2">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">Practice Questions</h3>
            
            <div className="space-y-8">
              {learningAid.practice_questions.map((question, index) => (
                <div key={index} className="border-b border-green-700/30 pb-6">
                  <div className="mb-4">
                    <h4 className="text-green-300 mb-2">Question {index + 1}</h4>
                    <p className="text-lg mb-2">{question.question.original}</p>
                    <p className="text-green-200 font-urdu text-right" dir="rtl">
                      {question.question.translated}
                    </p>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 mt-4">
                    <h4 className="text-green-300 mb-2">Answer</h4>
                    <p className="mb-2">{question.answer.original}</p>
                    <p className="text-green-200 font-urdu text-right" dir="rtl">
                      {question.answer.translated}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-900/30 rounded-lg p-4">
              <h4 className="text-green-300 mb-2">Study Notes</h4>
              <p className="mb-2">{learningAid.notes.original}</p>
              <p className="text-green-200 font-urdu text-right" dir="rtl">
                {learningAid.notes.translated}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}