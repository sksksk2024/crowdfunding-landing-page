

function Card3() {
  return (
    <section className="flex flex-col justify-center items-start gap-10  inset-y-48I 2xs:inset-y-182.4I md:inset-y-300I lg:inset-y-128I relative xl:inset-y-224I text-black text-start z-1 w-full h-32H bg-white h-auto rounded-10BR p-32P shadow-xl leading-8">
      <h2 className="font-bold text-lg">
        About this project
      </h2>

      <p className="text-dark-gray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      </p>

      <p className="text-dark-gray">
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>

      {/* Block 1 */}
      <div className="border border-dark-gray border solid rounded-10BR p-32P flex flex-col gap-6">
        <div className="flex justify-between flex-col lg:flex-row">
          <h3 className="font-bold">
            Bamboo Stand
          </h3>
          <span className="text-dark-cyan">
            Pledge $25 or more
          </span>
        </div>

        <p className="text-dark-gray">
          You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h1 className="font-bold text-xl flex items-center gap-2">
            101 <span className="text-md text-dark-gray font-semibold">left</span>
          </h1>
          <button className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR">
            Select Reward
          </button>
        </div>
      </div>

      {/* Block 2 */}
      <div className="border border-dark-gray border solid rounded-10BR p-32P flex flex-col gap-6">
        <div className="flex justify-between flex-col lg:flex-row">
          <h2 aria-label="black edition stand" className="font-bold">
            Black Edition Stand
          </h2>
          <span className="text-dark-cyan">
            Pledge $75 or more
          </span>
        </div>

        <p className="text-dark-gray">
          You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h1 className="font-bold text-xl flex items-center gap-2">
            64 <span className="text-md text-dark-gray font-semibold">left</span>
          </h1>
          <button className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR">
            Select Reward
          </button>
        </div>
      </div>

      {/* Block 3 */}
      <div className="border border-dark-gray border-solid rounded-10BR p-32P flex flex-col gap-6 opacity-50 pointer-events-none">
        <div className="flex justify-between flex-col lg:flex-row">
          <h2 aria-label="Mahogany Special Edition" className="font-bold">
            Mahogany Special Edition
          </h2>
          <span className="text-dark-cyan">
            Pledge $200 or more
          </span>
        </div>

        <p className="text-dark-gray">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included.
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h1 className="font-bold text-xl flex items-center gap-2">
            0 <span className="text-md text-dark-gray font-semibold">left</span>
          </h1>
          <button className="btn glass p-16P text-white bg-dark-gray rounded-50BR cursor-not-allowed">
            Out of Stock
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card3
