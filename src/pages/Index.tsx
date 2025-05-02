
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('appliances');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка */}
      <header className="bg-primary shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" className="text-white h-8 w-8" />
            <h1 className="text-2xl font-bold text-white">ТехноСервис</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#promo" className="text-white hover:text-gray-200 transition">Акции</a>
            <a href="#services" className="text-white hover:text-gray-200 transition">Услуги</a>
            <a href="#advantages" className="text-white hover:text-gray-200 transition">Преимущества</a>
            <a href="#about" className="text-white hover:text-gray-200 transition">О нас</a>
            <a href="#contacts" className="text-white hover:text-gray-200 transition">Контакты</a>
          </nav>
          <Button className="bg-white text-primary hover:bg-gray-100">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Позвонить
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Профессиональный ремонт техники любой сложности</h2>
            <p className="text-xl mb-8 opacity-90">Быстро, качественно, с гарантией до 1 года</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать стоимость
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Ремонт техники" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Акция */}
      <section id="promo" className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 relative z-10 shadow-xl">
            <div className="absolute -right-6 -top-6 bg-red-500 text-white font-bold py-2 px-6 rounded-full transform rotate-12 shadow-lg">
              Акция!
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-3/5 mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Бесплатный выезд и диагностика</h2>
                <p className="text-white text-lg mb-4">При заказе ремонта мастер приедет к вам и проведёт полную диагностику абсолютно бесплатно!</p>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-white text-xl font-bold">Экономия</div>
                    <div className="text-white text-lg">до 1500 ₽</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-white text-xl font-bold">Срок акции</div>
                    <div className="text-white text-lg">До 30 июня</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/5 flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Заполните форму</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-primary text-white" size="lg">
                      <Icon name="CalendarCheck" className="mr-2 h-5 w-5" />
                      Вызвать мастера
                    </Button>
                    <p className="text-sm text-gray-600">Или позвоните нам:</p>
                    <div className="text-lg font-semibold text-gray-800">+7 (999) 123-45-67</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-10">
              <Icon name="Tool" className="h-40 w-40 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'Clock', title: 'Быстрый ремонт', desc: 'Большинство устройств чиним в течение 1-2 дней' },
              { icon: 'Award', title: 'Гарантия качества', desc: 'Предоставляем гарантию на все виды работ до 12 месяцев' },
              { icon: 'Wallet', title: 'Разумные цены', desc: 'Прозрачное ценообразование без скрытых платежей' }
            ].map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition duration-300">
                <div className="bg-primary-light/20 p-3 rounded-full w-fit mb-4">
                  <Icon name={item.icon} className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы ремонтируем все виды бытовой и цифровой техники с использованием профессионального оборудования
          </p>

          <Tabs defaultValue="appliances" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="appliances">Бытовая техника</TabsTrigger>
              <TabsTrigger value="digital">Цифровая техника</TabsTrigger>
              <TabsTrigger value="other">Другие услуги</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appliances" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Ремонт холодильников', price: 'от 1200 ₽', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                  { name: 'Ремонт стиральных машин', price: 'от 900 ₽', img: 'https://images.unsplash.com/photo-1626806787461-102c1a7d1d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                  { name: 'Ремонт посудомоечных машин', price: 'от 1000 ₽', img: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                ].map((service, i) => (
                  <ServiceCard key={i} {...service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Ремонт смартфонов', price: 'от 700 ₽', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                  { name: 'Ремонт ноутбуков', price: 'от 1200 ₽', img: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true }, 
                  { name: 'Ремонт планшетов', price: 'от 800 ₽', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                ].map((service, i) => (
                  <ServiceCard key={i} {...service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Диагностика', price: 'от 500 ₽', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', promo: true },
                  { name: 'Обновление ПО', price: 'от 600 ₽', img: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
                  { name: 'Срочный ремонт', price: 'от 1500 ₽', img: 'https://images.unsplash.com/photo-1581092335397-9583eb922e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
                ].map((service, i) => (
                  <ServiceCard key={i} {...service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">О нашем сервисном центре</h2>
              <p className="text-gray-600 mb-4">
                Наш сервисный центр специализируется на ремонте бытовой и цифровой техники с 2010 года. 
                За это время мы успешно восстановили работоспособность тысяч устройств и завоевали доверие клиентов.
              </p>
              <p className="text-gray-600 mb-4">
                Мы используем только оригинальные запчасти и современное оборудование для диагностики и ремонта.
                Наши мастера регулярно проходят обучение и имеют большой опыт работы со всеми типами устройств.
              </p>
              <div className="flex space-x-8 mt-6">
                <div>
                  <p className="text-4xl font-bold text-primary">12+</p>
                  <p className="text-gray-600">лет опыта</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">5000+</p>
                  <p className="text-gray-600">ремонтов</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-gray-600">довольных клиентов</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 pl-0 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb922e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Наш сервисный центр" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-0 p-6">
              <div className="flex items-center mb-4">
                <Icon name="MapPin" className="mr-2 h-5 w-5" />
                <h3 className="text-xl font-semibold">Адрес</h3>
              </div>
              <p className="opacity-90">г. Москва, ул. Примерная, д. 123</p>
              <p className="mt-2 opacity-90">Пн-Пт: 9:00 - 20:00</p>
              <p className="opacity-90">Сб-Вс: 10:00 - 18:00</p>
            </Card>
            <Card className="bg-white/10 border-0 p-6">
              <div className="flex items-center mb-4">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                <h3 className="text-xl font-semibold">Телефон</h3>
              </div>
              <p className="text-xl font-medium opacity-90">+7 (999) 123-45-67</p>
              <p className="mt-4 opacity-90">Звоните нам в любое время, мы всегда на связи!</p>
            </Card>
            <Card className="bg-white/10 border-0 p-6">
              <div className="flex items-center mb-4">
                <Icon name="Mail" className="mr-2 h-5 w-5" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="opacity-90">info@technoservice.ru</p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="Zap" className="mr-2 h-6 w-6" />
              <p className="text-xl font-bold">ТехноСервис</p>
            </div>
            <p className="text-gray-400 text-sm">© 2025 ТехноСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Компонент карточки услуги
const ServiceCard = ({ name, price, img, promo = false }) => (
  <Card className="overflow-hidden hover:shadow-lg transition duration-300 relative">
    {promo && (
      <div className="absolute top-3 right-3 z-10">
        <Badge className="bg-yellow-500 hover:bg-yellow-600">
          <Icon name="Sparkles" className="mr-1 h-3 w-3" />
          Бесплатный выезд
        </Badge>
      </div>
    )}
    <div className="aspect-[4/3] relative">
      <img src={img} alt={name} className="object-cover w-full h-full" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-primary font-medium">{price}</p>
      <Button className="mt-3 w-full">Подробнее</Button>
    </div>
  </Card>
);

export default Index;
