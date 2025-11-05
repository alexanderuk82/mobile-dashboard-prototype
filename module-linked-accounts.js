/**
 * Module: Linked Accounts
 * Shows linked accounts section with title and account details
 */

export function createLinkedAccounts(config = {}) {
  const defaults = {
    title: 'Linked accounts',
    mainAccount: {
      icon: './assets/b1b946df83ee742d845e66ce7ea3ea839491c45d.svg',
      name: 'Kenny Dixon Jr.',
      totalAmount: '£500.20'
    },
    accounts: [
      {
        name: 'Pension',
        amount: '£250.10',
        arrowIcon: './assets/a66367eb3671466050ab3064fe66329b1bfd651b.svg'
      },
      {
        name: 'Lifetime ISA',
        amount: '£250.10',
        arrowIcon: './assets/a66367eb3671466050ab3064fe66329b1bfd651b.svg'
      }
    ]
  };
  
  const settings = { ...defaults, ...config };
  
  const section = document.createElement('div');
  section.className = 'linked-accounts-section';
  
  section.innerHTML = `
    <!-- Section Title -->
    <div class="linked-accounts-title">
      <h2 class="section-heading">${settings.title}</h2>
    </div>
    
    <!-- Linked Accounts Card -->
    <div class="linked-accounts-card">
      <div class="linked-accounts-body">
        <!-- Main Account Header -->
        <div class="main-account-header">
          <div class="account-name">
            <img src="${settings.mainAccount.icon}" alt="" class="icon-24">
            <p class="account-name-text">${settings.mainAccount.name}</p>
          </div>
          <div class="vertical-divider"></div>
          <div class="account-total">
            <p class="total-amount">${settings.mainAccount.totalAmount}</p>
          </div>
        </div>
        
        <div class="divider"></div>
        
        <!-- Sub Accounts -->
        <div class="sub-accounts">
          ${settings.accounts.map((account, index) => `
            <div class="sub-account-item">
              <div class="sub-account-info">
                <p class="sub-account-name">${account.name}</p>
              </div>
              <div class="sub-account-amount">
                <p class="sub-amount">${account.amount}</p>
                <img src="${account.arrowIcon}" alt="" class="arrow-icon">
              </div>
            </div>
            ${index < settings.accounts.length - 1 ? '<div class="sub-account-divider"></div>' : ''}
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  return section;
}

// Function to show linked accounts with animation
export function showLinkedAccounts(sectionElement, duration = 0) {
  sectionElement.classList.add('linked-accounts-section--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hideLinkedAccounts(sectionElement);
    }, duration);
  }
  
  return sectionElement;
}

// Function to hide linked accounts
export function hideLinkedAccounts(sectionElement) {
  sectionElement.classList.remove('linked-accounts-section--show');
  sectionElement.classList.add('linked-accounts-section--hide');
  
  setTimeout(() => {
    sectionElement.remove();
  }, 300);
}
