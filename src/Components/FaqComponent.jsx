import React, { useState } from "react";
import {MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from "react-icons/md"

const FaqComponent = () => {
  const answer= "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.";
  const [faqLists, setFaqLists] = useState([
    {
      id: 1,
      que: "How does it work?",
      showAns: true,
    },
    {
      id: 2,
      que: "Do I need a designer to use Hously?",
      showAns: false,
    },
    {
      id: 3,
      que: "What do I need to do start selling?",
      showAns: false,
    },
    {
      id: 4,
      que: "What happens when I recieve an order?",
      showAns: false,
    },
  ]);

  const openAnswer = (id) => {
    setFaqLists(
      faqLists.map((faqList) => {
        if (faqList.id === id) {
          faqList.showAns = !faqList.showAns;
        } else {
          faqList.showAns = false;
        }
        return faqList;
      })
    );
  };

  return (
    <>
      {faqLists?.map((faqList) => {
        return (
          <div
            className=" relative shadow rounded-md overflow-hidden mt-4 dark:shadow-gray-700"
            key={faqList.id}
          >
            <h2 className="text-base font-medium">
              <button
                type="button"
                onClick={() => openAnswer(faqList.id)}
                className=" flex justify-between items-center p-5 w-full font-medium text-left bg-gray-50 dark:bg-slate-800  dark:drop-shadow-[1px_1px_0_rgba(2555,255,255,0.2)]"
              >
                <span
                  className={` ${faqList.showAns ? "text-green-600 dark:text-green-600" : "text-black dark:text-white"}` }
                >
                  {faqList.que}
                </span>
                <span className="ms-auto">
                  {faqList.showAns? <MdOutlineKeyboardArrowUp className="text-green-600"/> : <MdOutlineKeyboardArrowDown className=" dark:text-white"/>}
                </span>
              </button>
            </h2>
            <div className="">
              {faqList.showAns && (
                <p className="text-slate-400 p-5">{answer}</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaqComponent;
