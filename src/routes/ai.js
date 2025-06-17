const axios = require('axios');

const languageNames = {
  en: 'English',
  nl: 'Dutch',
  ar: 'Arabic',
  tr: 'Turkish',
  ku: 'Kurdish',
  ckb: 'Kurdish',
  ti: 'Tigrinya',
  so: 'Somali',
  es: 'Spanish',
  ur: 'Urdu',
  fa: 'Farsi',
  bn: 'Bengali',
  zh: 'Chinese',
  am: 'Amharic',
  ru: 'Russian',
  uk: 'Ukrainian',
  pa: 'Punjabi',
  pnb: 'Punjabi',
  bg: 'Bulgarian'
};

// Language detection helper functions
const languagePatterns = {
  es: /[áéíóúñ¿¡]/i, // Spanish specific characters
  ar: /[\u0600-\u06FF]/i, // Arabic characters
  fa: /[\u0600-\u06FF]/i, // Farsi characters
  ur: /[\u0600-\u06FF]/i, // Urdu characters
  bn: /[\u0980-\u09FF]/i, // Bengali characters
  zh: /[\u4E00-\u9FFF]/i, // Chinese characters
  ru: /[\u0400-\u04FF]/i, // Russian characters
  uk: /[\u0400-\u04FF]/i, // Ukrainian characters
  pa: /[\u0A00-\u0A7F]/i, // Punjabi (Gurmukhi) characters
  pnb: /[\u0600-\u06FF]/i, // Punjabi (Shahmukhi) characters
  ku: /[çîşûêî]/i, // Kurdish (Kurmanji) specific characters
  ckb: /[\u0600-\u06FF]/i, // Kurdish (Sorani) characters
  ti: /[\u1200-\u137F]/i, // Tigrinya characters
  so: /[dhxq]/i, // Somali specific characters
  am: /[\u1200-\u137F]/i, // Amharic characters
  tr: /[çğıöşü]/i, // Turkish specific characters
  bg: /[а-яА-Я]/i, // Bulgarian characters
};

