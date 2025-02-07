// @ts-ignore: Quartz inline bundling
import script from "./scripts/tableFunctions.inline"

export default ((ctx: any, props: { id: string }) => {
  const tableId = props.id || "sortableTable"

  return (
    <div>
      {/* Filter Input */}
      <input
        type="text"
        id={`${tableId}-filter`}
        placeholder="Filter items..."
        class="table-input"
      />

      {/* Table */}
      <table id={tableId}>
        <thead>
          <tr>
            <th data-column="item">Item</th>
            <th>Description</th>
            <th data-column="price">Price (gp)</th>
          </tr>
        </thead>
        <tbody>
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
}) satisfies QuartzComponentConstructor
