/**
 * Module: Account Card
 * Shows account details with activity accordion
 */

export function createAccountCard(config = {}) {
  const defaults = {
    accountType: 'Lifetime ISA',
    accountIcon: './assets/c24e8a579a2b2ee51636361bc2c6271d97fdcc49.svg',
    totalValue: '£1,304.10',
    performanceAmount: '£93',
    performancePercent: '+7.45%',
    availableToInvest: '£150.00',
    activities: [
      {
        icon: './assets/money-icon.svg',
        title: 'Purchase settled',
        description: 'Vanguard FTSE Developed World',
        amount: '-350.00',
        date: '01/09/25 6:04'
      },
      {
        icon: './assets/money-icon.svg',
        title: 'Cash deposited',
        description: null,
        amount: '+500.00',
        date: '29/08/25 16:32'
      }
    ],
    isActivityExpanded: true
  };
  
  const settings = { ...defaults, ...config };
  
  const card = document.createElement('div');
  card.className = 'account-card';
  
  card.innerHTML = `
    <div class="account-card__body">
      <!-- Header Section -->
      <div class="account-card__header">
        <div class="account-card__name">
          <div class="account-card__product">
            <img src="${settings.accountIcon}" alt="" class="icon-24">
            <p class="account-card__type">${settings.accountType}</p>
          </div>
          <p class="account-card__value">${settings.totalValue}</p>
        </div>
        <div class="performance-badge">
          <img src="./assets/78180434cea02d9b61413ebb92e7baec8321eed8.svg" alt="" class="badge-icon">
          <p class="badge-text">Up by ${settings.performanceAmount} (${settings.performancePercent})</p>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <!-- Available to Invest Section -->
      <div class="account-card__invest-section">
        <p class="available-text">Available invest: ${settings.availableToInvest}</p>
        <button class="invest-button">
          <span class="button-text">Invest</span>
          <img src="./assets/56f3550092e099b686bb50996132ea85553cb758.svg" alt="" class="icon-24">
        </button>
      </div>
      
      <div class="divider"></div>
      
      <!-- Activity Section -->
      <div class="account-card__activity">
        <div class="accordion">
          <button class="accordion-trigger" data-accordion-trigger>
            <div class="accordion-title">
              <p class="accordion-title-text">Recent activity</p>
            </div>
            <img src="./assets/caret-up-icon.svg" alt="" class="accordion-icon">
          </button>
          
          <div class="accordion-content ${settings.isActivityExpanded ? 'accordion-content--expanded' : ''}">
            ${settings.activities.map((activity, index) => `
              ${index > 0 ? '<div class="activity-divider"></div>' : ''}
              <div class="activity-item">
                <div class="activity-info">
                  <img src="${activity.icon}" alt="" class="icon-24">
                  <div class="activity-text">
                    <p class="activity-title">${activity.title}</p>
                    ${activity.description ? `<p class="activity-description">${activity.description}</p>` : ''}
                  </div>
                </div>
                <div class="activity-amount">
                  <p class="amount-value">${activity.amount}</p>
                  <p class="amount-date">${activity.date}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <button class="view-all-button">
          <span class="button-text-full">View all activity</span>
        </button>
      </div>
    </div>
  `;
  
  // Add accordion functionality
  addAccordionInteraction(card);
  
  return card;
}

// Accordion interaction
function addAccordionInteraction(cardElement) {
  const trigger = cardElement.querySelector('[data-accordion-trigger]');
  const content = cardElement.querySelector('.accordion-content');
  const icon = cardElement.querySelector('.accordion-icon');
  
  if (trigger && content) {
    trigger.addEventListener('click', () => {
      const isExpanded = content.classList.contains('accordion-content--expanded');
      
      if (isExpanded) {
        content.classList.remove('accordion-content--expanded');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.add('accordion-content--expanded');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  }
}

// Function to show account card with animation
export function showAccountCard(cardElement, duration = 0) {
  cardElement.classList.add('account-card--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hideAccountCard(cardElement);
    }, duration);
  }
  
  return cardElement;
}

// Function to hide account card
export function hideAccountCard(cardElement) {
  cardElement.classList.remove('account-card--show');
  cardElement.classList.add('account-card--hide');
  
  setTimeout(() => {
    cardElement.remove();
  }, 300);
}
