import Button from 'react-bootstrap/Button'
import { useEffect,useState } from 'react';

const Stop = () => {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 4000));
      }
      
      function StopButton() {
        const [isStoping, setStoping] = useState(false);
      
        useEffect(() => {
          if (isStoping) {
            simulateNetworkRequest().then(() => {
              setStoping(false);
            });
          }
        }, [isStoping]);
      
        const handleClick = () => setStoping(true);
      
        return (
          <Button
            variant="danger"
            disabled={isStoping}
            onClick={!isStoping ? handleClick : null}
          >
            {isStoping ? 'Stoping … ' : 'Stop'}
          </Button>
        );
      }
      
    return <StopButton />;
}

export default Stop;