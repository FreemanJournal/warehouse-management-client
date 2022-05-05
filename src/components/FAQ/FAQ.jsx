
import { useEffect, useState } from "react";
import { getFaq } from "../../api/api";
import FaqsCard from "./FaqsCard";



export default function FAQ() {
  const [faqsList, setFaqsList] = useState([]);

  useEffect(() => {
    const getFaqs = async () => {
      const { data } = await getFaq()
      setFaqsList(data)
    }
    getFaqs();
  }, [])


  return (

    <section className="bg-amber-300 m-3  rounded-lg" >
      <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
        <h3 className="text-slate-600 font-bold border-4 mb-10 border-slate-600 py-2 px-24 font-mont text-center sm:text-xl my-5 tracking-wider select-none uppercase">
          Frequently Asked Questions
        </h3>
        <div className="mt-14 max-w-2xl mx-auto">
          {
            faqsList?.map((item, idx) => (
              <FaqsCard
                key={idx}
                idx={idx}
                faqsList={item}
              />
            ))
          }
        </div>
      </div>
    </section>

  )
}

