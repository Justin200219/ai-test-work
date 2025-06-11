const axios = require('axios');

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
  ur: ['میں', 'کا', 'کی', 'کے', 'سے', 'پر', 'میں', 'ہے', 'ہیں', 'تھا', 'تھی', 'تھے', 'ہو', 'ہوتی', 'ہوتا', 'ہوتے', 'کر', 'کرتا', 'کرتی', 'کرتے'],
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
      const { message, model = 'llama3', language = 'en' } = request.body;
      
      // Add language context to the prompt
      let languagePrompt;
      if (language === 'nl') {
        languagePrompt = `Please respond in Dutch. Here is the user's message: ${message}`;
      } else {
        languagePrompt = `Please answer first in ${language}, then provide a Dutch translation. Here is the user's message: ${message}`;
      }
      
      const response = await axios.post('http://localhost:11434/api/generate', {
        model: model,
        prompt: languagePrompt,
        stream: false
      });

      return {
        success: true,
        response: response.data.response
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