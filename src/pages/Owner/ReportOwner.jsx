import Layout from "../../components/Layout/Layout";
import SidebarOwner from "../../components/Sidebar/SidebarOwner";
import useGetTransactionReport from "../../hooks/useGetTransactionReport";
import { tableReportHeader } from "../../MockData";
import ReactLoading from "react-loading";

export default function ReportOwner(props) {
  const { transactionReport, loading, error } = useGetTransactionReport();

  return (
    <>
      <Layout sidebar={<SidebarOwner />} mainClassName={"bg-neutral-100"}>
        <div className="mx-10 mt-10">
          {loading || error ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#A7C0FF"}
              height={175}
              width={175}
              className="mx-auto mt-32"
            />
          ) : (
            <table className="table-auto text-center shadow-md overflow-hidden rounded-t-xl">
              <thead className="bg-gray-200">
                <tr className="border-b-2 border-gray-300">
                  {tableReportHeader.map((h, i) => {
                    return (
                      <th key={i} className="px-6 py-3">
                        {h}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white">
                {transactionReport?.map((obj, i) => {
                  return (
                    <tr className="border-b-2 border-gray-300" key={i}>
                      {Object.values(obj).map((data, j) => {
                        return (
                          <td key={j} className="p-2">
                            {data}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Layout>
    </>
  );
}
