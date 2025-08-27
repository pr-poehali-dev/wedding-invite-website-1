import { MapPin, Clock, Calendar, Users, Music, Camera, Gift } from 'lucide-react';

const DetailsPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Детали свадьбы
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Всё, что нужно знать о нашем празднике
          </p>
        </div>

        {/* Main Event Info */}
        <div className="bg-gradient-to-r from-pink-100 via-rose-100 to-red-100 rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Основная информация
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-pink-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Дата</h3>
              <p className="text-lg">30 августа 2025</p>
              <p className="text-sm text-gray-600">Суббота</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-pink-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Время</h3>
              <p className="text-lg">16:20</p>
              <p className="text-sm text-gray-600">Не опаздывайте!</p>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-pink-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Место</h3>
              <p className="text-lg">Сова</p>
              <p className="text-sm text-gray-600">Легендарное место</p>
            </div>
          </div>
        </div>

        {/* Important Rules */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Dress Code */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-pink-500 mr-3" />
              <h3 className="text-2xl font-semibold">Дресс-код</h3>
            </div>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-800 mb-2">ДРЕССКОДА НЕТ!</p>
              <p className="text-green-700">
                Приходите в чём удобно, главное — ваше присутствие! 🎉
              </p>
            </div>
          </div>

          {/* Food & Drinks */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200 shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🍻</span>
              <h3 className="text-2xl font-semibold">Еда и напитки</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 text-center">
                <p className="text-blue-800 font-bold">Пить МНОГО! 🍺</p>
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 text-center">
                <p className="text-orange-800 font-bold">Есть мало 🥗</p>
              </div>
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center">
                <p className="text-yellow-800 font-bold">Грушу бить! 🍐</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Warning */}
        <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-2xl p-8 mb-12 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-3xl font-bold text-red-800 mb-4">
            ВНИМАНИЕ!
          </h3>
          <p className="text-2xl text-red-700 font-semibold mb-2">
            ВЫ СИЛЬНО ВСЕ ОФИГЕЕТЕ!
          </p>
          <p className="text-lg text-red-600">
            Готовьтесь к самому незабываемому празднику! 🎊
          </p>
        </div>

        {/* Activities */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <Music className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Музыка и танцы</h3>
            <p className="text-gray-600">
              Готовьтесь отрываться на танцполе! 
              Будет жарко! 🔥
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <Camera className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Фотосессия</h3>
            <p className="text-gray-600">
              Много красивых фотографий 
              на память! 📸
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <Gift className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Сюрпризы</h3>
            <p className="text-gray-600">
              Приготовили много 
              неожиданностей! 🎁
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Остались вопросы?</h3>
          <p className="text-lg text-gray-600 mb-4">
            Звоните, пишите — всегда рады помочь!
          </p>
          <div className="space-y-2">
            <p className="text-lg"><strong>Паша:</strong> всегда на связи 📱</p>
            <p className="text-lg"><strong>Катя:</strong> тоже всегда на связи 💬</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Мы очень ждём вас!
            </h2>
            <p className="text-xl">
              Этот день станет особенным благодаря каждому из вас! 💕
            </p>
            <div className="text-6xl mt-4">🎉💖🎊</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;