const currencyFormat = (currency: number) => {
  const num = +currency;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(num);
};


export default currencyFormat;