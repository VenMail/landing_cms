import { useEffect, useState } from 'react';

export default function useNigeriaMarket() {
  const [isNigeria, setIsNigeria] = useState(false);

  useEffect(() => {
    let active = true;

    fetch('/__market', { cache: 'no-store' })
      .then(response => response.ok ? response.json() : null)
      .then(market => {
        if (active) setIsNigeria(market?.nigeria === true);
      })
      .catch(() => {
        if (active) setIsNigeria(false);
      });

    return () => { active = false; };
  }, []);

  return isNigeria;
}
