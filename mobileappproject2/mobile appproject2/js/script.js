// script.js - Main JavaScript file for the SalesPro Inventory App
// Authors: [Your Name], [Group Member 2], [Group Member 3]
// Date: [Current Date]

// =====================
// GLOBAL FUNCTIONS
// =====================

// Update date and time display
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeStr = now.toLocaleDateString('en-US', options);
    
    document.querySelectorAll('.date-time').forEach(el => {
        el.textContent = dateTimeStr;
    });
}

// Handle logout functionality
function setupLogout() {
    document.getElementById('logout-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Logout successful! Returning to login page.');
        window.location.href = 'login.html';
    });
}

// Initialize modal windows
function initModals() {
    // Close modals when X is clicked
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// =====================
// PAGE-SPECIFIC FUNCTIONS
// =====================

// Login Page
function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Toggle between login and register forms
    document.getElementById('showRegister')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    document.getElementById('showLogin')?.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Login form submission
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Demo credentials
        if (username === 'admin' && password === 'password') {
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials. Use admin/password for demo.');
        }
    });

    // Registration form submission
    registerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        alert('Registration successful! Please login.');
        registerForm.reset();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
}

// Dashboard Page
function initDashboard() {
    // Sample data updates
    setInterval(() => {
        document.getElementById('todaysSales').textContent = 
            '$' + (Math.random() * 1000 + 3000).toFixed(2);
    }, 5000);
}

// Products Page
function initProductsPage() {
    // Open add product modal
    document.getElementById('addProductBtn')?.addEventListener('click', () => {
        document.getElementById('addProductModal').style.display = 'block';
    });

    // Product form submission
    document.getElementById('productForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Product added successfully!');
        e.target.reset();
        document.getElementById('addProductModal').style.display = 'none';
    });
}

// Inventory Page
function initInventoryPage() {
    // Open add stock modal
    document.getElementById('addStockBtn')?.addEventListener('click', () => {
        document.getElementById('addStockModal').style.display = 'block';
    });

    // Stock form submission
    document.getElementById('stockForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Stock added successfully!');
        e.target.reset();
        document.getElementById('addStockModal').style.display = 'none';
    });
}

// Contact Page
function initContactPage() {
    // Contact form submission
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will respond soon.');
        e.target.reset();
    });

    // Feedback submission
    document.getElementById('submitFeedback')?.addEventListener('click', () => {
        const rating = document.querySelector('input[name="rating"]:checked');
        if (!rating) {
            alert('Please select a rating');
            return;
        }
        alert(`Thank you for your ${rating.value} star rating!`);
        document.getElementById('feedbackComments').value = '';
        document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
    });
}

// =====================
// INITIALIZATION
// =====================

document.addEventListener('DOMContentLoaded', function() {
    // Common functionality
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update time every minute
    setupLogout();
    initModals();

    // Page-specific initialization
    const path = window.location.pathname.split('/').pop();
    
    if (path === 'login.html' || path === '') {
        initLoginPage();
    } else if (path === 'index.html') {
        initDashboard();
    } else if (path === 'products.html') {
        initProductsPage();
    } else if (path === 'inventory.html') {
        initInventoryPage();
    } else if (path === 'contact.html') {
        initContactPage();
    }
});