import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { tableTourHeader, tableTourData } from "../../MockData";
import { useNavigate } from "react-router-dom";

export default function TourPlace(props) {
  const navigate = useNavigate();
  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="mx-10 mt-10">
          <table className="table-auto text-center shadow-lg overflow-hidden rounded-t-xl">
            <thead className="bg-gray-200">
              <tr className="border-b-2 border-gray-300">
                {tableTourHeader.map((h, i) => {
                  return (
                    <th key={i} className="px-6 py-3">
                      {h}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-white">
              {tableTourData.map((obj, i) => {
                let imagess = obj.image;
                console.log(imagess);
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
                            navigate("/update");
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
                        />
                      </div>
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
