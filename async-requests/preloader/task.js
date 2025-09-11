const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    loader.classList.remove('loader_active');
    const data = JSON.parse(xhr.responseText);
    const currencies = data.response.Valute;
    
    for(const currencyKey in currencies) {
        const currency = currencies[currencyKey];
        
        const item = document.createElement('div');
        item.className = 'item';

        const itemCode = document.createElement('div');
        itemCode.className = 'item__code';
        itemCode.textContent = currency.CharCode;

        const itemValue = document.createElement('div');
        itemValue.className = 'item__value';
        itemValue.textContent = currency.Value;

        const itemCurrency = document.createElement('div');
        itemCurrency.className = 'item__currency';
        itemCurrency.textContent = 'руб.'

        item.appendChild(itemCode);
        item.appendChild(itemValue);
        item.appendChild(itemCurrency);
        itemsContainer.appendChild(item);
    }    
  };
};
xhr.send();