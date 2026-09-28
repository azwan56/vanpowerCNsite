import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const cleanHash = hash.replace('#', '');
      if (cleanHash === 'dailystock') {
        navigate('/projects/dailystock', { replace: true });
        return;
      }
      if (cleanHash === 'cmems') {
        navigate('/projects/cmems', { replace: true });
        return;
      }
      if (cleanHash === 'rgm') {
        navigate('/projects/rgm', { replace: true });
        return;
      }

      const element = document.getElementById(cleanHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, navigate]);

  return null;
}
