import React, { useState } from 'react';


const AddressForm = ({onSubmit}) => {
  const [firstLine, setFirstLine] = useState('');
  const [secondLine, setSecondLine] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();

    const address = {
      Firstline: firstLine,
      SecondLine: secondLine,
      ZipCode: zipCode,
      City: city,
      Country: country
    };

    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Line:
        <input type="text" value={firstLine} onChange={(event) => setFirstLine(event.target.value)} />
      </label>
      <label>
        Second Line:
        <input type="text" value={secondLine} onChange={(event) => setSecondLine(event.target.value)} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
      </label>
      <label>
        Country:
        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddressForm;