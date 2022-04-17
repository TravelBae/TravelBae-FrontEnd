import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import PageHead from "../../components/PageHead";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import useCreateTourPlace from "../../hooks/useCreateTourPlace";
import useCreateEvent from "../../hooks/useCreateEvent";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function InputData(props) {
  const pageName = [{ name: "Admin", url: "/tourplace" }, { name: "Input" }];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createTourPlace, loading, error } = useCreateTourPlace();
  const {
    createEvent,
    loading: loadingEvent,
    error: errorEvent,
  } = useCreateEvent();

  const [img, setImg] = useState("");
  const [loadingImg, setLoadingImg] = useState(false);
  const [errImg, setErrImg] = useState("");

  const [category, setCategory] = useState({
    val: null,
    text: "Choose category",
  });

  const listCategory = [
    {
      text: "Tour Place",
      val: 1,
    },
    {
      text: "Event",
      val: 2,
    },
  ];

  const onChangeImage = (event) => {
    const file = event.target.files[0];
    const fileRef = ref(storage, file.name);
    setLoadingImg(true);
    uploadBytes(fileRef, file).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setImg(url);
        setLoadingImg(false);
      });
    });
  };

  const submitHandler = (data) => {
    let obj;

    if (img === "") {
      return setErrImg("Image can't be empty");
    }

    if (category.val === 1) {
      obj = {
        nama_tempat: data.name,
        kategori: category.val,
        tipe: data.type,
        jam_buka: data.opening,
        stok_tiket: data.ticket,
        harga: data.price,
        alamat: data.address,
        deskripsi: data.description,
        img_tempat: img,
      };
      createTourPlace(obj);
      if (!error && !errorEvent) {
        navigate("/tourplace");
      }
    } else if (category.val === 2) {
      obj = {
        nama_event: data.name,
        kategori: category.val,
        tipe: data.type,
        jam_mulai: data.opening,
        stok: data.ticket,
        harga: data.price,
        alamat: data.address,
        regulasi: data.regulation,
        img_tempat: img,
      };
      createEvent(obj);
      if (!error && !errorEvent) {
        navigate("/event");
      }
    }
  };

  useEffect(() => {
    document.getElementById("input-form").reset();
  }, [category.val]);

  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="flex bg-white py-5 px-20">
          <PageHead items={pageName} />
        </div>
        <div className="flex flex-col ml-10 mt-10 justify-center items-center text-blue-600">
          <div className=" text-3xl font-semibold text-black">Input Data</div>
          <form
            id="input-form"
            className="w-[60em]"
            onSubmit={handleSubmit(submitHandler)}
          >
            <Dropdown
              text={"Category"}
              name={"category"}
              list={listCategory}
              value={category}
              onChange={setCategory}
              containerClassName={"mt-5"}
              listClassName={"bg-white"}
            />

            {category.val === null ? (
              <>
                <Input
                  name={"name"}
                  text={"Name"}
                  inputClassName={"bg-gray-200"}
                  labelClassName={"text-gray-400"}
                  register={register}
                  required
                  disabled
                  requiredMsg={"Name can't be empty"}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errors.name?.message}
                  </span>
                )}
                <div className="flex">
                  <div>
                    <Input
                      name={"type"}
                      text={"Type"}
                      containerClassName={"w-[29.5em]"}
                      inputClassName={"bg-gray-200"}
                      labelClassName={"text-gray-400"}
                      register={register}
                      required
                      disabled
                      requiredMsg={"Type can't be empty"}
                    />
                    {errors.type?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm break">
                        {errors.type?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      name={"opening"}
                      text={"Opening Hours"}
                      containerClassName={"ml-2 w-[30em]"}
                      inputClassName={"bg-gray-200"}
                      labelClassName={"text-gray-400"}
                      register={register}
                      required
                      disabled
                      requiredMsg={"Opening hours can't be empty"}
                    />
                    {errors.opening?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.opening?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <Input
                      type={"number"}
                      name={"ticket"}
                      text={"Ticket Stock"}
                      containerClassName={"w-[29.5em]"}
                      inputClassName={"bg-gray-200"}
                      labelClassName={"text-gray-400"}
                      register={register}
                      required
                      disabled
                      requiredMsg={"Ticket stock can't be empty"}
                    />
                    {errors.ticket?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.ticket?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type={"number"}
                      name={"price"}
                      text={"Price"}
                      containerClassName={"ml-2 w-[30em]"}
                      inputClassName={"bg-gray-200"}
                      labelClassName={"text-gray-400"}
                      register={register}
                      required
                      disabled
                      requiredMsg={"Price can't be empty"}
                    />
                    {errors.price?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.price?.message}
                      </span>
                    )}
                  </div>
                </div>
                <Input
                  name={"address"}
                  text={"Address"}
                  inputClassName={"bg-gray-200"}
                  labelClassName={"text-gray-400"}
                  register={register}
                  required
                  disabled
                  requiredMsg={"Price can't be empty"}
                />
                {errors.address?.type === "required" && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errors.address?.message}
                  </span>
                )}
                <div className="flex">
                  {category.val === 1 ? (
                    <>
                      <div>
                        <Input
                          name={"description"}
                          text={"Description"}
                          containerClassName={"w-[60em]"}
                          area={true}
                          inputClassName={"bg-white"}
                          register={register}
                          required
                          disabled
                          requiredMsg={"Description can't be empty"}
                        />
                        {errors.description?.type === "required" && (
                          <span className="text-red-500 ml-1 text-sm">
                            {errors.description?.message}
                          </span>
                        )}
                      </div>
                    </>
                  ) : category.val === 2 ? (
                    <>
                      <div>
                        <Input
                          name={"regulation"}
                          text={"Regulation"}
                          containerClassName={"w-[60em]"}
                          area={true}
                          inputClassName={"bg-gray-200"}
                          labelClassName={"text-gray-400"}
                          register={register}
                          required
                          disabled
                          requiredMsg={"Regulation can't be empty"}
                        />
                        {errors.regulation?.type === "required" && (
                          <span className="text-red-500 ml-1 text-sm">
                            {errors.regulation?.message}
                          </span>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <Input
                        name={"Description"}
                        text={"Description"}
                        containerClassName={"w-[30em]"}
                        area={true}
                        inputClassName={"bg-gray-200"}
                        labelClassName={"text-gray-400"}
                        register={register}
                        required
                        disabled
                        requiredMsg={"Description can't be empty"}
                      />
                      {errors.description?.type === "required" && (
                        <span className="text-red-500 ml-1 text-sm">
                          {errors.description?.message}
                        </span>
                      )}
                      <Input
                        name={"regulation"}
                        text={"Regulation"}
                        containerClassName={"ml-2 w-[30em]"}
                        area={true}
                        inputClassName={"bg-gray-200"}
                        labelClassName={"text-gray-400"}
                        register={register}
                        required
                        disabled
                        requiredMsg={"Regulation can't be empty"}
                      />
                      {errors.regulation?.type === "required" && (
                        <span className="text-red-500 ml-1 text-sm">
                          {errors.regulation?.message}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <Input
                  type={"file"}
                  name={"image"}
                  text={"Image"}
                  inputClassName={
                    "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 bg-gray-200 "
                  }
                  labelClassName={"text-gray-400"}
                  register={register}
                  required
                  disabled
                  requiredMsg={"Image can't be empty"}
                />
                {errors.image?.type === "required" && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errors.image?.message}
                  </span>
                )}
                <Button
                  text="Submit"
                  className="mt-10 mx-auto bg-gray-200 text-gray-400"
                  disabled
                />
              </>
            ) : (
              <>
                <Input
                  name={"name"}
                  text={"Name"}
                  inputClassName={"bg-white"}
                  register={register}
                  required
                  requiredMsg={"Name can't be empty"}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errors.name?.message}
                  </span>
                )}
                <div className="flex">
                  <div>
                    <Input
                      name={"type"}
                      text={"Type"}
                      containerClassName={"w-[29.5em]"}
                      inputClassName={"bg-white"}
                      register={register}
                      required
                      requiredMsg={"Type can't be empty"}
                    />
                    {errors.type?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm break">
                        {errors.type?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type={"time"}
                      name={"opening"}
                      text={"Opening Hours"}
                      containerClassName={"ml-2 w-[30em]"}
                      inputClassName={"bg-white"}
                      register={register}
                      required
                      requiredMsg={"Opening hours can't be empty"}
                    />
                    {errors.opening?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.opening?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <Input
                      type={"number"}
                      name={"ticket"}
                      text={"Ticket Stock"}
                      containerClassName={"w-[29.5em]"}
                      inputClassName={"bg-white"}
                      register={register}
                      required
                      requiredMsg={"Ticket stock can't be empty"}
                    />
                    {errors.ticket?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.ticket?.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      type={"number"}
                      name={"price"}
                      text={"Price"}
                      containerClassName={"ml-2 w-[30em]"}
                      inputClassName={"bg-white"}
                      register={register}
                      required
                      requiredMsg={"Price can't be empty"}
                    />
                    {errors.price?.type === "required" && (
                      <span className="text-red-500 ml-1 text-sm">
                        {errors.price?.message}
                      </span>
                    )}
                  </div>
                </div>
                <Input
                  name={"address"}
                  text={"Address"}
                  inputClassName={"bg-white"}
                  register={register}
                  required
                  requiredMsg={"Price can't be empty"}
                />
                {errors.address?.type === "required" && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errors.address?.message}
                  </span>
                )}
                <div className="flex">
                  {category.val === 1 ? (
                    <>
                      <div>
                        <Input
                          name={"description"}
                          text={"Description"}
                          containerClassName={"w-[60em]"}
                          area={true}
                          inputClassName={"bg-white"}
                          register={register}
                          required
                          requiredMsg={"Description can't be empty"}
                        />
                        {errors.description?.type === "required" && (
                          <span className="text-red-500 ml-1 text-sm">
                            {errors.description?.message}
                          </span>
                        )}
                      </div>
                    </>
                  ) : category.val === 2 ? (
                    <>
                      <div>
                        <Input
                          name={"regulation"}
                          text={"Regulation"}
                          containerClassName={"w-[60em]"}
                          area={true}
                          inputClassName={"bg-white"}
                          register={register}
                          required
                          requiredMsg={"Regulation can't be empty"}
                        />
                        {errors.regulation?.type === "required" && (
                          <span className="text-red-500 ml-1 text-sm">
                            {errors.regulation?.message}
                          </span>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <Input
                        name={"Description"}
                        text={"Description"}
                        containerClassName={"w-[30em]"}
                        area={true}
                        inputClassName={"bg-white"}
                        register={register}
                        required
                        requiredMsg={"Description can't be empty"}
                      />
                      {errors.description?.type === "required" && (
                        <span className="text-red-500 ml-1 text-sm">
                          {errors.description?.message}
                        </span>
                      )}
                      <Input
                        name={"regulation"}
                        text={"Regulation"}
                        containerClassName={"ml-2 w-[30em]"}
                        area={true}
                        inputClassName={"bg-white"}
                        register={register}
                        required
                        requiredMsg={"Regulation can't be empty"}
                      />
                      {errors.regulation?.type === "required" && (
                        <span className="text-red-500 ml-1 text-sm">
                          {errors.regulation?.message}
                        </span>
                      )}
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
                  onChange={onChangeImage}
                />
                {loadingImg && (
                  <div className="flex">
                    <div className="text-blue-500 ml-1 text-sm mr-1">
                      Uploading
                    </div>
                    <ReactLoading
                      type={"balls"}
                      color={"#A7C0FF"}
                      height={23}
                      width={23}
                    />
                  </div>
                )}
                {errImg && (
                  <span className="text-red-500 ml-1 text-sm">{errImg}</span>
                )}
                {error && (
                  <span className="text-red-500 ml-1 text-sm">
                    {error.message}
                  </span>
                )}
                {errorEvent && (
                  <span className="text-red-500 ml-1 text-sm">
                    {errorEvent.message}
                  </span>
                )}
                {loading || loadingEvent ? (
                  <div className="flex justify-center items-center">
                    <ReactLoading
                      type={"spin"}
                      color={"#A7C0FF"}
                      height={30}
                      width={30}
                    />
                  </div>
                ) : (
                  <Button text="Submit" className="mt-10 mx-auto" />
                )}
              </>
            )}
          </form>
        </div>
        <div className="mb-5"></div>
      </Layout>
    </>
  );
}
