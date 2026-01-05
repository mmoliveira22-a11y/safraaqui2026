
import React, { useState } from 'react';
import Landing from './pages/Landing';
import Register from './pages/Register';
import NewOrder from './pages/NewOrder';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import Rating from './pages/Rating';
import ChatBot from './components/ChatBot';
import { AppState } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppState>('landing');
  const [userRole, setUserRole] = useState<'produtor' | 'prestador'>('produtor');

  const navigate = (page: AppState) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleStartAs = (role: 'produtor' | 'prestador') => {
    setUserRole(role);
    navigate('register');
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#1a1814] min-h-screen shadow-2xl relative overflow-x-hidden">
      {currentPage === 'landing' && <Landing onStart={handleStartAs} />}
      {currentPage === 'register' && <Register onComplete={() => navigate('new-order')} onBack={() => navigate('landing')} />}
      {currentPage === 'new-order' && <NewOrder onSubmit={() => navigate('matches')} onCancel={() => navigate('landing')} />}
      {currentPage === 'matches' && <Matches onSelectProvider={() => navigate('profile')} onBack={() => navigate('new-order')} />}
      {currentPage === 'profile' && <Profile onBack={() => navigate('matches')} onFinish={() => navigate('rating')} />}
      {currentPage === 'rating' && <Rating onComplete={() => navigate('landing')} />}
      
      {/* Botão Global de Chat com IA Pro */}
      <ChatBot />
    </div>
  );
};

export default App;
