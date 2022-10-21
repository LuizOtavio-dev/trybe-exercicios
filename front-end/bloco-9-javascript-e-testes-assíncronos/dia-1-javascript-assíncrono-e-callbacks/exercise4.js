const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperature) => {
  setTimeout(() => {
    console.log(`A temperatura de Marte é: ${temperature()} graus celsius`);
  }, messageDelay());
};

sendMarsTemperature(getMarsTemperature);