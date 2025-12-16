import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { categories, imageMap } from '../assets/assets';
import { AnimatePresence, motion } from 'framer-motion';

const BGSlider = () => {
    const [active, setActive] = useState("People");
    const [slider, setSlider] = useState(50);
    const { theme } = useTheme();

    const handleSliderChange = (e) => {
        setSlider(e.target.value);
    };

    const { before, after } = imageMap[active];

    return (
        <div className="mb-16 relative text-center">

            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold my-12 text-orange-400">
                Stunning Quality.
            </h2>

            {/* Category Slider */}
            <div className="flex justify-center mb-10">
                <div
                className={`grid grid-cols-4 gap-1 p-2 sm:p-2 rounded-full bg-gray-100 shadow-lg
                    w-full max-w-md mx-auto
                    ${theme === 'dark' ? 'shadow-orange-400' : ''}
                `}
                >
                    {categories.map((category) => {
                        const isActive = active === category;

                        return (
                        <button
                            key={category}
                            onClick={() => {
                            setActive(category);
                            setSlider(50);
                            }}
                            className="relative py-2 text-xs sm:text-sm md:text-base
                            font-medium rounded-full cursor-pointer
                            flex items-center justify-center"
                        >
                            {isActive && (
                            <motion.span
                                layoutId="active-pill"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="absolute inset-0 bg-white rounded-full shadow-md"
                            />
                            )}

                            <span
                            className={`relative z-10
                                ${isActive
                                ? 'text-orange-600'
                                : 'text-black hover:text-orange-400'}
                            `}
                            >
                            {category}
                            </span>
                        </button>
                        );
                    })}
                </div>
            </div>


            {/* Image Compare Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active} 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`my-12 relative w-full max-w-4xl mx-auto overflow-hidden
                    rounded-xl shadow-lg md:shadow-xl border border-orange-300
                    ${theme === 'light'
                        ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]'
                        : 'shadow-orange-400'
                    }
                    `}
                >
                    {/* Before image */}
                    <img
                    src={before}
                    alt={`${active} before`}
                    style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
                    className="w-full object-contain"
                    />

                    {/* After image */}
                    <img
                    src={after}
                    alt={`${active} after`}
                    style={{ clipPath: `inset(0 0 0 ${slider}%)` }}
                    className="absolute top-0 left-0 h-full w-full object-contain"
                    />

                    {/* Range Slider */}
                    <input
                    type="range"
                    min={0}
                    max={100}
                    value={slider}
                    onChange={handleSliderChange}
                    className="absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-full z-10 slider"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default BGSlider;
