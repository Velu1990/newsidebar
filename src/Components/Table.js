import React from "react"
import 'handsontable/dist/handsontable.full.css';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
registerAllModules();

const hotData = [
  ["Suresh", "velu", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13]
];
const Table = () => {
  const settings = {
    licenseKey: '00000-00000-00000-00000-00000',
    //... other options
  }
  return (
    <div id="hot-app">
      <HotTable
        data={hotData}
        colHeaders={["S.NO" , "PART" , "Part Des" , "Amount" , "status"]}
        rowHeaders={false}
        width="600"
        height="300"
        minSpareRows = "1"
        licenseKey= 'non-commercial-and-evaluation'
      />
    </div>
    
  );
}
export default Table;
