import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import PageHead from "../../components/PageHead";
import { tableEventHeader } from "../../MockData";
import useGetEvent from "../../hooks/useGetEvent";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import useDeleteEvent from "../../hooks/useDeleteEvent";

export default function Event(props) {
  const pageName = [{ name: "Admin", url: "/tourplace" }, { name: "Event" }];
  const navigate = useNavigate();
  const [waitDel, setWaitDel] = useState(false);
  const { event, loading, error } = useGetEvent();
  const {
    deleteEvent,
    loading: loadingDelete,
    error: errorDelete,
  } = useDeleteEvent();

  useEffect(() => {
    if (waitDel && !loadingDelete) {
      window.location.reload(false);
    }
  }, [waitDel, loadingDelete]);

  const handleDelete = (idx) => {
    deleteEvent(idx);
    setWaitDel(true);
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
                  {tableEventHeader.map((h, i) => {
                    return (
                      <th key={i} className="px-6 py-3">
                        {h}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white">
                {event?.map((obj, i) => {
                  return (
                    <tr className="border-b-2 border-gray-300" key={i}>
                      {Object.values(obj).map((data, j) => {
                        if (j === 2) {
                          return (
                            <td key={j}>
                              <img src={data} alt="" className="w-24 h-24" />
                            </td>
                          );
                        } else {
                          return <td key={j}>{data}</td>;
                        }
                      })}
                      <td>
                        <div className="flex flex-col">
                          <Button
                            text={"Update"}
                            className={
                              "inline-flex items-center justify-center w-28 px-2 py-[.5em] text-base bg-blue-600"
                            }
                            iconClassName={"mr-1"}
                            iconName={"tabler:pencil"}
                            iconColor={"#ffff"}
                            hoverColor={"hover:bg-blue-800"}
                            onClick={() => {
                              navigate(`/update-event/${obj.id}`);
                            }}
                          />
                          <Button
                            text={"Delete"}
                            className={
                              "inline-flex items-center justify-center w-28 px-2 py-[.5em] text-base bg-red-600 mt-1"
                            }
                            iconClassName={"mr-1"}
                            iconName={"tabler:trash"}
                            iconColor={"#ffff"}
                            hoverColor={"hover:bg-red-800"}
                            onClick={() => {
                              handleDelete(obj.id);
                            }}
                          />
                        </div>
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
