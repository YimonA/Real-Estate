import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const ImagesModal = (props) => {
  const { showModal, setShowModal, item } = props;

  const toggleModal = (imageName) => {
    if (imageName !== null) {
      setShowModal(true);
      document.getElementById("modalImage").src = imageName;
    }
  };

  return (
    <div className="container-fluid">
      <div className=" md:flex md:items-stretch">
        <div className="md:basis-1/2 p-1">
          <div className="group relative overflow-hidden">
            <img
              className="w-full md:h-[300px] lg:h-[655px] object-cover object-center"
              src={item.image}
              alt=""
            />{" "}
            {/* max-h-[620px] */}
            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
            <div className="absolute top-1/2 -translate-y-1/2 start-1/2 end-1/2 text-center invisible group-hover:visible">
              <button
                id="btn"
                onClick={() => toggleModal(item.image)}
                className="w-10 h-10 rounded-full flex justify-center items-center bg-green-600 text-center hover:bg-green-700 text-white lightbox"
              >
                <FiCamera size={"1.1rem"} />
              </button>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 flex flex-col">
          <div className=" basis-1/2 flex   ">
            <div className="basis-1/2 p-1 group relative overflow-hidden">
              <img
                className="w-full md:h-[150px] lg:h-[323px] object-cover object-center"
                src="/images/house-1.avif"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center invisible group-hover:visible">
                <button
                  id="btn"
                  onClick={() => toggleModal("/images/house-1.avif")}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-green-600 text-center hover:bg-green-700 text-white lightbox"
                >
                  <FiCamera size={"1.1rem"} />
                </button>
              </div>
            </div>
            <div className="basis-1/2 p-1 group relative overflow-hidden">
              <img
                className="w-full md:h-[150px] lg:h-[323px] object-cover object-center"
                src="/images/house-2.avif"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center invisible group-hover:visible">
                <button
                  id="btn"
                  onClick={() => toggleModal("/images/house-2.avif")}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-green-600 text-center hover:bg-green-700 text-white lightbox"
                >
                  <FiCamera size={"1.1rem"} />
                </button>
              </div>
            </div>
          </div>
          <div className=" basis-1/2 flex ">
            <div className="basis-1/2 p-1 group relative overflow-hidden">
              <img
                className="w-full md:h-[150px] lg:h-[323px] object-cover object-center"
                src="/images/house-3.avif"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center invisible group-hover:visible">
                <button
                  id="btn"
                  onClick={() => toggleModal("/images/house-3.avif")}
                  className=" w-10 h-10 rounded-full flex justify-center items-center bg-green-600 text-center hover:bg-green-700 text-white lightbox"
                >
                  <FiCamera size={"1.1rem"} />
                </button>
              </div>
            </div>
            <div className="basis-1/2 p-1 group relative overflow-hidden">
              <img
                className="w-full md:h-[150px] lg:h-[323px] object-cover object-center"
                src="/images/house-4.avif"
                alt=""
              />
              <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center invisible group-hover:visible">
                <button
                  id="btn"
                  onClick={() => toggleModal("/images/house-4.avif")}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-green-600 text-center hover:bg-green-700 text-white lightbox"
                >
                  <FiCamera size={"1.1rem"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}

      <div
        className={
          showModal
            ? "fixed top-0 lg:top-0 left-0 z-80 w-full h-full bg-black/70 flex  justify-center items-center cursor-pointer z-50 place-content-center"
            : "hidden"
        }
      >
        <div className="relative max-w-[800px] max-h-[600px]">
          <a
            className="absolute z-90 -top-6 lg:-top-8 right-0 lg:-right-2 text-white text-2xl lg:text-4xl font-bold"
            onClick={() => setShowModal(false)}
          >
            <RxCross2 />
          </a>

          <img
            id="modalImage"
            src=""
            className=" w-[100%] w-full h-full object-cover z[1000] "
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
