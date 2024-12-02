import React from "react";

const Filter = ({ filter, setFilter }) => {
    const handleTitleChange = (e) => {
        setFilter({ ...filter, title: e.target.value });
    };

    const handleRatingChange = (e) => {
        setFilter({ ...filter, rating: Number(e.target.value) });
    };

    return (
        <div>
            <h2>Filtrer les films</h2>
            <input
                type="text"
                placeholder="Rechercher par titre"
                value={filter.title}
                onChange={handleTitleChange}
            />
            <input
                type="number"
                placeholder="Note minimale"
                value={filter.rating}
                onChange={handleRatingChange}
                min="0"
                max="10"
            />
        </div>
    );
};

export default Filter;
