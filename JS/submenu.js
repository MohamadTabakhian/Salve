function togglePanel() {
    const panel = document.getElementById('panel');
    const button = document.querySelector('.toggle-btn');
    panel.classList.toggle('open');
    button.textContent = panel.classList.contains('open') ? 'Close' : 'Create Account';
}