
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MousePointer, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FoundCharactersProps {
  foundChars: { char: string; count: number; name: string; code: string }[];
  onCharacterClick?: (char: string) => void;
}

// Characters that are generally "safe" and expected
const SAFE_CHARS = [
  '\u0009', // TAB
  '\u000A', // LINE FEED
  '\u000D', // CARRIAGE RETURN
  '\u0020', // SPACE
  '\u00A0', // NO-BREAK SPACE
  '\u2028', // LINE SEPARATOR
  '\u2029', // PARAGRAPH SEPARATOR
];

export const FoundCharacters = ({ foundChars, onCharacterClick }: FoundCharactersProps) => {
  const { t } = useLanguage();
  
  if (foundChars.length === 0) return null;

  const safeChars = foundChars.filter(char => SAFE_CHARS.includes(char.char));
  const problematicChars = foundChars.filter(char => !SAFE_CHARS.includes(char.char));

  // If only safe characters are found, show positive message
  if (problematicChars.length === 0 && safeChars.length > 0) {
    return (
      <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl animate-in fade-in scale-in duration-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center justify-center text-slate-200">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-green-300">{t('allGood')}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <p className="text-slate-400 text-sm">
            {t('onlyNormalCharacters')}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Only show problematic characters
  if (problematicChars.length === 0) return null;

  return (
    <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl animate-in fade-in scale-in duration-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center justify-between text-slate-200">
          <span className="flex items-center gap-2">
            {t('foundInvisibleChars')}
          </span>
          <Badge variant="secondary" className="bg-orange-900/40 text-orange-200 border-orange-700 px-3 py-1 font-medium backdrop-blur-sm">
            {problematicChars.length} {t('problematic')}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4 max-h-64 overflow-y-auto">
          {/* Only show problematic characters */}
          {problematicChars.map((char, index) => (
            <div 
              key={`problem-${index}`} 
              className="flex justify-between items-center p-4 bg-orange-900/10 border border-orange-700/30 rounded-lg backdrop-blur-sm hover:bg-orange-900/20 transition-all duration-200 cursor-pointer group"
              onClick={() => onCharacterClick?.(char.char)}
            >
              <div>
                <span className="font-mono text-base font-bold text-orange-300 bg-orange-800/30 px-3 py-1 rounded-md">
                  {char.code}
                </span>
                <p className="text-sm text-orange-200/80 mt-2 font-medium">{char.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className="bg-orange-900/30 text-orange-300 border-orange-700 px-4 py-2 font-bold backdrop-blur-sm"
                >
                  {char.count}×
                </Badge>
                <MousePointer className="w-4 h-4 text-orange-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
