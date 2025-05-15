
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { User, Cloud, Sprout, Tractor, BarChart4, Calendar, FileText } from 'lucide-react';

// Translation data
const translations = {
  english: {
    header: "KrushiSathi",
    subtitle: "Empowering Farmers, Enriching Agriculture",
    weather: "Weather Forecasts & Alerts",
    crop: "Crop Management",
    market: "Market Prices & Connection",
    equipment: "Farming Equipment",
    disease: "Disease Detection",
    season: "Season Tracker",
    schemes: "Government Schemes",
    buyerSeller: "Buyer / Seller",
    buyer: "Buyer",
    seller: "Seller",
    viewMore: "View More",
    weatherAlert: "Weather Alert: Rain expected in the next 24 hours in your region.",
    seasonUpdate: "Season Update: Winter crop planting season begins next week."
  },
  kannada: {
    header: "ಕೃಷಿ ಸಾಥಿ",
    subtitle: "ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು, ಕೃಷಿಯನ್ನು ಸಮೃದ್ಧಗೊಳಿಸುವುದು",
    weather: "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು & ಎಚ್ಚರಿಕೆಗಳು",
    crop: "ಬೆಳೆ ನಿರ್ವಹಣೆ",
    market: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು & ಸಂಪರ್ಕ",
    equipment: "ಕೃಷಿ ಉಪಕರಣಗಳು",
    disease: "ರೋಗ ಪತ್ತೆ",
    season: "ಋತು ಟ್ರ್ಯಾಕರ್",
    schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    buyerSeller: "ಖರೀದಿದಾರ / ಮಾರಾಟಗಾರ",
    buyer: "ಖರೀದಿದಾರ",
    seller: "ಮಾರಾಟಗಾರ",
    viewMore: "ಇನ್ನಷ್ಟು ನೋಡಿ",
    weatherAlert: "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ: ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಮುಂದಿನ 24 ಗಂಟೆಗಳಲ್ಲಿ ಮಳೆ ನಿರೀಕ್ಷೆ.",
    seasonUpdate: "ಋತು ಅಪ್ಡೇಟ್: ಮುಂದಿನ ವಾರ ಚಳಿಗಾಲದ ಬೆಳೆ ನಾಟಿ ಋತು ಆರಂಭವಾಗುತ್ತದೆ."
  }
};

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'kannada'>('english');
  const [userRole, setUserRole] = useState<'buyer' | 'seller'>('buyer');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary/10 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold">
              <span className="text-green-600">Krushi</span>
              <span className="text-amber-800">Sathi</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <ToggleGroup type="single" value={language} onValueChange={(value) => value && setLanguage(value as 'english' | 'kannada')}>
              <ToggleGroupItem value="english" aria-label="English">EN</ToggleGroupItem>
              <ToggleGroupItem value="kannada" aria-label="Kannada">ಕನ್ನಡ</ToggleGroupItem>
            </ToggleGroup>
            
            <ToggleGroup type="single" value={userRole} onValueChange={(value) => value && setUserRole(value as 'buyer' | 'seller')}>
              <ToggleGroupItem value="buyer" aria-label="Buyer">
                <User className="h-5 w-5 mr-1" />
                {t.buyer}
              </ToggleGroupItem>
              <ToggleGroupItem value="seller" aria-label="Seller">
                <User className="h-5 w-5 mr-1" />
                {t.seller}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.header}</h1>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Alert Cards */}
        <div className="mb-10 space-y-4">
          <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="py-4">
              <p className="text-amber-800">{t.weatherAlert}</p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20">
            <CardContent className="py-4">
              <p className="text-green-800">{t.seasonUpdate}</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Weather Card */}
          <Link to="/weather">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-green-50 dark:from-green-950/30 dark:to-green-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2 h-6 w-6 text-green-600" />
                  <span>{t.weather}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get real-time weather forecasts and important alerts for your farm location.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Crop Management Card */}
          <Link to="/crop-management">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-green-50 dark:from-green-950/30 dark:to-green-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sprout className="mr-2 h-6 w-6 text-green-600" />
                  <span>{t.crop}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Manage your crops with pesticide schedules and timely reminders.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Market Prices Card */}
          <Link to="/market">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/30 dark:to-amber-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart4 className="mr-2 h-6 w-6 text-amber-800" />
                  <span>{t.market}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Find current market prices and connect with buyers/sellers in your area.</p>
                <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Equipment Card */}
          <Link to="/equipment">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/30 dark:to-amber-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tractor className="mr-2 h-6 w-6 text-amber-800" />
                  <span>{t.equipment}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Rent, share, buy or sell farming equipment in your local community.</p>
                <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Disease Detection Card */}
          <Link to="/disease">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-green-50 dark:from-green-950/30 dark:to-green-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg className="mr-2 h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4Z"></path>
                    <path d="m9 10 3.5 3.5m0-7 3 3L12 13 9 9.5m8.5 8.5-3-3"></path>
                    <path d="M2 12h2m16 0h2"></path>
                    <path d="M12 2v2m0 16v2"></path>
                  </svg>
                  <span>{t.disease}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Upload photos of your crops to detect diseases and get treatment advice.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Season Tracker Card */}
          <Link to="/season">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-amber-50 dark:from-amber-950/30 dark:to-amber-900/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-6 w-6 text-amber-800" />
                  <span>{t.season}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Track seasonal changes and receive timely alerts for weather changes.</p>
                <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Government Schemes Card */}
          <Link to="/schemes">
            <Card className="hover:shadow-lg transition-all h-full bg-gradient-to-br from-white to-green-50 dark:from-green-950/30 dark:to-green-900/20 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-6 w-6 text-green-600" />
                  <span>{t.schemes}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Access information about government schemes, subsidies, and programs for farmers.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  {t.viewMore}
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      <footer className="bg-primary/10 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 
            <span className="text-green-600"> Krushi</span>
            <span className="text-amber-800">Sathi</span> - 
            {language === 'english' ? ' Empowering Farmers, Enriching Agriculture' : ' ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು, ಕೃಷಿಯನ್ನು ಸಮೃದ್ಧಗೊಳಿಸುವುದು'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
