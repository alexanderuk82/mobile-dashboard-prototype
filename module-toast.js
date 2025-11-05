/**
 * Module: Toast Notification
 * Two types: Warning toast and Info toast
 */

export function createToast(type = 'warning', config = {}) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const defaults = {
    warning: {
      icon: './assets/5f22a6cc72065b93fb86a48783584224420dae05.svg',
      title: 'A corporate action requires your response',
      description: null,
      buttonText: 'View',
      buttonIcon: null
    },
    info: {
      icon: './assets/e9d511cfd83141b2cf7d87376fd4cb26bfaaff9d.svg',
      title: 'Get your money growing monthly',
      description: 'Set-up a direct debit to make regular investments.',
      buttonText: null,
      buttonIcon: './assets/1304bf115ea91181b6a5c8c2a3e85deb6405ede9.svg'
    }
  };
  
  const settings = { ...defaults[type], ...config };
  
  toast.innerHTML = `
    <div class="toast__content">
      <div class="toast__item">
        <img src="${settings.icon}" alt="" class="toast__icon">
        <div class="toast__text">
          <p class="toast__title">${settings.title}</p>
          ${settings.description ? `<p class="toast__description">${settings.description}</p>` : ''}
        </div>
      </div>
      <div class="toast__action">
        ${settings.buttonText ? `
          <button class="toast__button">
            <span class="button-text">${settings.buttonText}</span>
          </button>
        ` : ''}
        ${settings.buttonIcon ? `
          <button class="toast__icon-button" aria-label="Close">
            <img src="${settings.buttonIcon}" alt="" class="icon-24">
          </button>
        ` : ''}
      </div>
    </div>
  `;
  
  return toast;
}

// Helper function to create warning toast
export function createWarningToast(title, buttonText = 'View') {
  return createToast('warning', { title, buttonText });
}

// Helper function to create info toast
export function createInfoToast(title, description, buttonIcon) {
  return createToast('info', { title, description, buttonIcon });
}

// Function to show toast with animation
export function showToast(toastElement, duration = 5000) {
  toastElement.classList.add('toast--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hideToast(toastElement);
    }, duration);
  }
  
  return toastElement;
}

// Function to hide toast
export function hideToast(toastElement) {
  toastElement.classList.remove('toast--show');
  toastElement.classList.add('toast--hide');
  
  setTimeout(() => {
    toastElement.remove();
  }, 300);
}
