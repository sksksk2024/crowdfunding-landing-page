function Card2() {
  return (
    <section className="flex flex-col justify-center items-center relative inset-y-48I 2xs:inset-y-182.4I md:inset-y-300I lg:inset-y-128I xl:inset-y-224I text-black text-center z-1 w-full h-32H bg-white h-auto rounded-10BR p-32P pb-0 shadow-xl">
      <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-end lg:items-start lg:relative lg:right-128I">
        <div className="flex flex-col justify-center items-center lg:pr-48P lg:border-r">
          <h1 className='font-bold text-xl'>
            $89,914
          </h1>

          <p className="text-dark-gray my-1">
            of $100,000 backed
          </p>

          <hr className="border-1BW border-dark-gray opacity-40 border-solid my-16M w-80W block lg:hidden" />
        </div>

        <div className="flex flex-col justify-center items-center lg:pr-48P lg:border-r">
          <h1 className='font-bold text-xl'>
            5,007
          </h1>

          <p className="text-dark-gray my-1">
            total backers
          </p>

          <hr className="border-1BW border-dark-gray opacity-40 border-solid my-16M w-80W block lg:hidden" />
        </div>
    
        <div className="flex flex-col justify-center items-center">
          <h1 className='font-bold text-xl'>
            56
          </h1>

          <p className="text-dark-gray my-1">
            days left
          </p>
        </div>
      </div>

      <div className="relative mt-16M mb-32M w-full" aria-label="how much money backed" role="region">
        <hr aria-hidden="true" className="rounded-50BR border-1BW bg-dark-white border-dark-white h-16H border-solid" />
        <hr aria-hidden="true" className="absolute top-0 left-0 w-4/5 rounded-50BR border-1BW bg-moderate-cyan border-moderate-cyan h-16H border-solid" />
      </div>
    </section>
  )
}

export default Card2
