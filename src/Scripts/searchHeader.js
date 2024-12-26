const searchInput = document.getElementById("SearchBar");
searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        searchHeader()
    }
})

function searchHeader() {
    const searchText = document.getElementById("SearchBar").value.toLowerCase();  // Pega o texto na barra de pesquisa do header e transforma em lowercase (minúsculo)
    const pagina1 = [
        "página01",
        "página 01",
        "página1",
        "página 1",
        "pagina01",
        "pagina 01",
        "pagina1",
        "pagina 1",
        "page01",
        "page 01",
        "page1",
        "page 1",
        "item 01",
        "item01",
        "item1",
        "item 1"
    ];
    const pagina2 = [
        "página02",
        "página 02",
        "página2",
        "página 2",
        "pagina02",
        "pagina 02",
        "pagina2",
        "pagina 2",
        "page02",
        "page 02",
        "page2",
        "page 2",
        "item 02",
        "item02",
        "item2",
        "item 2"
    ];
    const pagina3 = [
        "página03",
        "página 03",
        "página3",
        "página 3",
        "pagina03",
        "pagina 03",
        "pagina3",
        "pagina 3",
        "page03",
        "page 03",
        "page3",
        "page 3",
        "item 03",
        "item03",
        "item3",
        "item 3"
    ];
    
    if (searchText == "home"){
        window.location.href = "/index.html";
    }else if (pagina1.includes(searchText)){
        window.location.href = "/src/Pages/page1.html";
    }else if (pagina2.includes(searchText)){
        window.location.href = "/src/Pages/page2.html"
    }else if (pagina3.includes(searchText)){
        window.location.href = "/src/Pages/page3.html"
    }
}