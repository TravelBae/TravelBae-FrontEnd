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
        <div className="flex-col place-content-center xl:mx-20 2xl:mx-56 lg:mx-16 md:mx-12 sm:mx-8 mt-10 mx-8">
          <div className="flex justify-center">
            <div className="bg-blue-500 text-white rounded-3xl w-[18em] px-10 py-8 text-xl
            2xl:h-60 2xl:px-10 2xl:py-14 2xl:text-4xl 2xl:w-[40em]
            xl:h-52 xl:px-10 xl:py-12 xl:text-3xl xl:w-[36em]
            lg:h-48 lg:px-10 lg:py-10 lg:text-2xl lg:w-[32em]
            md:h-44 md:px-10 md:py-8 md:text-xl md:w-[28em]">
              <p>Total Sales</p>
              <p className="mt-8">Rp.521.000.000</p>
            </div>
          </div>
          <div className="flex mt-5 text-center justify-center space-x-10
          2xl:space-x-40 xl:space-x-12 lg:space-x-8 md:space-x-12">
            <div className="bg-white text-black rounded-2xl w-[10em] h-32
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <Icon
                icon="tabler:user"
                className="w-8 h-8 inline-block mt-5
                2xl:text-4xl 2xl:mt-14 2xl:w-16 2xl:h-16
                xl:text-3xl xl:mt-12 xl:w-14 xl:h-14
                lg:text-2xl lg:mt-10 lg:w-12 lg:h-12
                md:text-xl md:mt-4 md:w-10 md:h-10"
              />
              <p className="text-md
               2xl:text-3xl
               xl:text-2xl
               lg:text-xl
               md:text-lg">Total User</p>
              <p className="text-lg text-blue-500 mt-1
              2xl:text-4xl 2xl:mt-5
              xl:text-3xl xl:mt-4
              lg:text-2xl lg:mt-3
              md:text-xl md:mt-2">369</p>
            </div>
            <div className="bg-white text-black rounded-2xl w-[10em] h-32
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[24em]
            md:h-32  md:w-[16em]">
              <Icon
                icon="tabler:home-2"
                className="w-8 h-8 inline-block mt-5
                2xl:text-4xl 2xl:mt-14 2xl:w-16 2xl:h-16
                xl:text-3xl xl:mt-12 xl:w-14 xl:h-14
                lg:text-2xl lg:mt-10 lg:w-12 lg:h-12
                md:text-xl md:mt-4 md:w-10 md:h-10"
              />
              <p className="text-md
               2xl:text-3xl
               xl:text-2xl
               lg:text-xl
               md:text-lg">Total Tour Place</p>
              <p className="text-lg text-blue-500 mt-1
              2xl:text-4xl 2xl:mt-5
              xl:text-3xl xl:mt-4
              lg:text-2xl lg:mt-3
              md:text-xl md:mt-2">250</p>
            </div>
          </div>
          <div className="flex mt-5 text-center justify-center space-x-10
          2xl:space-x-40 xl:space-x-12 lg:space-x-8 md:space-x-12">
            <div className="bg-white text-black rounded-2xl w-[10em] h-32
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <Icon
                icon="tabler:shopping-cart"
                className="w-8 h-8 inline-block mt-5
                2xl:text-4xl 2xl:mt-14 2xl:w-16 2xl:h-16
                xl:text-3xl xl:mt-12 xl:w-14 xl:h-14
                lg:text-2xl lg:mt-10 lg:w-12 lg:h-12
                md:text-xl md:mt-4 md:w-10 md:h-10"
              />
              <p className="text-md
               2xl:text-3xl
               xl:text-2xl
               lg:text-xl
               md:text-lg">Unconfirmed Orders</p>
              <p className="text-lg text-blue-500 mt-1
              2xl:text-4xl 2xl:mt-5
              xl:text-3xl xl:mt-4
              lg:text-2xl lg:mt-3
              md:text-xl md:mt-2">3</p>
            </div>
            <div className="bg-white text-black rounded-2xl w-[10em] h-32
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[24em]
            md:h-32  md:w-[16em]">
              <Icon
                icon="tabler:calendar-event"
                className="w-8 h-8 inline-block mt-5
                2xl:text-4xl 2xl:mt-14 2xl:w-16 2xl:h-16
                xl:text-3xl xl:mt-12 xl:w-14 xl:h-14
                lg:text-2xl lg:mt-10 lg:w-12 lg:h-12
                md:text-xl md:mt-4 md:w-10 md:h-10"
              />
              <p className="text-md
               2xl:text-3xl
               xl:text-2xl
               lg:text-xl
               md:text-lg">Total Event</p>
              <p className="text-lg text-blue-500 mt-1
              2xl:text-4xl 2xl:mt-5
              xl:text-3xl xl:mt-4
              lg:text-2xl lg:mt-3
              md:text-xl md:mt-2">20</p>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
      </Layout>
    </>
  );
}
