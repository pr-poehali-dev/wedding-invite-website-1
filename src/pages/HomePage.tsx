import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Паша <span className="text-pink-500">&</span> Катя
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            приглашают вас на свадьбу
          </p>
          
          {/* Date & Time */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 inline-block shadow-lg border border-pink-200">
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-pink-500" />
                <span className="font-medium">30 августа 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-pink-500" />
                <span className="font-medium">16:20</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-pink-500" />
                <span className="font-medium">Сова</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Photo */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <img 
              src="/img/397c0dad-cd39-49a0-b32a-e110ac7ffa93.jpg" 
              alt="Паша и Катя - романтический силуэт" 
              className="rounded-2xl shadow-2xl mx-auto max-w-md w-full"
            />
            <img 
              src="https://cdn.poehali.dev/files/47911f33-aa98-4eb6-a99e-24833b6909fb.jpg" 
              alt="Наша компания" 
              className="rounded-2xl shadow-xl mx-auto max-w-sm w-full"
            />
          </div>
        </div>

        {/* Important Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Дресс-код</h3>
            <p className="text-gray-600">
              Дресскода НЕТ! 
              <br />Приходите в чём удобно 😊
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <span className="text-4xl mb-4 block">🍺</span>
            <h3 className="text-xl font-semibold mb-2">Напитки</h3>
            <p className="text-gray-600">
              Пить МНОГО!
              <br />Будет весело 🎉
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-pink-200 shadow-lg">
            <span className="text-4xl mb-4 block">🍎</span>
            <h3 className="text-xl font-semibold mb-2">Еда</h3>
            <p className="text-gray-600">
              Есть мало, грушу бить!
              <br />И готовьтесь офигеть! 😱
            </p>
          </div>
        </div>

        {/* Navigation to other pages */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Узнайте больше о нашей истории
          </h2>
          <div className="space-x-4">
            <Link 
              to="/story" 
              className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors font-medium inline-block"
            >
              Загадочная история 🤔
            </Link>
            <Link 
              to="/details" 
              className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium inline-block"
            >
              Детали свадьбы 📝
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;