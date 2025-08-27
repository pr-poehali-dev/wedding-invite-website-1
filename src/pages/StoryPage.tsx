import { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Heart, Zap } from 'lucide-react';

const StoryPage = () => {
  const [openChapter, setOpenChapter] = useState<number | null>(1);

  const toggleChapter = (chapter: number) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Загадочная история любви
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Правдивая история о том, как всё началось... и куда привело
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-6">
          
          {/* Chapter 1: Лера и Вика */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleChapter(1)}
              className="w-full p-6 text-left hover:bg-pink-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Eye className="h-6 w-6 text-pink-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Глава 1: Лера и Вика</h3>
                  <p className="text-gray-600">Начало загадки</p>
                </div>
              </div>
              {openChapter === 1 ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {openChapter === 1 && (
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Сначала была Лера... Потом появилась Вика... 
                    Все думали, что понимают, что происходит.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Но судьба готовила совсем другой поворот событий.
                    Никто не мог предсказать, что всё пойдёт совершенно не по плану!
                  </p>
                  <div className="text-center text-6xl my-4">🤔</div>
                  <p className="text-center text-sm text-gray-500 italic">
                    "Иногда самые очевидные вещи оказываются не такими уж очевидными..."
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 2: Арина */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleChapter(2)}
              className="w-full p-6 text-left hover:bg-pink-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🍰</span>
                <div>
                  <h3 className="text-2xl font-semibold">Глава 2: Арина немного пополнела</h3>
                  <p className="text-gray-600">Но это совершенно нормально!</p>
                </div>
              </div>
              {openChapter === 2 ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {openChapter === 2 && (
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    А тем временем наша Арина немного пополнела. 
                    И знаете что? Это абсолютно нормально! 💪
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Жизнь идёт своим чередом, люди меняются, и это прекрасно.
                    Но кто мог подумать, что именно в этот момент произойдёт самое невероятное...
                  </p>
                  <div className="text-center">
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                      Body Positivity ✨
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 3: Случайные фото */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleChapter(3)}
              className="w-full p-6 text-left hover:bg-pink-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Zap className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Глава 3: Случайные фото генералу</h3>
                  <p className="text-gray-600">Поворотный момент!</p>
                </div>
              </div>
              {openChapter === 3 ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {openChapter === 3 && (
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    И тут происходит самое загадочное! 🕵️‍♂️
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Какие-то случайные фото каким-то образом попали генералу в личку.
                    До сих пор НИКТО не знает, как это произошло!
                  </p>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium text-center">
                      🚨 ВНИМАНИЕ: НЕРАСКРЫТАЯ ТАЙНА 🚨
                    </p>
                    <p className="text-red-700 text-center text-sm mt-2">
                      Расследование продолжается...
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Но именно благодаря этому невероятному стечению обстоятельств
                    наша история любви и началась по-настоящему!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chapter 4: Паша и Катя */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-lg overflow-hidden">
            <button
              onClick={() => toggleChapter(4)}
              className="w-full p-6 text-left hover:bg-pink-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Heart className="h-6 w-6 text-red-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Глава 4: А свадьба-то с Катей!</h3>
                  <p className="text-gray-600">Счастливый финал</p>
                </div>
              </div>
              {openChapter === 4 ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {openChapter === 4 && (
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg">
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    И вот самый неожиданный поворот в нашей истории! 💕
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Пока все думали про Леру, Вику и Арину, 
                    мы с Катей потихоньку познакомились и... влюбились!
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Те самые загадочные фото генералу стали началом нашей любовной истории.
                    Иногда судьба работает самыми невероятными способами! 
                  </p>
                  <div className="text-center">
                    <div className="text-6xl mb-4">💖</div>
                    <p className="text-xl font-semibold text-pink-600">
                      И теперь мы женимся!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Мораль истории
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Жизнь полна неожиданностей, и самые невероятные повороты судьбы
            могут привести к самому прекрасному финалу! 
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Спасибо всем, кто был частью этой загадочной истории! 🙏
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;