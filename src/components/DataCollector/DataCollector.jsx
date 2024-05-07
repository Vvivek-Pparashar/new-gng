import React, { useEffect, useState } from "react";
import "./DataCollector.css";
import axios from "axios";

const DataCollector = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://gng-builder-server.vercel.app/getAll")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // alert("Internet Error");
      });
  }, []);
  return (
    <div className="m-ad-soe">
      <div className="m-ad-soe-tble">
        <table className="dc-table">
          <tr className="dc-table-tr">
          <th className="dc-table-th">Id</th>
            <th className="dc-table-th">Name</th>
            <th className="dc-table-th">City</th>
            <th className="dc-table-th">mobile No</th>
            <th className="dc-table-th">email</th>
          </tr>
          {data.slice(0).reverse().map((e, index) => {
            return (
              <tr className="dc-table-tr">
                
                <td className="dc-table-td">{index +1}</td>
                <td className="dc-table-td">{e.name}</td>
                <td className="dc-table-td">{e.mobile}</td>
                <td className="dc-table-td">{e.email}</td>
                <td className="dc-table-td">{e.city}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default DataCollector;