// Enhanced common words with more entries for better accuracy
const commonWords = {
  es: ['el', 'la', 'los', 'las', 'y', 'en', 'de', 'que', 'por', 'con', 'para', 'como', 'se', 'lo', 'su', 'al', 'del', 'más', 'pero', 'o'],
  ar: ['ال', 'في', 'من', 'على', 'إلى', 'عن', 'مع', 'هذا', 'هذه', 'كان', 'هو', 'هي', 'أن', 'ما', 'لا', 'قد', 'عند', 'بين', 'حيث', 'كل'],
  fa: ['در', 'با', 'از', 'به', 'برای', 'که', 'این', 'آن', 'یا', 'هم', 'را', 'تا', 'اما', 'اگر', 'چون', 'چرا', 'چگونه', 'چه', 'کجا', 'کی'],
  ur: ['میں', 'کا', 'کی', 'کے', 'سے', 'پر', 'میں', 'ہے', 'ہیں', 'تھا', 'تھی', 'تھے', 'ہو', 'ہوتی', 'ہوتا', 'ہوتے'],
  bn: ['এবং', 'এর', 'এ', 'হয়', 'করে', 'যে', 'এই', 'সে', 'আমি', 'তুমি', 'আমরা', 'তোমরা', 'তারা', 'সব', 'কিছু', 'কোন', 'কেমন', 'কোথায়', 'কখন', 'কেন'],
  zh: ['的', '是', '在', '了', '和', '我', '你', '他', '她', '它', '们', '这', '那', '有', '不', '也', '就', '都', '要', '会'],
  ru: ['и', 'в', 'не', 'на', 'я', 'что', 'с', 'по', 'это', 'от', 'к', 'у', 'для', 'о', 'при', 'до', 'за', 'из', 'под', 'над'],
  uk: ['і', 'в', 'не', 'на', 'я', 'що', 'з', 'по', 'це', 'від', 'до', 'у', 'для', 'про', 'при', 'до', 'за', 'з', 'під', 'над'],
  pa: ['ਅਤੇ', 'ਦਾ', 'ਦੀ', 'ਦੇ', 'ਨੂੰ', 'ਵਿੱਚ', 'ਹੈ', 'ਨੇ', 'ਇਹ', 'ਉਹ', 'ਮੈਂ', 'ਤੂੰ', 'ਅਸੀਂ', 'ਤੁਸੀਂ', 'ਉਹ', 'ਸਾਰੇ', 'ਕੁਝ', 'ਕੋਈ', 'ਕਿਵੇਂ', 'ਕਿੱਥੇ'],
  pnb: ['تے', 'دا', 'دی', 'دے', 'نوں', 'وچ', 'اے', 'نے', 'ایہ', 'اوہ', 'میں', 'توں', 'اساں', 'تسی', 'اوہ', 'سارے', 'کجھ', 'کوئی', 'کویں', 'کتھے'],
  ku: ['û', 'di', 'bi', 'ji', 'li', 'we', 'ye', 'ne', 'ev', 'ew', 'ez', 'tu', 'em', 'hûn', 'ew', 'hemû', 'tiştek', 'kesek', 'çawa', 'kuderê'],
  ckb: ['و', 'لە', 'بە', 'لە', 'ئەم', 'ئەو', 'هەموو', 'زۆر', 'کەم', 'باش', 'من', 'تۆ', 'ئێمە', 'ئێوە', 'ئەوان', 'هەموو', 'شتێک', 'کەسێک', 'چۆن', 'لەکوێ'],
  ti: ['ን', 'ና', 'ከ', 'ውስጥ', 'እና', 'የ', 'ነው', 'ናቸው', 'እኔ', 'አንተ', 'እኛ', 'እናንተ', 'እነሱ', 'ኩሉ', 'ነገር', 'ሰው', 'እንዴት', 'ከየት', 'ምንጊዜ', 'ለምን'],
  so: ['iyo', 'ku', 'ka', 'la', 'wa', 'waxaa', 'waxay', 'waxa', 'waxan', 'waxaan', 'an', 'ad', 'aan', 'aad', 'ay', 'dhammaan', 'wax', 'qof', 'sida', 'xagee'],
  am: ['ና', 'ን', 'ከ', 'ውስጥ', 'እና', 'የ', 'ነው', 'ናቸው', 'እኔ', 'አንተ', 'እኛ', 'እናንተ', 'እነሱ', 'ሁሉ', 'ነገር', 'ሰው', 'እንዴት', 'ከየት', 'ምንጊዜ', 'ለምን'],
  tr: ['ve', 'ile', 'için', 'bu', 'şu', 'bir', 'de', 'da', 'mi', 'mı', 'ben', 'sen', 'biz', 'siz', 'onlar', 'hepsi', 'şey', 'kimse', 'nasıl', 'nerede'],
  bg: ['и', 'в', 'на', 'с', 'за', 'от', 'по', 'е', 'са', 'не', 'аз', 'ти', 'ние', 'вие', 'те', 'всички', 'нещо', 'някой', 'как', 'къде']
};

// Language-specific word boundaries and patterns
const languageSpecificPatterns = {
  es: {
    wordBoundary: /[áéíóúñ¿¡]/i,
    commonPrefixes: ['el', 'la', 'los', 'las'],
    commonSuffixes: ['ción', 'dad', 'mente']
  },
  bg: {
    wordBoundary: /[а-яА-Я]/i,
    commonPrefixes: ['не', 'пре', 'под'],
    commonSuffixes: ['ен', 'на', 'но']
  }
  // Add more language-specific patterns as needed
};

