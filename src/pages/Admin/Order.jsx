import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import PageHead from "../../components/PageHead";
import { tableOrderHeader } from "../../MockData";
import useGetOrder from "../../hooks/useGetOrder";
import ReactLoading from "react-loading";
import useConfirmOrder from "../../hooks/useConfirmOrder";
import { useState, useEffect } from "react";

// Fungsi ini untuk membuat halaman order untuk admin
export default function Order() {
  const pageName = [{ name: "Admin", url: "/tourplace" }, { name: "Order" }];
  const { order, loading, error } = useGetOrder();
  const [waitConfirm, setWaitConfirm] = useState(false);
  const {
    confirmOrder,
    loading: loadingConfirm,
    error: errorConfirm,
  } = useConfirmOrder();

  useEffect(() => {
    if (waitConfirm && !loadingConfirm) {
      window.location.reload(false);
    }
  }, [waitConfirm, loadingConfirm]);

  const handleConfirm = (idx) => {
    confirmOrder(idx);
    setWaitConfirm(true);
  };
  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="flex bg-white py-5 px-20">
          <PageHead items={pageName} />
        </div>
        <div className="flex justify-center mx-10 mt-10">
          {loading || error ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#A7C0FF"}
              height={175}
              width={175}
              className="mx-auto mt-32"
            />
          ) : (
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
                {order.map((obj, i) => {
                  return (
                    <tr className="border-b-2 border-gray-300" key={i}>
                      {Object.values(obj).map((data, j) => {
                        return (
                          <td className="py-5" key={j}>
                            {data}
                          </td>
                        );
                      })}
                      <td>
                        {obj.orderStatus === "Unconfirmed" ? (
                          <Button
                            text={"Confirm"}
                            className={
                              "inline-flex items-center justify-center w-24 px-2 py-[.5em] text-base bg-green-600"
                            }
                            hoverColor={"hover:bg-green-800"}
                            onClick={() => {
                              handleConfirm(obj.id);
                            }}
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
          )}
        </div>
      </Layout>
    </>
  );
}
