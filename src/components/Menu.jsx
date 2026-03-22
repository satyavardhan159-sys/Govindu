import { useState, useEffect } from 'react';

const Menu = ({ selectedCategory = 'starters' }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const menuCategories = {
    starters: {
      title: 'Starters',
      items: [
        { name: 'Chicken 65', description: 'Spicy, deep-fried chicken bites with Andhra spices', price: '₹180', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Pani Puri', description: 'Crispy puris filled with spiced water and chutneys', price: '₹120', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Stuffed Mushrooms', description: 'Mushroom caps filled with paneer and spices', price: '₹160', image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Shrimp Cocktail', description: 'Fresh shrimp with tangy Andhra-style marinade', price: '₹220', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Pakora Platter', description: 'Assorted vegetable fritters with chutney', price: '₹140', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Mirchi Bajji', description: 'Spicy chili fritters from Telangana cuisine', price: '₹100', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
      ]
    },
    rice: {
      title: 'Rice Varieties',
      items: [
        { name: 'Mutton Biryani', description: 'Fragrant basmati rice with tender mutton and spices', price: '₹280', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Mutton Ghee Roast Biryani', description: 'Mutton biryani with ghee-roasted spices', price: '₹320', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Chicken Biryani', description: 'Aromatic rice with marinated chicken', price: '₹250', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Sambar Rice', description: 'Rice mixed with traditional South Indian sambar', price: '₹150', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Dal Rice', description: 'Rice served with seasoned lentils', price: '₹130', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Veg Biryani', description: 'Mixed vegetable biryani with nuts and spices', price: '₹200', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
      ]
    },
    mains: {
      title: 'Main Courses',
      items: [
        { name: 'Andhra Chicken Curry', description: 'Spicy chicken curry with Andhra spices', price: '₹240', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Mutton Curry', description: 'Tender mutton in rich Telangana-style curry', price: '₹280', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Paneer Butter Masala', description: 'Creamy paneer curry with butter and spices', price: '₹220', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Fish Pulusu', description: 'Tangy fish curry from Andhra cuisine', price: '₹260', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Chana Masala', description: 'Spiced chickpea curry', price: '₹180', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Palak Paneer', description: 'Spinach and paneer curry', price: '₹200', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
      ]
    },
    icecreams: {
      title: 'Ice Creams & Desserts',
      items: [
        { name: 'Gulab Jamun', description: 'Sweet dumplings in rose syrup', price: '₹80', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Ras Malai', description: 'Soft cheese in sweetened milk', price: '₹90', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Rabri', description: 'Condensed milk dessert with nuts', price: '₹100', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Kulfi', description: 'Indian ice cream with pistachios', price: '₹70', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Jalebi', description: 'Crispy, syrupy sweet spirals', price: '₹60', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Badam Halwa', description: 'Almond-based sweet dessert', price: '₹110', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
      ]
    },
    drinks: {
      title: 'Beverages',
      items: [
        { name: 'Lassi', description: 'Traditional yogurt drink (sweet/salted)', price: '₹60', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Jal Jeera', description: 'Spiced cumin lemonade', price: '₹50', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Nimbu Pani', description: 'Fresh lime water with mint', price: '₹40', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Buttermilk', description: 'Spiced yogurt drink', price: '₹45', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Fresh Coconut Water', description: 'Natural tender coconut water', price: '₹55', image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
        { name: 'Masala Chai', description: 'Spiced Indian tea', price: '₹35', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-[#E8F5E9]/80 via-[#C8E6C9]/80 to-[#A5D6A7]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B5E20] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto font-body">
            Explore our diverse menu featuring authentic Andhra & Telangana cuisine, crafted with the freshest ingredients and traditional recipes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold text-base transition-all duration-300 shadow-md border-2 cursor-pointer ${activeCategory === category ? 'bg-[#43A047] text-white border-[#43A047]' : 'bg-white text-[#1B5E20] border-[#43A047] hover:bg-[#43A047] hover:text-white'}`}
            >
              {menuCategories[category].title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories[activeCategory].items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-[#A5D6A7]/40 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-[#1B5E20] mb-2 font-heading">{item.name}</h3>
              <p className="text-[#3E2723] mb-2 font-body">{item.description}</p>
              <span className="text-lg font-bold text-[#43A047] font-heading">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;