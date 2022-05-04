
function Articles() {

    const faqsList = [
        {
            q: "Differences between javascript and node js ?",
            a: `Javascript is a programming language and node js is a javascript runtime environment.We use node js in server side application and javascript in client side.Javascript cannot run outside of browser.With the help of node js we can implement javascript features outside of browser.Some of the javascript popular frameworks are React,Vue and angular and node js have express,socket,meteor etc.  `
        },
        {
            q: "When should you use node js and when should you use mongodb??",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Differences between Sql and NoSql databases?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "What is the purpose of jwt and how does it work?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
        }
    ]

    return (
        <>
            <section className="bg-amber-300  m-3 rounded-lg flex flex-col pt-10">
                <div className="px-6 py-8 pt-24 ">


                    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
                        <div className="space-y-3 text-center">
                            <h1 className="text-3xl text-gray-800 font-semibold">
                               Some Common Technical Q&A
                            </h1>
                            
                        </div>
                        <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2">
                            {
                                faqsList.map((item, idx) => (
                                    <div
                                        className="space-y-3 mt-5"
                                        key={idx}
                                    >
                                        <h4 className="text-xl text-gray-700 font-medium">
                                            {item.q}
                                        </h4>
                                        <p className="text-gray-500">
                                            {item.a}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>



                </div>
            </section>

        </>

    );
}
export default Articles;