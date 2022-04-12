import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { tableOrderHeader, tableOrderData } from "../../MockData";

export default function Order(props) {
  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="flex justify-center mx-10 mt-10">
          <table className="table-auto w-full text-center shadow-lg overflow-hidden rounded-t-xl">
            <thead className="bg-gray-200">
              <tr className="border-b-2 border-gray-300">
                {tableOrderHeader.map((h, i) => {
                  return (
                    <th key={i} className="px-6 py-3">
                      {h}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableOrderData.map((obj, i) => {
                console.log(obj);
                return (
                  <tr className="border-b-2 border-gray-300" key={i}>
                    {Object.values(obj).map((data, j) => {
                      return <td key={j} className="py-5">{data}</td>;
                    })}
                    <td>
                      {obj.orderStatus === "Unconfirmed" ? (
                        <Button
                          text={"Confirm"}
                          className={
                            "inline-flex items-center justify-center w-24 px-2 py-[.5em] text-base bg-green-600"
                          }
                          hoverColor={"hover:bg-green-800"}
                        />
                      ) : (
                        <Button
                          text={"Confirmed"}
                          className={
                            "inline-flex items-center justify-center w-24 px-2 py-[.5em] text-base bg-neutral-400"
                          }
                          disabled={true}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
