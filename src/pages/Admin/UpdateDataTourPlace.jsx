import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import PageHead from "../../components/PageHead";
import { useEffect, useState } from "react";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import useGetDetailTourPlace from "../../hooks/useGetDetailTourPlace";
import useUpdateTourPlace from "../../hooks/useUpdateTourPlace";

export default function UpdateDataTourPlace(props) {
  const pageName = [
    { name: "Admin", url: "/tourplace" },
    { name: "Tour Place", url: "/tourplace" },
    { name: "Update" },
  ];
  const navigate = useNavigate();
  const { id } = useParams("id");

  const {
    detailTourPlace,
    loading: loadingGet,
    error: errorGet,
  } = useGetDetailTourPlace(parseInt(id));
  const { updateTourPlace, loading, error } = useUpdateTourPlace(id);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [opening, setOpening] = useState("");
  const [ticket, setTicket] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [loadingImg, setLoadingImg] = useState(false);
  const [errImg, setErrImg] = useState("");
  const [errObj, setErrObj] = useState("");

  const [category, setCategory] = useState({
    val: "",
    text: "",
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

  const submitHandler = (e) => {
    e.preventDefault();
    let obj;

    if (
      name === "" ||
      type === "" ||
      opening === "" ||
      ticket === "" ||
      price === "" ||
      address === "" ||
      description === "" ||
      img === ""
    ) {
      setErrObj("Each field must be filled");
      setErrImg("Image can't be empty");
      return;
    }
    setErrObj("");
    setErrImg("");
    obj = {
      nama_tempat: name,
      kategori: category.val,
      tipe: type,
      jam_buka: opening,
      stok_tiket: ticket,
      harga: price,
      alamat: address,
      deskripsi: description,
      img_tempat: img,
    };

    updateTourPlace(obj);
    navigate("/tourplace");
  };

  useEffect(() => {
    if (!loadingGet) {
      setCategory({
        text: detailTourPlace.kategori === 1 ? "Tour Place" : "Event",
        val: detailTourPlace.kategori,
      });
      setName(detailTourPlace.nama_tempat);
      setType(detailTourPlace.tipe);
      setOpening(detailTourPlace.jam_buka);
      setTicket(detailTourPlace.stok_tiket);
      setPrice(detailTourPlace.harga);
      setAddress(detailTourPlace.alamat);
      setDescription(detailTourPlace.deskripsi);
      setImg(detailTourPlace.img_tempat);
    }
  }, [loadingGet, detailTourPlace]);

  return (
    <>
      <Layout sidebar={<Sidebar />} mainClassName={"bg-neutral-100"}>
        <div className="flex bg-white py-5 px-20">
          <PageHead items={pageName} />
        </div>
        <div className="flex flex-col ml-10 mt-10 justify-center items-center text-blue-600">
          <div className=" text-3xl font-semibold text-black">Update Data</div>
          <form id="input-form" className="w-[60em]" onSubmit={submitHandler}>
            <Dropdown
              text={"Category"}
              name={"category"}
              list={listCategory}
              value={category}
              onChange={setCategory}
              containerClassName={"mt-5"}
              listClassName={"bg-white"}
            />
            <Input
              name={"name"}
              text={"Name"}
              inputClassName={"bg-white"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="flex">
              <div>
                <Input
                  name={"type"}
                  text={"Type"}
                  containerClassName={"w-[29.5em]"}
                  inputClassName={"bg-white"}
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </div>
              <div>
                <Input
                  type={"time"}
                  name={"opening"}
                  text={"Opening Hours"}
                  containerClassName={"ml-2 w-[30em]"}
                  inputClassName={"bg-white"}
                  value={opening}
                  onChange={(e) => {
                    setOpening(e.target.value);
                  }}
                />
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
                  value={ticket}
                  onChange={(e) => {
                    setTicket(e.target.value);
                  }}
                />
              </div>
              <div>
                <Input
                  type={"number"}
                  name={"price"}
                  text={"Price"}
                  containerClassName={"ml-2 w-[30em]"}
                  inputClassName={"bg-white"}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <Input
              name={"address"}
              text={"Address"}
              inputClassName={"bg-white"}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <Input
              name={"description"}
              text={"Description"}
              containerClassName={"w-[60em]"}
              area={true}
              inputClassName={"bg-white"}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
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
                <div className="text-blue-500 ml-1 text-sm mr-1">Uploading</div>
                <ReactLoading
                  type={"balls"}
                  color={"#A7C0FF"}
                  height={23}
                  width={23}
                />
              </div>
            )}
            {errObj && <p className="text-red-500 ml-1 text-sm">{errObj}</p>}
            {errImg && <p className="text-red-500 ml-1 text-sm">{errImg}</p>}
            {loading ? (
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
          </form>
        </div>
        <div className="mb-5"></div>
      </Layout>
    </>
  );
}
