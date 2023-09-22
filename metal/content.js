// content.js

// Function to modify the table
function modifyTable() {
    // Find the table with the specified id
    const table = document.querySelector("#houseTotals");
  
    if (table) {
      // Find the "Metal" row and update its value
      const metalRow = table.querySelector("tr:nth-child(1) td:nth-child(3)");
      if (metalRow) {
        metalRow.textContent = "metal is the best";
      }
    }
    
    
  }
  
  // Run the modification when the page loads
  modifyTable();
  