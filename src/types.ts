export interface GrammarConcept {
  name: {
    original: string;
    translated: string;
  };
  explanation: {
    original: string;
    translated: string;
  };
  examples: Array<{
    original: string;
    translated: string;
  }>;
  rules: Array<{
    original: string;
    translated: string;
  }>;
}

export interface LearningAid {
  keywords: string[];
  practice_questions: Array<{
    question: {
      original: string;
      translated: string;
    };
    answer: {
      original: string;
      translated: string;
    };
    type: string;
  }>;
  notes: {
    original: string;
    translated: string;
  };
}

export interface MetadataTags {
  topics: string[];
  skills: string[];
  curriculum_standards: string[];
}

export interface VersionControl {
  created_at: string;
  updated_at: string;
  last_reviewed: string;
  review_status: string;
}

// Previous interfaces remain the same
export interface Sentence {
  id: string;
  original: {
    text: string;
    language: string;
  };
  translation: {
    text: string;
    language: string;
  };
  pashto: {
    text: string;
    language: string;
  };
}

export interface VocabularyItem {
  word: {
    original: string;
    translated: string;
    pashto: string;
  };
  partOfSpeech: string;
  definition: {
    original: string;
    translated: string;
    pashto: string;
  };
  usage: string;
}

export interface Content {
  metadata: {
    bookId: string;
    grade: number;
    subject: {
      id: number;
      name: string;
    };
    unit: {
      id: number;
      name: string;
      theme: string;
    };
    difficulty_level: string;
  };
  sentences: Sentence[];
  vocabulary: VocabularyItem[];
  grammar: {
    concepts: GrammarConcept[];
  };
  learning_aids: LearningAid;
  metadata_tags: MetadataTags;
  version_control: VersionControl;
}