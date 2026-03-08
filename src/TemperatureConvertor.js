import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
      />
      <p>
        {celsius
          ? `Température saisie : ${celsius} °C`
          : 'Aucune température saisie'}
      </p>

    
</div>
  );
}

export default TemperatureConvertor;