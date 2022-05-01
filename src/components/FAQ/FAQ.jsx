
import { useEffect, useRef, useState } from "react"
import { getFaq } from "../../api/api"
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


  // const faqsList = [
  //   {
  //     question: "What industries do you specialize in?",
  //     answer: "We are specialize in agricultural products.We are a very flexible warehouse and are open to offering our services to pretty much any situation."
  //   },
  //   {
  //     question: "How are warehouse rates determined?",
  //     answer: "Warehouse rates are determined by the warehouse footprint of the product, how quickly the product will be moving in and out of the warehouse as well as any specific handling and shipping requirements that are required of an individual product. We believe that there is no one price fits all when it comes to warehousing products and we will structure our pricing to be competitive and meet the needs of our customers."
  //   },
  //   {
  //     question: "What do you consider short term and long term storage?",
  //     answer: "Short term is usually considered when storing a customers product for less than a month. Long term storage is usually considered storage of products that will be in our warehouse for a minimum of 1 month and beyond."
  //   },
  //   {
  //     question: "Will my goods be safe in your warehouse?",
  //     answer: "All of our safe warehouses are equipped with the highest level of security for your goods, including: 24/7 state-of-the-art video monitoring with 30+ day retention, cell connected security systems, as well as patrolled yards."
  //   }

  // ]

  return (

    <section className="bg-amber-300 m-3  rounded-lg" >
      <div className="flex flex-col items-center justify-center  px-4 lg:px-8 py-24">
        <h3 className="text-slate-600 font-bold border-4 mb-10 border-slate-600 py-2 px-24 font-mont text-center md:text-xl my-5 tracking-wider select-none uppercase">
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

