/**
 * Main Application Entry Point
 * Initialize and render all modules
 */

import { createHeader, updateHeaderTime } from './module-header.js';
import { createToast, showToast } from './module-toast.js';
import { createPerformanceCard, showPerformanceCard } from './module-performance.js';
import { createAccountCard, showAccountCard } from './module-account.js';
import { createLinkedAccounts, showLinkedAccounts } from './module-linked-accounts.js';
import { createAddAccountCard, showAddAccountCard } from './module-add-account.js';
import { createAddWidgetButton, showAddWidgetButton } from './module-add-widget.js';

// Initialize Application
function initApp() {
  console.log('🚀 Initializing Mobile Dashboard...');
  
  // Render Header
  renderHeader();
  
  // Render Toast Notifications and Performance Card
  renderToastsAndPerformance();
  
  console.log('✅ Mobile Dashboard initialized successfully');
}

// Render Header Module
function renderHeader() {
  const headerContainer = document.getElementById('header-container');
  const header = createHeader();
  headerContainer.appendChild(header);
  
  // Update time to current time
  updateHeaderTime(header);
  
  // Optional: Update time every minute
  setInterval(() => {
    updateHeaderTime(header);
  }, 60000);
}

// Render Toast Notifications and Performance Card
function renderToastsAndPerformance() {
  const toastContainer = document.getElementById('toast-container');
  
  // Toast 1: Warning Toast
  const warningToast = createToast('warning', {
    title: 'A corporate action requires your response',
    buttonText: 'View'
  });
  toastContainer.appendChild(warningToast);
  setTimeout(() => showToast(warningToast, 0), 100);
  
  // Performance Card (between toasts)
  const performanceCard = createPerformanceCard();
  toastContainer.appendChild(performanceCard);
  setTimeout(() => showPerformanceCard(performanceCard, 0), 150);
  
  // Toast 2: Info Toast
  const infoToast = createToast('info', {
    title: 'Get your money growing monthly',
    description: 'Set-up a direct debit to make regular investments.'
  });
  toastContainer.appendChild(infoToast);
  setTimeout(() => showToast(infoToast, 0), 200);
  
  // Create Grid Container for Cards (works for both portrait & landscape)
  const gridContainer = document.createElement('div');
  gridContainer.className = 'content-grid';
  
  // Account Card
  const accountCard = createAccountCard();
  gridContainer.appendChild(accountCard);
  setTimeout(() => showAccountCard(accountCard, 0), 250);
  
  toastContainer.appendChild(gridContainer);
  
  // Spacer / Divider before Linked Accounts
  const spacer = document.createElement('div');
  spacer.className = 'section-spacer';
  toastContainer.appendChild(spacer);
  
  // Linked Accounts Section
  const linkedAccounts = createLinkedAccounts();
  toastContainer.appendChild(linkedAccounts);
  setTimeout(() => showLinkedAccounts(linkedAccounts, 0), 300);
  
  // Spacer / Divider before Add Account Card
  const spacer2 = document.createElement('div');
  spacer2.className = 'section-spacer';
  toastContainer.appendChild(spacer2);
  
  // Create Grid Container for Bottom Cards
  const bottomGrid = document.createElement('div');
  bottomGrid.className = 'content-grid';
  
  // Add New Account Card
  const addAccountCard = createAddAccountCard();
  bottomGrid.appendChild(addAccountCard);
  setTimeout(() => showAddAccountCard(addAccountCard, 0), 350);
  
  // Add Widget Button
  const addWidgetButton = createAddWidgetButton();
  bottomGrid.appendChild(addWidgetButton);
  setTimeout(() => showAddWidgetButton(addWidgetButton, 0), 400);
  
  toastContainer.appendChild(bottomGrid);
  
  // Add click handlers to toast buttons
  addToastInteractions(toastContainer);
}

// Add interactions to toast buttons
function addToastInteractions(container) {
  const buttons = container.querySelectorAll('.toast__button, .toast__icon-button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const toast = e.target.closest('.toast');
      console.log('Toast button clicked:', toast);
      // You can add custom actions here
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
