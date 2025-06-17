import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    appTitle: 'AI Language Learning Assistant',
    typeMessage: 'Type your message...',
    send: 'Send',
    thinking: 'Thinking...',
    error: 'Failed to get response from AI',
    detectLanguageTitle: 'Welcome to AI Language Learning',
    detectLanguageDescription: 'Please enter a sentence of at least 5 words in your native language to help us detect your preferred language.',
    enterWord: 'Enter a word...',
    detect: 'Detect Language',
    detecting: 'Detecting...'
  },
  nl: {
    appTitle: 'AI Taal Leer Assistent',
    typeMessage: 'Typ je bericht...',
    send: 'Verstuur',
    thinking: 'Denken...',
    error: 'Kon geen reactie van AI krijgen',
    detectLanguageTitle: 'Welkom bij AI Taal Leren',
    detectLanguageDescription: 'Voer een zin van minstens 5 woorden in je moedertaal in zodat we je voorkeurstaal kunnen detecteren.',
    enterWord: 'Voer een woord in...',
    detect: 'Detecteer Taal',
    detecting: 'Detecteren...'
  },
  ar: {
    appTitle: 'مساعد تعلم اللغات بالذكاء الاصطناعي',
    typeMessage: 'اكتب رسالتك...',
    send: 'إرسال',
    thinking: 'جاري التفكير...',
    error: 'فشل في الحصول على رد من الذكاء الاصطناعي',
    detectLanguageTitle: 'مرحباً بك في تعلم اللغات بالذكاء الاصطناعي',
    detectLanguageDescription: 'الرجاء إدخال جملة من 5 كلمات على الأقل بلغتك الأم لمساعدتنا في اكتشاف لغتك المفضلة.',
    enterWord: 'أدخل كلمة...',
    detect: 'اكتشاف اللغة',
    detecting: 'جاري الاكتشاف...'
  },
  tr: {
    appTitle: 'Yapay Zeka Dil Öğrenme Asistanı',
    typeMessage: 'Mesajınızı yazın...',
    send: 'Gönder',
    thinking: 'Düşünüyor...',
    error: 'Yapay zekadan yanıt alınamadı',
    detectLanguageTitle: 'Yapay Zeka Dil Öğrenmeye Hoş Geldiniz',
    detectLanguageDescription: 'Lütfen tercih ettiğiniz dili tespit etmemize yardımcı olmak için ana dilinizde en az 5 kelimelik bir cümle girin.',
    enterWord: 'Bir kelime girin...',
    detect: 'Dili Tespit Et',
    detecting: 'Tespit Ediliyor...'
  },
  ku: {
    appTitle: 'Asîstanê Fêrbûna Zimanê AI',
    typeMessage: 'Peyama xwe binivîse...',
    send: 'Bişîne',
    thinking: 'Dixîre...',
    error: 'Ji AI re bersiv nehat girtin',
    detectLanguageTitle: 'Bi xêr hatî Fêrbûna Zimanê AI',
    detectLanguageDescription: 'Ji kerema xwe ji bo alîkariya me di tespîtkirina zimanê we de bi zimanê xwe yê zikmakî hejmarek peyvên bi qasî 5 peyvan binivîse.',
    enterWord: 'Yek peyv binivîse...',
    detect: 'Ziman Tespît Bike',
    detecting: 'Tespît dibe...'
  },
  ckb: {
    appTitle: 'یاریدەدەری فێربوونی زمانی AI',
    typeMessage: 'پەیامەکەت بنووسە...',
    send: 'ناردن',
    thinking: 'بیردەکاتەوە...',
    error: 'وەڵام لە AI وەرنەگیرا',
    detectLanguageTitle: 'بەخێربێیت بۆ فێربوونی زمانی AI',
    detectLanguageDescription: 'تکایە بۆ یارمەتیدانمان لە دۆزینەوەی زمانی پێویستت، لانیکەم ٥ وشە بە زمانی دایکت بنووسە.',
    enterWord: 'وشەیەک بنووسە...',
    detect: 'زمان دۆزینەوە',
    detecting: 'دۆزینەوە دەکرێت...'
  },
  ti: {
    appTitle: 'AI ቋንቋ መማሪያ ሓጋዚ',
    typeMessage: 'መልእኽትኩም ይጻሕፉ...',
    send: 'ላክ',
    thinking: 'ይሓስብ ኣሎ...',
    error: 'ካብ AI መልሲ ክርከብ ኣይከኣለን',
    detectLanguageTitle: 'ናብ AI ቋንቋ መማሪያ እንቋዕ ብደሓን መጻእኩም',
    detectLanguageDescription: 'ቋንቋኹም ንኽንርኢ ንኽንሕግዘኩም ኣብ ቋንቋኹም ካብ 5 ቃላት ዝዛይዙ ሓረጋት ክትጽሕፉ ብኽብረት',
    enterWord: 'ሓንቲ ቃል ይጻሕፉ...',
    detect: 'ቋንቋ ርኸብ',
    detecting: 'ይርኸብ ኣሎ...'
  },
  so: {
    appTitle: 'Caawiyaha Barashada Luuqadda AI',
    typeMessage: 'Fariin aad qortay...',
    send: 'Dir',
    thinking: 'Fikir...',
    error: 'Jawaab ka helitaanka AI-ga waa la fashilmay',
    detectLanguageTitle: 'Ku soo dhaweeyay Barashada Luuqadda AI',
    detectLanguageDescription: 'Fadlan geli jumlo ugu yaraan 5 eray ah oo ku qoran luuqaddaada hooyo si aad noo caawiso inaan ogaano luuqadda aad dooran karto.',
    enterWord: 'Geli eray...',
    detect: 'Luuqadda Raadi',
    detecting: 'Raadinaya...'
  },
  es: {
    appTitle: 'Asistente de Aprendizaje de Idiomas con IA',
    typeMessage: 'Escribe tu mensaje...',
    send: 'Enviar',
    thinking: 'Pensando...',
    error: 'Error al obtener respuesta de la IA',
    detectLanguageTitle: 'Bienvenido al Aprendizaje de Idiomas con IA',
    detectLanguageDescription: 'Por favor, ingresa una oración de al menos 5 palabras en tu idioma nativo para ayudarnos a detectar tu idioma preferido.',
    enterWord: 'Ingresa una palabra...',
    detect: 'Detectar Idioma',
    detecting: 'Detectando...'
  },
  ur: {
    appTitle: 'AI زبان سیکھنے کا معاون',
    typeMessage: 'اپنا پیغام ٹائپ کریں...',
    send: 'بھیجیں',
    thinking: 'سوچ رہا ہے...',
    error: 'AI سے جواب حاصل کرنے میں ناکام',
    detectLanguageTitle: 'AI زبان سیکھنے میں خوش آمدید',
    detectLanguageDescription: 'براہ کرم اپنی مادری زبان میں کم از کم 5 الفاظ کا جملہ درج کریں تاکہ ہم آپ کی پسندیدہ زبان کا پتہ لگا سکیں۔',
    enterWord: 'ایک لفظ درج کریں...',
    detect: 'زبان کا پتہ لگائیں',
    detecting: 'پتہ لگا رہا ہے...'
  },
  fa: {
    appTitle: 'دستیار یادگیری زبان هوش مصنوعی',
    typeMessage: 'پیام خود را بنویسید...',
    send: 'ارسال',
    thinking: 'در حال فکر کردن...',
    error: 'دریافت پاسخ از هوش مصنوعی ناموفق بود',
    detectLanguageTitle: 'به یادگیری زبان هوش مصنوعی خوش آمدید',
    detectLanguageDescription: 'لطفاً یک جمله حداقل 5 کلمه‌ای به زبان مادری خود وارد کنید تا به ما در تشخیص زبان مورد نظر شما کمک کند.',
    enterWord: 'یک کلمه وارد کنید...',
    detect: 'تشخیص زبان',
    detecting: 'در حال تشخیص...'
  },
  bn: {
    appTitle: 'AI ভাষা শিক্ষা সহায়ক',
    typeMessage: 'আপনার বার্তা টাইপ করুন...',
    send: 'পাঠান',
    thinking: 'চিন্তা করছে...',
    error: 'AI থেকে প্রতিক্রিয়া পাওয়া ব্যর্থ হয়েছে',
    detectLanguageTitle: 'AI ভাষা শিক্ষায় স্বাগতম',
    detectLanguageDescription: 'আপনার পছন্দের ভাষা সনাক্ত করতে আমাদের সাহায্য করার জন্য অনুগ্রহ করে আপনার মাতৃভাষায় কমপক্ষে 5টি শব্দের একটি বাক্য লিখুন।',
    enterWord: 'একটি শব্দ লিখুন...',
    detect: 'ভাষা সনাক্ত করুন',
    detecting: 'সনাক্ত করা হচ্ছে...'
  },
  zh: {
    appTitle: 'AI语言学习助手',
    typeMessage: '输入您的消息...',
    send: '发送',
    thinking: '思考中...',
    error: '获取AI回复失败',
    detectLanguageTitle: '欢迎使用AI语言学习',
    detectLanguageDescription: '请输入至少5个单词的句子，用您的母语帮助我们检测您偏好的语言。',
    enterWord: '输入一个单词...',
    detect: '检测语言',
    detecting: '检测中...'
  },
  am: {
    appTitle: 'AI ቋንቋ መማሪያ ሓጋዚ',
    typeMessage: 'መልእኽትኩም ይጻሕፉ...',
    send: 'ላክ',
    thinking: 'ይሓስብ ኣሎ...',
    error: 'ካብ AI መልሲ ክርከብ ኣይከኣለን',
    detectLanguageTitle: 'ናብ AI ቋንቋ መማሪያ እንቋዕ ብደሓን መጻእኩም',
    detectLanguageDescription: 'ቋንቋኹም ንኽንርኢ ንኽንሕግዘኩም ኣብ ቋንቋኹም ካብ 5 ቃላት ዝዛይዙ ሓረጋት ክትጽሕፉ ብኽብረት',
    enterWord: 'ሓንቲ ቃል ይጻሕፉ...',
    detect: 'ቋንቋ ርኸብ',
    detecting: 'ይርኸብ ኣሎ...'
  },
  ru: {
    appTitle: 'ИИ-ассистент для изучения языков',
    typeMessage: 'Введите ваше сообщение...',
    send: 'Отправить',
    thinking: 'Думаю...',
    error: 'Не удалось получить ответ от ИИ',
    detectLanguageTitle: 'Добро пожаловать в изучение языков с ИИ',
    detectLanguageDescription: 'Пожалуйста, введите предложение из как минимум 5 слов на вашем родном языке, чтобы помочь нам определить предпочитаемый язык.',
    enterWord: 'Введите слово...',
    detect: 'Определить язык',
    detecting: 'Определение...'
  },
  uk: {
    appTitle: 'Помічник з вивчення мов на основі ШІ',
    typeMessage: 'Введіть ваше повідомлення...',
    send: 'Надіслати',
    thinking: 'Думаю...',
    error: 'Не вдалося отримати відповідь від ШІ',
    detectLanguageTitle: 'Ласкаво просимо до вивчення мов з ШІ',
    detectLanguageDescription: 'Будь ласка, введіть речення з щонайменше 5 слів вашою рідною мовою, щоб допомогти нам визначити бажану мову.',
    enterWord: 'Введіть слово...',
    detect: 'Визначити мову',
    detecting: 'Визначення...'
  },
  pa: {
    appTitle: 'AI ਭਾਸ਼ਾ ਸਿੱਖਣ ਦਾ ਸਹਾਇਕ',
    typeMessage: 'ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...',
    send: 'ਭੇਜੋ',
    thinking: 'ਸੋਚ ਰਿਹਾ ਹੈ...',
    error: 'AI ਤੋਂ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਅਸਫਲ',
    detectLanguageTitle: 'AI ਭਾਸ਼ਾ ਸਿੱਖਣ ਵਿੱਚ ਸਵਾਗਤ ਹੈ',
    detectLanguageDescription: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਮਾਤ ਭਾਸ਼ਾ ਵਿੱਚ ਘੱਟੋ ਘੱਟ 5 ਸ਼ਬਦਾਂ ਦਾ ਵਾਕ ਦਰਜ ਕਰੋ ਤਾਂ ਜੋ ਅਸੀਂ ਤੁਹਾਡੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਦਾ ਪਤਾ ਲਗਾ ਸਕੀਏ।',
    enterWord: 'ਇੱਕ ਸ਼ਬਦ ਦਰਜ ਕਰੋ...',
    detect: 'ਭਾਸ਼ਾ ਦਾ ਪਤਾ ਲਗਾਓ',
    detecting: 'ਪਤਾ ਲਗਾ ਰਿਹਾ ਹੈ...'
  },
  pnb: {
    appTitle: 'AI زبان سکھن دا معاون',
    typeMessage: 'اپنا پیغام ٹائپ کرو...',
    send: 'بھیجو',
    thinking: 'سوچ رہا اے...',
    error: 'AI توں جواب حاصل کرن وچ ناکام',
    detectLanguageTitle: 'AI زبان سکھن وچ خوش آمدید',
    detectLanguageDescription: 'براہ کرم اپنی مادری زبان وچ گھٹو گھٹ 5 لفظاں دا جملہ درج کرو تاں جو اساں تہاڈی پسندیدہ زبان دا پتہ لگا سکیئے۔',
    enterWord: 'اک لفظ درج کرو...',
    detect: 'زبان دا پتہ لگاؤ',
    detecting: 'پتہ لگا رہا اے...'
  },
  bg: {
    appTitle: 'AI Асистент за Изучаване на Езици',
    typeMessage: 'Въведете съобщението си...',
    send: 'Изпрати',
    thinking: 'Мисля...',
    error: 'Неуспешно получаване на отговор от AI',
    detectLanguageTitle: 'Добре дошли в AI Изучаване на Езици',
    detectLanguageDescription: 'Моля, въведете изречение от поне 5 думи на вашия майчин език, за да ни помогнете да открием предпочитания от вас език.',
    enterWord: 'Въведете дума...',
    detect: 'Откриване на Език',
    detecting: 'Откриване...'
  }
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  const t = (key) => {
    return translations[selectedLanguage]?.[key] || translations['en'][key];
  };

  const handleLanguageDetected = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDetected(true);
  };

  return (
    <LanguageContext.Provider value={{ 
      selectedLanguage, 
      setSelectedLanguage, 
      t,
      isLanguageDetected,
      handleLanguageDetected
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 