import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/img/577cfc84-7e29-4f17-a440-2f15d69fcdc6.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-blue-600/20 to-purple-600/20" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Корпоративные Решения
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Объединяем Москву и Пекин через инновационные бизнес-решения в стиле
            street art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              Наши Услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
            >
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Наши Услуги
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Креативные решения для вашего бизнеса в международном масштабе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Icon name="Spray" size={32} className="text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-orange-400">
                  Street Art
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Создаём уникальные корпоративные граффити и стрит-арт проекты
                  для офисов и общественных пространств
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Icon name="Building" size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-blue-400">
                  Урбанистика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Архитектурные решения, объединяющие традиции Москвы и Пекина в
                  современном городском пространстве
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Icon name="Palette" size={32} className="text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-purple-400">
                  Брендинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Разработка фирменного стиля с элементами street art для
                  международных компаний
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Портфолио
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Примеры наших работ на стыке корпоративного дизайна и street art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="/img/e55a0b92-db14-486f-a5a7-aab2dcebbd1b.jpg"
                alt="Корпоративные услуги в стиле граффити"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Корпоративные Услуги
                  </h3>
                  <p className="text-gray-300">
                    Визуализация бизнес-процессов через street art
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="/img/430b2604-39fe-4406-bc53-9b29f198b76d.jpg"
                alt="Абстрактный граффити фон"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Абстрактный Дизайн
                  </h3>
                  <p className="text-gray-300">
                    Геометрические паттерны в корпоративном стиле
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Готовы создать что-то уникальное? Обсудим ваш проект
            </p>
          </div>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-purple-400">
                Оставьте заявку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
                  >
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Icon
              name="Instagram"
              size={24}
              className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors"
            />
            <Icon
              name="Twitter"
              size={24}
              className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
            />
            <Icon
              name="Facebook"
              size={24}
              className="text-gray-400 hover:text-purple-400 cursor-pointer transition-colors"
            />
          </div>
          <p className="text-gray-400">
            © 2024 Корпоративные Решения. Объединяем Москву и Пекин через
            искусство.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
