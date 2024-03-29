import * as React from 'react'

export default function App({ title, subhead, subhead1, subhead2, card }) {

  const titleArray = title.split("%")
  console.log(titleArray);
  return (
    <main className='container  lg:my-28'>
      <section className="relative flex flex-col lg:flex-row h-auto w-full">
        <section className="lg:sticky lg:top-0 min-w-[50%] h-[200px] lg:min-h-screen ">
          <section className="lg:h-[200px] px-8 lg:px-0 lg:w-[700px] absolute lg:top-[15%] lg:left-[50%] max-w-[600px] lg:-translate-x-[50%] lg:-translate-y-[50%]">
            <h1 className="Gilroy-Bold lg:text-6xl text-4xl lg:leading-[4.5rem]">
              {titleArray.map((ele, index) => (
                <span key={index}>
                  {ele.includes("Brain") ? <h1 className='text-[#7600EB]'>{ele}</h1>:<h1>{ele}</h1>}
                </span>
              ))}
            </h1>
            <p className="text-lg font-thin opacity-60 lg:mt-4">{subhead}</p>
            <p className="text-lg font-thin opacity-60 lg:mt-4">{subhead1}</p>
            <p className="text-lg font-thin opacity-60 lg:mt-4">{subhead2}</p>
          </section>
        </section>
        <section className='lg:w-[40%] px-8 lg:px-0'>
          <section>
            {card.map((ele, index) => (
              <section className="bg-technology p-10 lg:ml-8 mb-4" key={index}>
                <h3 className="Gilroy-Bold text-3xl">
                  {ele.head}
                </h3>
                <p className="Gilroy-Light text-lg opacity-60 pt-4">
                  {ele.content}
                </p>
              </section>
            ))}
            <section className='min-h-[400px] hidden lg:block' />
          </section>
        </section>
      </section>
    </main>
  )
}