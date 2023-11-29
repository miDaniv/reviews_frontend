import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ReloadOnRouteChange() {
  const history = useNavigate();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.location.reload();
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <div>
      <p>Reload the page when the route changes.</p>
    </div>
  );
}

export default ReloadOnRouteChange;