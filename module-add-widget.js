/**
 * Module: Add Widget Button
 * Simple button to add widgets
 */

export function createAddWidgetButton(config = {}) {
  const defaults = {
    text: 'Add widget',
    icon: './assets/plus-circle-icon.svg'
  };
  
  const settings = { ...defaults, ...config };
  
  const button = document.createElement('button');
  button.className = 'add-widget-button';
  
  button.innerHTML = `
    <span class="button-text">${settings.text}</span>
    <img src="${settings.icon}" alt="" class="button-icon">
  `;
  
  // Add click handler
  button.addEventListener('click', () => {
    console.log('Add widget button clicked');
    // You can add custom actions here
  });
  
  return button;
}

// Function to show add widget button with animation
export function showAddWidgetButton(buttonElement, duration = 0) {
  buttonElement.classList.add('add-widget-button--show');
  
  if (duration > 0) {
    setTimeout(() => {
      hideAddWidgetButton(buttonElement);
    }, duration);
  }
  
  return buttonElement;
}

// Function to hide add widget button
export function hideAddWidgetButton(buttonElement) {
  buttonElement.classList.remove('add-widget-button--show');
  buttonElement.classList.add('add-widget-button--hide');
  
  setTimeout(() => {
    buttonElement.remove();
  }, 300);
}
