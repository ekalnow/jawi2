// Menu data organized by categories
const menuData = {
    bestSellers: {
        title: "الأكثر مبيعًا | Best Sellers",
        items: [
            {
                name: "مشكل جاوي إكسبريس (بدون شوربة)",
                description: "مشكل جاوي مكون من دندن لحم ورندن لحم ورندن دجاج ومكعبات بطاطس وفاصوليا وخضار وبيض وكفتة ومكرونة وأرز",
                price: 52.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/product/hsimg-867413"
            },
            {
                name: "مشكل الخماسي",
                description: "مشكل جاوي مكون من صنف لحم او دجاج، صنفين خضار، و صنف مقبلات مع الرز",
                price: 39.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image/1631267"
            },
            {
                name: "مشكل جاوي سريع",
                description: "مشكل جاوي سريع المكون من الدندن، رندن اللحم والدجاج والمكرونة ومكعبات البطاطس و الفاصوليا و الملفوف و البيض و كفتة البطاطس و صلصة السمبل",
                price: 52.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/18b7c0a253fa4407b84e4996457d80f4.jpg"
            }
        ]
    },
    nasiGoreng: {
        title: "ناسي قورنق | Nasi Goreng",
        items: [
            {
                name: "ناسي قورنق بالخضار",
                description: "رز مقلي على الطريقة الجاوية",
                price: 22.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image/25290104"
            },
            {
                name: "ناسي قورنق بالدجاج",
                description: "رز مقلي على الطريقة الجاوية",
                price: 36.0,
                image: "https://images.deliveryhero.io/image/hungerstation/product/image/877343"
            }
        ]
    },
    satay: {
        title: "ساتي | Satay",
        items: [
            {
                name: "ساتيه الدجاج 4 عيدان",
                description: "4 أسياخ من ساتيه الدجاج مع صوص اللوز",
                price: 23.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/menuitem/hsimg-1763957"
            },
            {
                name: "ساتي دجاج 5 اعواد",
                description: "5 اعواد من الدجاج المشوي والمغطى بصلصة الفول السوداني",
                price: 28.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/menuitem/hsimg-26053340"
            }
        ]
    },
    appetizers: {
        title: "المقبلات | Appetizers",
        items: [
            {
                name: "شوربة خضار الخاصة",
                description: "شوربة الخضار الخاصة",
                price: 5.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/menuitem/hsimg-1631293"
            },
            {
                name: "قادوقادو - صغير",
                description: "سلطة باردة من الملفوف والفاصوليا مغطاة بصلصة الفول السوداني الخاصة و قطع الكروبوك",
                price: 19.0,
                calories: 792,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/70ae8d226ab6915018c1077a51b0d7cf.jpg"
            },
            {
                name: "قادوقادو - كبير",
                description: "سلطة باردة من الملفوف والفاصوليا مغطاة بصلصة الفول السوداني الخاصة و قطع الكروبوك",
                price: 29.0,
                calories: 792,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/menuitem/hsimg-8402955"
            }
        ]
    },
    sauces: {
        title: "الصوصات | Sauces",
        items: [
            {
                name: "صوص اللوز",
                description: "صلصة شهية محضرة من الفول السوداني",
                price: 5.0,
                calories: 296
            },
            {
                name: "سمبل (حار)",
                description: "",
                price: 5.0
            }
        ]
    },
    mainDishes: {
        title: "الأطباق الرئيسية | Main Dishes",
        items: [
            {
                name: "دندن لحم",
                description: "رقائق اللحم البقري المقرمشة مع الصوص الجاوي المميز",
                price: 49.5,
                image: "https://images.deliveryhero.io/image/hungerstation/menus/menuitem/hsimg-1631282"
            },
            {
                name: "رندن اللحم",
                description: "قطع اللحم الطرية والمطهي في ايدام النارجيل والبهارات (300 جرام)",
                price: 38.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/ede0654ba4f7ce057278771b6cbc1479.jpg"
            },
            {
                name: "كيسب دجاج",
                description: "قطع الدجاج المطهية في الايدام الحلو والمالح (300 جرام)",
                price: 38.0,
                image: "https://images.deliveryhero.io/image/hungerstation/menuitem/image_url_ref/64e5f8e1b14695382960e7bb14d653a2.jpg"
            }
        ]
    }
};

// Function to generate menu HTML
function generateMenuHTML() {
    const menuContainer = document.getElementById('menu-content');
    if (!menuContainer) return;

    Object.values(menuData).forEach((category, categoryIndex) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-16';
        categorySection.innerHTML = `
            <h3 class="text-2xl font-bold mb-8 text-primary" data-aos="fade-up">${category.title}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${category.items.map((item, index) => `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2" 
                         data-aos="fade-up" data-aos-delay="${index * 100}">
                        ${item.image ? `
                            <img src="${item.image}" alt="${item.name}" class="w-full h-56 object-cover">
                        ` : ''}
                        <div class="p-6">
                            <h4 class="text-xl font-bold mb-2">${item.name}</h4>
                            ${item.description ? `
                                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                            ` : ''}
                            <div class="flex justify-between items-center">
                                <span class="text-primary font-bold text-lg">${item.price.toFixed(2)} ريال</span>
                                ${item.calories ? `
                                    <span class="text-sm text-gray-500">${item.calories} سعرة حرارية</span>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        menuContainer.appendChild(categorySection);
    });
}

// Initialize menu when the DOM is loaded
window.addEventListener('load', function() {
    console.log('Initializing menu...');
    try {
        generateMenuHTML();
        console.log('Menu generated successfully');
    } catch (error) {
        console.error('Error generating menu:', error);
    }
});

// Make sure AOS is initialized
window.addEventListener('load', function() {
    AOS.init({
        duration: 800,
        once: true
    });
});
