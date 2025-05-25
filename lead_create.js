const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Вебхук и метод
const webhookUrl = 'https://remzone.bitrix24.pl/rest/9/0noayzv7vu3bsjps/';
const createLeadUrl = `${webhookUrl}crm.lead.add`;

// Данные нового лида
const leadData = {
  fields: {
    TITLE: 'Клиент технічне обслуговування',
    NAME: 'Данило',
    SOURCE_ID: 'CALL',
    STATUS_ID: 'IN_PROCESS',
    COMMENTS: '[p]\nМасло, фільтр і ремінь клієнт надає самостійно.\n[/p]',
    CURRENCY_ID: 'PLN',
    OPPORTUNITY: '0.00',
    ASSIGNED_BY_ID: 9,
    UF_CRM_1748188937358: 'Kia',            // Марка
    UF_CRM_1748188958524: 'Optima',         // Модель
    UF_CRM_1748188976604: 'AX1894HB',       // Номер авто
    UF_CRM_1748188999091: '5XXGU4L38GG056499', // VIN
    PHONE: [
      {
        VALUE_TYPE: 'WORK',
        VALUE: '+48517208829'
      }
    ]
  }
};

// Отправка запроса
async function createLead() {
  try {
    const response = await fetch(createLeadUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });

    const result = await response.json();

    if (result.result) {
      console.log('Lead created successfully. ID:', result.result);
    } else {
      console.error('Error:', result);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
}

// Запуск
createLead();
