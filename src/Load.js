import Button from 'react-bootstrap/Button';

import { useEffect,useState } from 'react';

const Load = () => {
    function simulateNetworkRequest() {
        let data = " 1 2 3 4";
        return new Promise((resolve) => setTimeout(resolve(data), 4000));
      }
      
      function LoadingButton() {
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          if (isLoading) {
            simulateNetworkRequest().then((data) => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
        const handleClick = () => setLoading(true);
      
        return (
          <Button
            className='mr-2'
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Scraping …' : 'Load Data'}
          </Button>
        );
      }
      
    return <LoadingButton />;
}

export default Load;