import React from 'react'

function useAOS() {
  React.useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 2000,
        
        once: true,
      });
    });
  }, []);
}
export default useAOS
