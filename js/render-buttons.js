// Renderiza los botones de categorías desde la api de Mercado Libre:
const renderCategoryButtons = async () => {
    try{
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=241170043`);
        const data = await response.json();

        categories.push(...data.available_filters[0].values)

        categories.forEach((category) => {
            
            const btnFilterByCategory = document.createElement("button");
            btnFilterByCategory.classList.add("btn", "btn-dark", "mb-2", "btn-filter-by-category");
            
            btnFilterByCategory.innerHTML = `${category.name}`;
            
            buttonContainer.prepend(btnFilterByCategory);
        })
    }
    catch{
        // Imprimir mensaje de error en el DOM
        let div = document.createElement("div");
        div.innerHTML = `
                        <h2>Error al renderizar el catálogo</h2>
                        `
        
        buttonContainer.prepend(div);
        ;
    }
}

let categories = [];
const buttonContainer = document.getElementById("button-container");

export {renderCategoryButtons};