function detectLanguageFromText(text) {
  // First check for specific character patterns
  const patternMatches = {};
  for (const [lang, pattern] of Object.entries(languagePatterns)) {
    if (pattern.test(text)) {
      patternMatches[lang] = 1;
    }
  }

  // Then check for common words with frequency
  const words = text.toLowerCase().split(/\s+/);
  const wordCounts = {};
  
  for (const [lang, commonWordsList] of Object.entries(commonWords)) {
    const count = words.filter(word => commonWordsList.includes(word)).length;
    if (count > 0) {
      wordCounts[lang] = count;
    }
  }

  // Check for language-specific patterns
  const patternScores = {};
  for (const [lang, patterns] of Object.entries(languageSpecificPatterns)) {
    let score = 0;
    if (patterns.wordBoundary.test(text)) score += 1;
    if (patterns.commonPrefixes.some(prefix => text.toLowerCase().includes(prefix))) score += 1;
    if (patterns.commonSuffixes.some(suffix => text.toLowerCase().includes(suffix))) score += 1;
    if (score > 0) patternScores[lang] = score;
  }

  // Combine scores from all methods
  const finalScores = {};
  for (const lang of Object.keys(languagePatterns)) {
    let score = 0;
    if (patternMatches[lang]) score += 2;
    if (wordCounts[lang]) score += wordCounts[lang];
    if (patternScores[lang]) score += patternScores[lang];
    if (score > 0) finalScores[lang] = score;
  }

  // Return the language with the highest score
  const detectedLang = Object.entries(finalScores)
    .sort(([,a], [,b]) => b - a)[0]?.[0];

  return detectedLang || 'en';
}

