
function Articles() {

    const faqsList = [
        {
            q: "Differences between javascript and node js ?",
            a: `Javascript is a programming language and node js is a javascript runtime environment.We use node js in server side application and javascript in client side.Javascript cannot run outside of browser.With the help of node js we can implement javascript features outside of browser.Some of the javascript popular frameworks are React,Vue and Angular and node js have Express,Socket,Meteor etc.  `
        },

        {
            q: "Differences between Sql and NoSql databases?",
            a: "Sql database also known as Relational Database when NoSql database as called non-relational or distributed database.As we use Sql database ,we need to use schemas to structure our data but this is not the requirement for no-sql database.You can store any kind of data in NoSql database as either key-value pairs, document-based, graph databases or wide-column stores.Most popular sql database are MySql,Oracle,PostgreSQL etc.MongoDB,Redis,CouchDB etc are popular NoSql database "
        },
        {
            q: "What is the purpose of jwt and how does it work?",
            a: "JWT or JSON Web Token is mostly used for securely transfer sensitive information between a client and a server.The token made of header,payload and signature.They are separated by dots(.).JWT token comes into two forms - Serialized and Deserialized.Deserialized form only contains header and payload while Serialized form contains all three parts.The header part contains the type of token,payload contains the claims includes iss,sub,exp etc.Signature part used to verifying the authenticity of token."
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