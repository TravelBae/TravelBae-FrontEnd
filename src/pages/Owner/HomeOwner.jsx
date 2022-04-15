import Layout from "../../components/Layout/Layout";
import PageHead from '../../components/PageHead';
import { Icon } from "@iconify/react";
import SidebarOwner from "../../components/Sidebar/SidebarOwner";

export default function HomeOwner(props) {
  const pageName = [{ name: 'Owner', url: '/' }, { name: 'Homepage' }];
  return (
    <>
      <Layout sidebar={<SidebarOwner />} mainClassName={"bg-neutral-100"}>
        <div className="flex bg-white py-5 px-20">
          <PageHead items={pageName}/>
        </div>
        <div className="xl:mx-20 2xl:mx-56 mt-10">
          <div className="flex justify-center">
            <div className="bg-blue-500 text-white rounded-3xl xl:w-[40em] xl:h-60 xl:px-10 xl:py-14 xl:text-3xl 2xl:w-[36em] 2xl:h-60 2xl:px-10 2xl:py-14 2xl:text-4xl">
              <p>Total Sales</p>
              <p className="mt-8">Rp.521.000.000</p>
            </div>
          </div>
          <div className="flex mt-5 text-center justify-between">
            <div className="bg-white xl:w-[32em] xl:h-60 2xl:w-[40em] 2xl:h-72 text-black rounded-2xl">
              <Icon
                icon="tabler:user"
                className="w-16 h-16 inline-block mt-14"
              />
              <p className="text-2xl">Total User</p>
              <p className="text-4xl text-blue-500 mt-5">369</p>
            </div>
            <div className="bg-white xl:w-[32em] xl:h-60 2xl:w-[40em] 2xl:h-72 text-black rounded-2xl">
              <Icon
                icon="tabler:home-2"
                className="w-16 h-16 inline-block mt-14"
              />
              <p className="text-2xl">Total Tour Place</p>
              <p className="text-4xl text-blue-500 mt-5">250</p>
            </div>
          </div>
          <div className="flex mt-5 text-center justify-between ">
            <div className="bg-white xl:w-[32em] xl:h-60 2xl:w-[40em] 2xl:h-72 text-black rounded-2xl">
              <Icon
                icon="tabler:shopping-cart"
                className="w-16 h-16 inline-block mt-14"
              />
              <p className="text-2xl">Unconfirmed Orders</p>
              <p className="text-4xl text-blue-500 mt-5">3</p>
            </div>
            <div className="bg-white xl:w-[32em] xl:h-60 2xl:w-[40em] 2xl:h-72 text-black rounded-2xl">
              <Icon
                icon="tabler:calendar-event"
                className="w-16 h-16 inline-block mt-14"
              />
              <p className="text-2xl">Total Event</p>

              <p className="text-4xl text-blue-500 mt-5">20</p>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
      </Layout>
    </>
  );
}
