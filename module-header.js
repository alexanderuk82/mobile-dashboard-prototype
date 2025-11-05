/**
 * Module: Header / Status Bar
 * Mobile header with time, notification counter, and system status icons
 */

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'mobile-header';
  
  header.innerHTML = `
    <div class="status-bar">
      <!-- Time Section -->
      <div class="status-bar__time">
        <span class="time-text">9:41</span>
      </div>
      
      <!-- System Status Icons -->
      <div class="status-bar__levels">
        <img src="./assets/10849250ac64e2621969129dac67b81f2193b5a3.svg" alt="Cellular" class="cellular-icon">
        <img src="./assets/662f161e9ab00fc2dd311a1fbe1fe2c4b4c391c6.svg" alt="WiFi" class="wifi-icon">
        <div class="battery-indicator">
          <div class="battery-border"></div>
          <div class="battery-cap"></div>
          <div class="battery-capacity"></div>
        </div>
      </div>
    </div>
    
    <!-- Notification Centre (Second Row) -->
    <div class="notifications-row">
      <div class="notifications-centre">
        <button class="icon-button" aria-label="Notifications">
          <img src="./assets/email-icon.svg" alt="" class="icon-16">
        </button>
        <div class="notification-counter">
          <div class="number-circle">
            <span class="counter-text">2</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return header;
}

// Auto-update time (optional)
export function updateHeaderTime(headerElement) {
  const timeElement = headerElement.querySelector('.time-text');
  if (timeElement) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
  }
}
