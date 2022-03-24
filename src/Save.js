import Button from 'react-bootstrap/Button'
import { useEffect,useState } from 'react';

const Save = () => {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 4000));
      }
      
      function SaveButton() {
        const [isSaving, setLoading] = useState(false);
      
        useEffect(() => {
          if (isSaving) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isSaving]);
      
        const handleClick = () => setLoading(true);
      
        return (
          <Button
            variant="primary"
            disabled={isSaving}
            onClick={!isSaving ? handleClick : null}
          >
            {isSaving ? 'Saving …' : 'Save Data'}
          </Button>
        );
      }
      
    return <SaveButton />;
}

export default Save;