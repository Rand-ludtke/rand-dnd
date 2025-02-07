document.addEventListener("nav", () => {
    const table = document.getElementById("sortableTable")
    const headers = table.querySelectorAll("th[data-column]")
    const filterInput = document.getElementById("tableFilter")
  
    // Sorting functionality
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const column = header.getAttribute("data-column")
        const tbody = table.querySelector("tbody")
        const rows = Array.from(tbody.querySelectorAll("tr"))
  
        const isPrice = column === "price"
        rows.sort((rowA, rowB) => {
          const valA = rowA.querySelector(`td[data-${column}]`)?.textContent.trim()
          const valB = rowB.querySelector(`td[data-${column}]`)?.textContent.trim()
  
          return isPrice
            ? parseInt(valA) - parseInt(valB) // Numeric sorting for price
            : valA.localeCompare(valB) // Alphabetical sorting
        })
  
        // Append sorted rows back into the table
        rows.forEach((row) => tbody.appendChild(row))
      })
    })
  
    // Filtering functionality
    filterInput.addEventListener("input", (event) => {
      const filterValue = event.target.value.toLowerCase()
      const rows = table.querySelectorAll("tbody tr")
  
      rows.forEach((row) => {
        const itemText = row.querySelector("td:first-child")?.textContent.toLowerCase()
        row.style.display = itemText.includes(filterValue) ? "" : "none"
      })
    })
  })
  