async function routes(fastify, options) {
  // Language detection endpoint
  fastify.post('/api/detect-language', async (request, reply) => {
    try {
      const { text } = request.body;
      
      // First try pattern and common word detection
      const patternDetectedLang = detectLanguageFromText(text);
      
      // Then use AI for confirmation
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama3',
        prompt: `Analyze this text and respond with ONLY the ISO 639-1 language code (e.g., 'en' for English, 'es' for Spanish, etc.). Consider both character patterns and common words. Text: "${text}"`,
        stream: false
      });

      // Extract language code from response
      const aiDetectedLang = response.data.response.trim().toLowerCase();
      
      // Validate if it's a supported language
      const supportedLanguages = [
        'en', // English
        'nl', // Dutch
        'ar', // Arabic
        'tr', // Turkish
        'ku', // Kurdish (Kurmanji)
        'ckb', // Kurdish (Sorani)
        'ti', // Tigrinya
        'so', // Somali
        'es', // Spanish
        'ur', // Urdu
        'fa', // Farsi
        'bn', // Bengali
        'zh', // Chinese
        'am', // Amharic
        'ru', // Russian
        'uk', // Ukrainian
        'pa', // Punjabi (India)
        'pnb', // Punjabi (Shahmukhi)
        'bg'  // Bulgarian
      ];

      // If both methods agree, use that language
      // If they disagree, prefer the pattern detection for non-Latin scripts
      // and AI detection for Latin scripts
      let finalLanguage;
      if (patternDetectedLang === aiDetectedLang) {
        finalLanguage = patternDetectedLang;
      } else if (patternDetectedLang && /[^\u0000-\u007F]/.test(text)) {
        // If text contains non-Latin characters, trust pattern detection
        finalLanguage = patternDetectedLang;
      } else {
        // For Latin scripts, trust AI detection
        finalLanguage = aiDetectedLang;
      }

      // Ensure the final language is supported
      const detectedLanguage = supportedLanguages.includes(finalLanguage) ? finalLanguage : 'en';

      return {
        success: true,
        language: detectedLanguage,
        confidence: {
          patternDetection: patternDetectedLang,
          aiDetection: aiDetectedLang
        }
      };
    } catch (error) {
      console.error('Error detecting language:', error);
      return reply.status(500).send({
        success: false,
        error: 'Failed to detect language'
      });
    }
  });

  fastify.post('/api/chat', async (request, reply) => {
    try {
      const { message, model = 'llama3', language = 'en', history = [] } = request.body;

      // Format conversation history for the AI
      const contextMessages = history.map(msg => {
        if (msg.role === 'user') {
          return `user: ${msg.content}`;
        } else if (msg.role === 'assistant') {
          return `assistant: ${msg.content}`;
        }
        return ''; // Should not happen with defined roles
      }).filter(line => line.length > 0).join('\n');

      // Add language context to the prompt
      function findDutchMistakes(text) {
        const dictionary = new Set([
          'ik', 'jij', 'hij', 'zij', 'wij', 'jullie', 'zij', 'ben', 'bent', 'is',
          'zijn', 'heb', 'hebt', 'heeft', 'hebben', 'een', 'de', 'het', 'huis',
          'auto', 'fiets', 'leren', 'nederlands', 'goed', 'dag', 'hallo', 'doei'
        ]);
        return text
          .toLowerCase()
          .split(/[\s,.!?]+/).filter((w) => w && !dictionary.has(w)).slice(0, 5);
      }

      const targetLanguageName = languageNames[language] || 'English'; // Get full language name for prompt
      let languagePrompt;
      const mistakes = findDutchMistakes(message);
      const misspell = mistakes.length
        ? ` Mogelijke spelfouten: ${mistakes.join(', ')}.`
        : '';

      if (language === 'nl') {
        // For Dutch only, ensure it's just one line, no fluff, no English.
        languagePrompt = `Jouw GEHELE respons moet PRECIES uit één zin bestaan. Geef een zeer kort en vriendelijk antwoord in het Nederlands op het volgende bericht.${misspell} Geen Engels. Geen andere woorden, geen introductie, geen labels, geen uitleg, geen opmerkingen. ALLEEN de Nederlandse zin.`;
      } else {
        // For other languages, ensure it's EXACTLY two lines: Dutch then translation, no fluff, no English.
        languagePrompt = `Jouw GEHELE respons moet PRECIES uit twee regels bestaan. Geef op de EERSTE regel een zeer kort en vriendelijk antwoord in het Nederlands op het volgende bericht.${misspell} Op de TWEEDE regel, geef de vertaling van *diezelfde* Nederlandse zin naar het ${targetLanguageName} (ISO 639-1 code: ${language}). Geen Engels, geen andere talen dan Nederlands en ${targetLanguageName}. Geen andere woorden, geen introductie, geen labels, geen uitleg, geen opmerkingen. ALLEEN de twee gevraagde zinnen.`;
      }

      const fullPrompt = contextMessages ? `${contextMessages}\n\n${languagePrompt} Bericht: ${message}` : `${languagePrompt} Bericht: ${message}`;

      const response = await axios.post('http://localhost:11434/api/generate', {
        model: model,
        prompt: fullPrompt,
        stream: false
      });

      // --- Post-processing to extract and clean AI response ---
      let aiRawResponse = response.data.response.trim();
      const responseLines = aiRawResponse.split('\n').map(line => line.trim()).filter(line => line.length > 0);

      let dutchResponse = '';
      let translatedResponse = '';

      if (language === 'nl') {
        // If Dutch-only, take the first clean line as Dutch response
        dutchResponse = responseLines[0] || '';
      } else {
        // If two languages, try to find Dutch and translated parts more robustly
        let potentialDutch = '';
        let potentialTranslated = '';

        // Attempt to find Dutch and translated parts based on structure and content
        // Prioritize lines that seem to be the actual content over meta-commentary
        for (const line of responseLines) {
            const lowerCaseLine = line.toLowerCase();
            if (lowerCaseLine.includes('vertaling') || lowerCaseLine.includes('translation')) {
                potentialTranslated = line.replace(/^(vertaling|translation)[:!?.]?\s*/i, '').trim();
            } else if (!potentialDutch && /[a-z]/i.test(lowerCaseLine) && lowerCaseLine.includes('hallo') && languageNames['nl']) {
                // Heuristic: if it looks like Dutch and hasn't found Dutch yet
                potentialDutch = line.trim();
            } else if (!potentialTranslated && /[^\u0000-\u007F]/.test(lowerCaseLine) && language !== 'en') {
                // Heuristic: if it contains non-Latin chars and is meant to be a non-English translation
                potentialTranslated = line.trim();
            } else if (!potentialDutch && lowerCaseLine.includes('hello') && languageNames['nl']) {
                // Fallback: If it's a common greeting in Latin script that might be Dutch
                potentialDutch = line.trim();
            }
        }

        // If still not found, take first two lines as a fallback
        dutchResponse = potentialDutch || responseLines[0] || '';
        translatedResponse = potentialTranslated || responseLines[1] || '';

        // Aggressive filter for any remaining unwanted text in both parts
        const aggressiveClean = (text, targetLang) => {
            if (!text) return '';
            let cleaned = text.replace(/^(translation|note|explanation|vertaling|nederlandstalig antwoord|here's a breakdown|breakdown)[:!?.]?\s*/i, '').trim();

            // Remove specific English phrases or meta-commentary that might still be present
            const unwantedPhrases = [
                'i kept the informal tone',
                'word order',
                'common way to ask',
                'meaning and tone',
                'breakdown of the translation',
                'similar to the english phrase',
                'conveys a sense of well-wishing',
                'used the first-person singular pronoun',
                'maintain the same level of familiarity',
                'marhaba jusatin',
                'nice to meet you',
                'it looks like you\'ve provided a dutch text!',
                'here\'s the translation into arabic',
                'what a lovely phrase!'
            ];

            // Filter sentences that contain unwanted phrases or appear to be English when target is not English
            const sentences = cleaned.split(/\s*\.\s*/).filter(s => s.trim().length > 0); // Split by period followed by space
            const filteredSentences = sentences.filter(s => {
                const lowerCaseSentence = s.toLowerCase();
                // Remove if it's explicitly an unwanted phrase
                if (unwantedPhrases.some(phrase => lowerCaseSentence.includes(phrase))) return false;

                // Aggressively remove if it looks like English and the target language is not English
                if (targetLang !== 'en' && /[a-z]/i.test(lowerCaseSentence)) {
                    // Heuristic: count common English words. If too many, likely English.
                    const englishWords = ['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'to', 'of', 'and', 'in', 'that', 'have', 'it', 'for', 'on', 'with', 'as', 'do', 'at', 'this', 'but', 'by', 'from', 'or', 'i', 'you', 'he', 'she', 'we', 'they', 'will', 'would', 'can', 'could'];
                    const wordsInSentence = lowerCaseSentence.split(/\s+/);
                    const englishWordCount = wordsInSentence.filter(word => englishWords.includes(word)).length;
                    if (englishWordCount > (wordsInSentence.length * 0.4)) {
                        return false; // Likely English, filter it out
                    }
                }
                return true;
            });

            return filteredSentences.join('. ').replace(/\s+/g, ' ').trim();
        };

        dutchResponse = aggressiveClean(dutchResponse, 'nl');
        translatedResponse = aggressiveClean(translatedResponse, language);
      }
      // --- End post-processing ---

      return {
        success: true,
        response: dutchResponse + (translatedResponse ? '\n\n' + translatedResponse : '')
      };
    } catch (error) {
      console.error('Error calling Ollama:', error);
      return reply.status(500).send({
        success: false,
        error: 'Failed to get response from Ollama'
      });
    }
  });

  // Get available models
  fastify.get('/api/models', async (request, reply) => {
    try {
      const response = await axios.get('http://localhost:11434/api/tags');
      return {
        success: true,
        models: response.data.models
      };
    } catch (error) {
      console.error('Error fetching models:', error);
      return reply.status(500).send({
        success: false,
        error: 'Failed to fetch available models'
      });
    }
  });
}

module.exports = routes; 