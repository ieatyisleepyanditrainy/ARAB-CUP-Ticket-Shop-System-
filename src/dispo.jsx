// src/dispo.jsx

import React from 'react';
import './dispo.css';

const STADIUM_MAP_IMAGE = 'https://res.cloudinary.com/drftumteo/image/upload/v1765407974/Screenshot_2025-12-10_230542_krbct7.png';

const Dispo = ({
    match,
    setActivePage,
    setIsMenuOpen,
    currentUser,
    setDarkMode,
    darkMode,
    setShowLoginModal,
}) => {

    const ticketCategories = [
        { name: 'CAT03', color: '#ff0000', price: '700 DZA', availability: 'Disponible' },
        { name: 'CAT02', color: '#ff8c00', price: '1200 DZA', availability: 'Disponible' },
        { name: 'CAT01', color: '#ffff00', price: '1800 DZA', availability: 'Disponible' },
        { name: 'VVIP', color: '#d3d3d3', price: '2500 DZA', availability: 'Disponible' },
        { name: 'VIP', color: '#ffffff', price: '4000 DZA', availability: 'Disponible' },
    ];

    const currentMatch = match || {
        team1: 'ALGERIA',
        team2: 'IRAK',
        stadium: 'Lusail Stadium',
        date: 'MAR. 9 DÉCEMBRE 2025',
        flagImage: 'https://res.cloudinary.com/drftumteo/image/upload/v1765407451/Frame_30_o9zln8.png'
    };

    const handleCategoryClick = (category) => {
        console.log(`Navigating to category: ${category.name}`);
    };

    return (
        <div className="dispo-page-wrapper">
            
            <div className="dispo-main">
                
                <div className="dispo-content-wrapper">
                    
                    <section className="dispo-left-panel">
                        <div className="abstract-line-placeholder abstract-line-left-dispo"></div>
                        <div className="abstract-line-placeholder abstract-line-right-dispo"></div>
                    </section>

                    <section className="dispo-right-panel">
                        
                        <div className="stadium-map-container">
                            
                            <img
                                src={STADIUM_MAP_IMAGE}
                                alt="Stadium Seating Map"
                                className="stadium-map-image"
                            />
                            
                            <div className="ticket-categories-legend">
                                {ticketCategories.map((cat, index) => (
                                    <button
                                        key={index}
                                        className="category-item-btn"
                                        onClick={() => handleCategoryClick(cat)}
                                    >
                                        <div className="category-color" style={{ backgroundColor: cat.color }}></div>
                                        <span className="category-name">{cat.name}</span>
                                    </button>
                                ))}
                            </div>

                            <button className="stadium-btn">
                                <span className="stadium-pin">📍</span> {currentMatch.stadium}
                            </button>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dispo;