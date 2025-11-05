/**
 * Module: Performance Card
 * Shows total portfolio value and performance
 */

export function createPerformanceCard(config = {}) {
  const defaults = {
    title: 'Your AJ Bell Total',
    totalValue: '£1,304.10',
    availableToInvest: '£150.00',
    performanceAmount: '£93',
    performancePercent: '+7.45%',
    isPositive: true
  };
  
  const settings = { ...defaults, ...config };
  
  const card = document.createElement('div');
  card.className = 'performance-card';
  
  card.innerHTML = `
    <div class="performance-card__body">
      <div class="performance-card__header">
        <p class="performance-card__title">${settings.title}</p>
        <img src="./assets/e9d511cfd83141b2cf7d87376fd4cb26bfaaff9d.svg" alt="" class="icon-24">
      </div>
      
      <p class="performance-card__value">${settings.totalValue}</p>
      
      <div class="performance-card__details">
        <p class="performance-card__available">Available to invest: ${settings.availableToInvest}</p>
        
        <div class="performance-badge">
          <img src="./assets/78180434cea02d9b61413ebb92e7baec8321eed8.svg" alt="" class="badge-icon">
          <p class="badge-text">Up by ${settings.performanceAmount} (${settings.performancePercent})</p>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Helper to update performance values
export function updatePerformanceCard(cardElement, newValues) {
  if (newValues.totalValue) {
    const valueEl = cardElement.querySelector('.performance-card__value');
    if (valueEl) valueEl.textContent = newValues.totalValue;
  }
  
  if (newValues.availableToInvest) {
    const availableEl = cardElement.querySelector('.performance-card__available');
    if (availableEl) availableEl.textContent = `Available to invest: ${newValues.availableToInvest}`;
  }
  
  if (newValues.performanceAmount || newValues.performancePercent) {
    const badgeText = cardElement.querySelector('.badge-text');
    if (badgeText) {
      badgeText.textContent = `Up by ${newValues.performanceAmount || '£93'} (${newValues.performancePercent || '+7.45%'})`;
    }
  }
}

// Function to show performance card with animation
export function showPerformanceCard(cardElement, duration = 0) {
  cardElement.classList.add('performance-card--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hidePerformanceCard(cardElement);
    }, duration);
  }
  
  return cardElement;
}

// Function to hide performance card
export function hidePerformanceCard(cardElement) {
  cardElement.classList.remove('performance-card--show');
  cardElement.classList.add('performance-card--hide');
  
  setTimeout(() => {
    cardElement.remove();
  }, 300);
}
