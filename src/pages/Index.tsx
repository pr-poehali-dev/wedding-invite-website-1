import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream font-['Open_Sans']" 
         style={{
           backgroundImage: 'url(/img/91f06b46-22a1-41ab-8c73-aa07fa26ffe1.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundAttachment: 'fixed'
         }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Icon name="Heart" className="text-wedding-gold mx-auto mb-4" size={48} />
          </div>
          
          <h1 className="font-['Cormorant'] text-6xl md:text-8xl font-bold text-wedding-dark mb-4">
            Катя & Паша
          </h1>
          
          <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-8"></div>
          
          <p className="text-2xl text-wedding-gray font-light mb-12">
            Приглашают вас разделить радость нашего особенного дня
          </p>
        </div>
      </section>

      {/* Main Invitation Card */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 p-12 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-wedding-gold"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-wedding-gold"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-wedding-gold"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-wedding-gold"></div>
            
            <div className="text-center space-y-8">
              <div>
                <h2 className="font-['Cormorant'] text-4xl font-semibold text-wedding-dark mb-4">
                  Свадебное торжество
                </h2>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto"></div>
              </div>

              {/* Date and Time */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Calendar" className="text-wedding-gold" size={24} />
                  <span className="text-xl font-medium text-wedding-dark">30 августа 2025</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Clock" className="text-wedding-gold" size={24} />
                  <span className="text-xl font-medium text-wedding-dark">16:20</span>
                </div>
              </div>

              {/* Location */}
              <div className="bg-wedding-cream p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Icon name="MapPin" className="text-wedding-gold" size={24} />
                  <h3 className="text-xl font-semibold text-wedding-dark">Место проведения</h3>
                </div>
                <p className="text-lg text-wedding-gray">
                  Ресторан "Сова"<br />
                  ул. Ванеева, 52
                </p>
              </div>

              {/* Love Story */}
              <div className="bg-gradient-to-r from-wedding-cream to-white p-8 rounded-lg">
                <h3 className="font-['Cormorant'] text-2xl font-semibold text-wedding-dark mb-4">
                  Наша история
                </h3>
                <p className="text-wedding-gray leading-relaxed text-lg">
                  Наша история любви началась загадочно и полна неожиданных поворотов. 
                  Судьба свела нас вместе самым удивительным образом, и теперь мы готовы 
                  начать новую главу нашей жизни вместе.
                </p>
              </div>

              {/* Dress Code */}
              <div className="border-2 border-wedding-gold p-6 rounded-lg">
                <h3 className="font-['Cormorant'] text-2xl font-semibold text-wedding-dark mb-4">
                  Дресс-код
                </h3>
                <p className="text-wedding-gray text-lg">
                  Свадьба без строгого дресс-кода — приходите в том, в чём вам комфортно! 
                  Всё как у людей, с душой и весельем.
                </p>
              </div>

              {/* RSVP */}
              <div className="space-y-4">
                <h3 className="font-['Cormorant'] text-2xl font-semibold text-wedding-dark">
                  Подтверждение присутствия
                </h3>
                <p className="text-wedding-gray mb-6">
                  Пожалуйста, подтвердите своё присутствие до 25 августа
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-wedding-gold hover:bg-wedding-gold/90 text-white px-8 py-3 text-lg font-medium">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white px-8 py-3 text-lg font-medium">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rings" fallback="Heart" className="text-wedding-gold" size={32} />
          </div>
          
          <p className="font-['Cormorant'] text-3xl font-semibold text-wedding-dark mb-4">
            С любовью,
          </p>
          <p className="font-['Cormorant'] text-4xl font-bold text-wedding-gold">
            Катя & Паша
          </p>
          
          <div className="mt-8 text-wedding-gray">
            <p className="text-sm">
              Мы не можем дождаться, чтобы отпраздновать этот особенный день с вами!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;