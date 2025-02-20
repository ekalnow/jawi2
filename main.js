document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    window.addEventListener('load', function() {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });

        // Hide loading screen
        document.getElementById('loader').style.display = 'none';

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-primary/95', 'backdrop-blur-sm');
            } else {
                navbar.classList.remove('bg-primary/95', 'backdrop-blur-sm');
            }
        });

        // Mobile Menu Toggle Function
        window.toggleMobileMenu = function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const hamburgerButton = document.querySelector('.hamburger-button');
            
            if (!mobileMenu || !mobileMenuOverlay || !hamburgerButton) {
                console.error('Mobile menu elements not found');
                return;
            }
            
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            hamburgerButton.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        };

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu();
                // Ensure smooth scrolling to the section
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close mobile menu when clicking overlay
        document.getElementById('mobileMenuOverlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'mobileMenuOverlay') {
                toggleMobileMenu();
            }
        });

        // Generate menu items
        function generateMenuItems() {
            const menuSection = document.querySelector('.menu-section .container');
            
            Object.entries(menuData).forEach(([category, items]) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'menu-category';
                categoryDiv.setAttribute('data-aos', 'fade-up');
                
                categoryDiv.innerHTML = `
                    <h3 class="category-title">${category}</h3>
                    <div class="menu-grid"></div>
                `;
                
                const menuGrid = categoryDiv.querySelector('.menu-grid');
                
                items.forEach(item => {
                    const menuItem = document.createElement('div');
                    menuItem.className = 'menu-item';
                    menuItem.innerHTML = `
                        <div class="item-header">
                            <div class="item-name">
                                <h4>${item.nameAr}</h4>
                                <span class="english-name">${item.nameEn}</span>
                            </div>
                            <span class="price">${item.price} ريال</span>
                        </div>
                        <p class="item-description">${item.descriptionAr}</p>
                        <p class="english-description">${item.descriptionEn}</p>
                    `;
                    menuGrid.appendChild(menuItem);
                });
                
                menuSection.appendChild(categoryDiv);
            });
        }

        // Initialize menu
        generateMenuItems();
    });
});
