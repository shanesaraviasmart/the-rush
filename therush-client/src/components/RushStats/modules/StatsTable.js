import { useEffect, useState } from "react";

import Loading from "../../Loading";
import MUIDataTable from "mui-datatables";
import { apiConfig } from "../../../configs/config";
import { rushAPI } from "../../../utils/axios";

const StatsTable = () => {
  const [tableData, setTableData] = useState({});
  const stringCols = ["Player", "Team", "Pos"];

  const sortByFloat = (order) => {
    return (obj1, obj2) => {
      let val1 =
        typeof obj1.data === "string"
          ? parseFloat(obj1.data.replace(/,/g, ""))
          : parseFloat(obj1.data);
      let val2 =
        typeof obj2.data === "string"
          ? parseFloat(obj2.data.replace(/,/g, ""))
          : parseFloat(obj2.data);
      return (val1 - val2) * (order === "asc" ? 1 : -1);
    };
  };

  useEffect(() => {
    rushAPI
      .get(apiConfig.urls.rushStats)
      .then((resp) => {
        for (let column of resp.data.columns) {
          if (!stringCols.includes(column.name)) {
            column.options = { sortCompare: sortByFloat };
          }
        }
        setTableData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (tableData.data) {
    return (
      <MUIDataTable
        title={"Stats"}
        data={tableData.data}
        columns={tableData.columns}
        options={{
          downloadOptions: {
            filterOptions: {
              useDisplayedRowsOnly: true,
            },
          },
          selectableRows: false,
        }}
      />
    );
  } else {
    return <Loading />;
  }
};

export default StatsTable;
