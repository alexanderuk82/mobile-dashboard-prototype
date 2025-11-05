/**
 * Module: Add New Account Card
 * Shows options to add new accounts
 */

export function createAddAccountCard(config = {}) {
  const defaults = {
    title: 'Add a new account?',
    options: [
      {
        icon: './assets/dollar-icon.svg',
        name: 'Open an ISA',
        description: 'Savings account with government bonus to help you buy your first home.',
        actionIcon: './assets/c56142dee0af965dd2ea90c7c9451f9018bf8230.svg'
      }
    ]
  };
  
  const settings = { ...defaults, ...config };
  
  const card = document.createElement('div');
  card.className = 'add-account-card';
  
  card.innerHTML = `
    <div class="add-account-body">
      <!-- Title Section -->
      <div class="add-account-title">
        <p class="add-account-title-text">${settings.title}</p>
      </div>
      
      <div class="divider"></div>
      
      <!-- Options List -->
      <div class="add-account-options">
        ${settings.options.map(option => `
          <div class="account-option">
            <img src="${option.icon}" alt="" class="option-icon">
            <div class="option-content">
              <p class="option-name">${option.name}</p>
              <p class="option-description">${option.description}</p>
            </div>
            <button class="option-action-button" aria-label="Add ${option.name}">
              <img src="${option.actionIcon}" alt="" class="action-icon">
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Add click handlers
  addOptionInteractions(card);
  
  return card;
}

// Add interactions to option buttons
function addOptionInteractions(cardElement) {
  const buttons = cardElement.querySelectorAll('.option-action-button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const option = e.target.closest('.account-option');
      const optionName = option.querySelector('.option-name').textContent;
      console.log('Add account option clicked:', optionName);
      // You can add custom actions here
    });
  });
}

// Function to show add account card with animation
export function showAddAccountCard(cardElement, duration = 0) {
  cardElement.classList.add('add-account-card--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hideAddAccountCard(cardElement);
    }, duration);
  }
  
  return cardElement;
}

// Function to hide add account card
export function hideAddAccountCard(cardElement) {
  cardElement.classList.remove('add-account-card--show');
  cardElement.classList.add('add-account-card--hide');
  
  setTimeout(() => {
    cardElement.remove();
  }, 300);
}
