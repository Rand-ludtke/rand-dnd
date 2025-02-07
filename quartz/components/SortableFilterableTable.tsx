// Import script for sorting and filtering
// @ts-ignore: Quartz inline bundling
import script from "./scripts/tableFunctions.inline"

export default (() => {
  function SortableFilterableTable() {
    return (
      <div>
        {/* Filter input */}
        <input
          type="text"
          id="tableFilter"
          placeholder="Filter items..."
          class="table-input"
        />

        {/* Table */}
        <table id="sortableTable">
          <thead>
            <tr>
              <th data-column="item">Item</th>
              <th>Description</th>
              <th data-column="price">Price (gp)</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Data - replace with your dynamic content */}
            <tr>
              <td>Thunderproof Cloak</td>
              <td>A cloak woven from enchanted fabrics, grants resistance to lightning damage</td>
              <td data-price="200">200 gp</td>
            </tr>
            <tr>
              <td>Shock-Resistant Boots</td>
              <td>Boots with conductive soles, preventing the wearer from being stunned by lightning</td>
              <td data-price="150">150 gp</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  // Add styling
  SortableFilterableTable.css = `
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      cursor: pointer;
      background-color: #f4f4f4;
    }
    .table-input {
      margin-bottom: 10px;
      padding: 5px;
      width: 100%;
    }
  `

  // Attach sorting and filtering script
  SortableFilterableTable.afterDOMLoaded = script

  return SortableFilterableTable
}) satisfies QuartzComponentConstructor
