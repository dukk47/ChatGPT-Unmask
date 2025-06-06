
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Impressum = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <div className="mb-8">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/50 border border-slate-700 backdrop-blur-sm transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backButton')}
            </Button>
          </Link>
        </div>

        <div className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-2xl rounded-lg p-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-200 via-cyan-300 to-slate-100 bg-clip-text text-transparent mb-8">
            {t('impressumTitle')}
          </h1>

          <div className="space-y-6 text-slate-300">
            <div>
              <h2 className="text-xl font-semibold text-slate-200 mb-3">{t('tmgInfo')}</h2>
              <div className="space-y-1">
                <p className="text-lg">Jonas Stempel</p>
                <p>Türnicherstraße 3</p>
                <p>50959 Köln</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-200 mb-3">{t('contactTitle')}</h2>
              <div className="space-y-1">
                <p>{t('operator')}</p>
                <p>{t('address')}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-200 mb-3">{t('disclaimerTitle')}</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-medium text-slate-300 mb-2">{t('liabilityContent')}</h3>
                  <p>
                    {t('liabilityContentText')}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-slate-300 mb-2">{t('liabilityLinks')}</h3>
                  <p>
                    {t('liabilityLinksText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
