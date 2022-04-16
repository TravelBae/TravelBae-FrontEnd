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
            <div className="bg-blue-500 text-white rounded-3xl w-[21em] px-10 py-8 text-xl
            2xl:h-60 2xl:px-10 2xl:py-14 2xl:text-4xl 2xl:w-[40em]
            xl:h-52 xl:px-10 xl:py-12 xl:text-3xl xl:w-[36em]
            lg:h-48 lg:px-10 lg:py-10 lg:text-2xl lg:w-[31em]
            md:h-44 md:px-10 md:py-8 md:text-xl md:w-[28em]">
              <p>Total Sales</p>
              <p className="mt-8 font-bold">Rp.521.000.000</p>
            </div>
          </div>
          <div className="flex mt-5 justify-center space-x-10
          2xl:space-x-40 xl:space-x-12 lg:space-x-8 md:space-x-12">
            <div className="bg-white text-black rounded-2xl w-[12em] h-32 flex justify-start
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <div className="flex mt-9 space-x-4 ml-7
              2xl:space-x-18 2xl:ml-18 2xl:mt-24
              xl:space-x-12 xl:ml-14 xl:mt-[4em]
              lg:space-x-8 lg:ml-10 lg:mt-14
              md:space-x-5 md:ml-7 md:mt-8">
                <div>
                  <div class="h-12 w-12 rounded-xl justify-center place-items-center bg-green-100 inline-flex
                  2xl:text-4xl 2xl:w-24 2xl:h-24
                  xl:text-3xl xl:w-20 xl:h-20
                  lg:text-2xl lg:w-16 lg:h-16
                  md:text-xl md:w-14 md:h-14">
                    <Icon
                      icon="tabler:user"
                      color="166534"
                      className="w-6 h-6 inline-block
                      2xl:text-4xl 2xl:w-12 2xl:h-12
                      xl:text-3xl xl:w-10 xl:h-10
                      lg:text-2xl lg:w-8 lg:h-8
                      md:text-xl md:w-6 md:h-6"
                    />
                  </div>
                </div>
                <div class="justify-start">
                  <p className="text-md text-neutral-500
                  2xl:text-3xl
                  xl:text-2xl
                  lg:text-xl
                  md:text-lg">Total User</p>
                  <p className="text-lg text-neutral-800 font-bold mt-1
                  2xl:text-4xl 2xl:mt-5
                  xl:text-3xl xl:mt-4
                  lg:text-2xl lg:mt-3
                  md:text-xl md:mt-2">369</p>
                </div>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl w-[12em] h-32 flex justify-start
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <div className="flex mt-9 space-x-4 ml-7
              2xl:space-x-18 2xl:ml-18 2xl:mt-24
              xl:space-x-12 xl:ml-14 xl:mt-[4em]
              lg:space-x-8 lg:ml-10 lg:mt-14
              md:space-x-5 md:ml-7 md:mt-8">
                <div>
                  <div class="h-12 w-12 rounded-xl justify-center place-items-center bg-purple-100 inline-flex
                  2xl:text-4xl 2xl:w-24 2xl:h-24
                  xl:text-3xl xl:w-20 xl:h-20
                  lg:text-2xl lg:w-16 lg:h-16
                  md:text-xl md:w-14 md:h-14">
                    <Icon
                      icon="tabler:home-2"
                      color="6b21a8"
                      className="w-6 h-6 inline-block
                      2xl:text-4xl 2xl:w-12 2xl:h-12
                      xl:text-3xl xl:w-10 xl:h-10
                      lg:text-2xl lg:w-8 lg:h-8
                      md:text-xl md:w-6 md:h-6"
                    />
                  </div>
                </div>
                <div class="justify-start">
                  <p className="text-md text-neutral-500
                  2xl:text-3xl
                  xl:text-2xl
                  lg:text-xl
                  md:text-lg">Total Tour Place</p>
                  <p className="text-lg text-neutral-800 font-bold mt-1
                  2xl:text-4xl 2xl:mt-5
                  xl:text-3xl xl:mt-4
                  lg:text-2xl lg:mt-3
                  md:text-xl md:mt-2">250</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-center space-x-10
          2xl:space-x-40 xl:space-x-12 lg:space-x-8 md:space-x-12">
            <div className="bg-white text-black rounded-2xl w-[12em] h-32 flex justify-start
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <div className="flex mt-6 space-x-4 ml-5
              2xl:space-x-18 2xl:ml-18 2xl:mt-24
              xl:space-x-12 xl:ml-14 xl:mt-[4em]
              lg:space-x-8 lg:ml-10 lg:mt-14
              md:space-x-5 md:ml-7 md:mt-5">
                <div>
                  <div class="h-12 w-12 rounded-xl justify-center place-items-center bg-sky-100 inline-flex
                  2xl:text-4xl 2xl:w-24 2xl:h-24
                  xl:text-3xl xl:w-20 xl:h-20
                  lg:text-2xl lg:w-16 lg:h-16
                  md:text-xl md:w-14 md:h-14">
                    <Icon
                      icon="tabler:shopping-cart"
                      color="075985"
                      className="w-6 h-6 inline-block
                      2xl:text-4xl 2xl:w-12 2xl:h-12
                      xl:text-3xl xl:w-10 xl:h-10
                      lg:text-2xl lg:w-8 lg:h-8
                      md:text-xl md:w-6 md:h-6"
                    />
                  </div>
                </div>
                <div class="justify-start">
                  <p className="text-md text-neutral-500
                  2xl:text-3xl
                  xl:text-2xl
                  lg:text-xl
                  md:text-lg">Unconfirmed Orders</p>
                  <p className="text-lg text-neutral-800 font-bold mt-1
                  2xl:text-4xl 2xl:mt-5
                  xl:text-3xl xl:mt-4
                  lg:text-2xl lg:mt-3
                  md:text-xl md:mt-2">3</p>
                </div>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl w-[12em] h-32 flex justify-start
            2xl:h-72 2xl:w-[40em]
            xl:h-60  xl:w-[32em]
            lg:h-48  lg:w-[22em]
            md:h-32  md:w-[16em]">
              <div className="flex mt-9 space-x-4 ml-7
              2xl:space-x-18 2xl:ml-18 2xl:mt-24
              xl:space-x-12 xl:ml-14 xl:mt-[4em]
              lg:space-x-8 lg:ml-10 lg:mt-14
              md:space-x-5 md:ml-7 md:mt-8">
                <div>
                  <div class="h-12 w-12 rounded-xl justify-center place-items-center bg-orange-100 inline-flex
                  2xl:text-4xl 2xl:w-24 2xl:h-24
                  xl:text-3xl xl:w-20 xl:h-20
                  lg:text-2xl lg:w-16 lg:h-16
                  md:text-xl md:w-14 md:h-14">
                    <Icon
                      icon="tabler:calendar-event"
                      color="6b21a8"
                      className="w-6 h-6 inline-block
                      2xl:text-4xl 2xl:w-12 2xl:h-12
                      xl:text-3xl xl:w-10 xl:h-10
                      lg:text-2xl lg:w-8 lg:h-8
                      md:text-xl md:w-6 md:h-6"
                    />
                  </div>
                </div>
                <div class="justify-start">
                  <p className="text-md text-neutral-500
                  2xl:text-3xl
                  xl:text-2xl
                  lg:text-xl
                  md:text-lg">Total Event</p>
                  <p className="text-lg text-neutral-800 font-bold mt-1
                  2xl:text-4xl 2xl:mt-5
                  xl:text-3xl xl:mt-4
                  lg:text-2xl lg:mt-3
                  md:text-xl md:mt-2">20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
      </Layout>
    </>
  );
}
