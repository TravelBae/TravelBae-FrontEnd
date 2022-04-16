import Layout from "../../components/Layout/Layout";
import PageHead from '../../components/PageHead';
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function InputData(props) {
  const pageName = [{ name: 'Admin', url: '/tourplace' }, { name: 'Input' }];
  const [category, setCategory] = useState({
    val: null,
    text: "Choose category",
  });
  const mock = [
    {
      text: "Tour Place",
      val: 1,
    },
    {
      text: "Event",
      val: 2,
    },
  ];

  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="flex bg-white py-5 px-20">
          <PageHead items={pageName}/>
        </div>
        <div className="flex flex-col ml-10 mt-10 justify-center items-center text-blue-600">
          <div className=" text-3xl font-semibold text-black">Input Data</div>
          <form className="w-[60em]">
            <Dropdown
              text={"Category"}
              name={"product-category"}
              list={mock}
              value={category}
              onChange={setCategory}
              containerClassName={"mt-5"}
              listClassName={"bg-white"}
            />
            <Input name={"name"} text={"Name"} inputClassName={"bg-white"} />
            <div className="flex">
              <Input
                name={"type"}
                text={"Type"}
                containerClassName={"w-[30em]"}
                inputClassName={"bg-white"}
              />
              <Input
                name={"opening-horus"}
                text={"Opening Hours"}
                containerClassName={"ml-2 w-[30em]"}
                inputClassName={"bg-white"}
              />
            </div>
            <div className="flex">
              <Input
                name={"ticket-stock"}
                text={"Ticket Stock"}
                containerClassName={"w-[30em]"}
                inputClassName={"bg-white"}
              />
              <Input
                type={"number"}
                name={"price"}
                text={"Price"}
                containerClassName={"ml-2 w-[30em]"}
                inputClassName={"bg-white"}
              />
            </div>
            <Input
              name={"address"}
              text={"Address"}
              inputClassName={"bg-white"}
            />
            <div className="flex">
              {category.val === 1 ? (
                <>
                  <Input
                    name={"Description"}
                    text={"Description"}
                    containerClassName={"w-[30em]"}
                    area={true}
                    inputClassName={"bg-white"}
                  />
                  <Input
                    name={"regulation"}
                    text={"Regulation"}
                    containerClassName={"ml-2 w-[30em]"}
                    area={true}
                    disabled={true}
                    labelClassName={"text-neutral-500"}
                    inputClassName={"bg-neutral-200"}
                  />
                </>
              ) : category.val === 2 ? (
                <>
                  <Input
                    name={"Description"}
                    text={"Description"}
                    containerClassName={"w-[30em]"}
                    area={true}
                    disabled={true}
                    labelClassName={"text-neutral-500"}
                    inputClassName={"bg-neutral-200"}
                  />
                  <Input
                    name={"regulation"}
                    text={"Regulation"}
                    containerClassName={"ml-2 w-[30em]"}
                    area={true}
                    inputClassName={"bg-white"}
                  />
                </>
              ) : (
                <>
                  <Input
                    name={"Description"}
                    text={"Description"}
                    containerClassName={"w-[30em]"}
                    area={true}
                    inputClassName={"bg-white"}
                  />
                  <Input
                    name={"regulation"}
                    text={"Regulation"}
                    containerClassName={"ml-2 w-[30em]"}
                    area={true}
                    inputClassName={"bg-white"}
                  />
                </>
              )}
            </div>
            <Input
              type={"file"}
              name={"image"}
              text={"Image"}
              inputClassName={
                "block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 bg-white "
              }
            />
            <Button text="Submit" className="mt-10 mx-auto" />
          </form>
        </div>
        <div className="mb-5"></div>
      </Layout>
    </>
  );
}
