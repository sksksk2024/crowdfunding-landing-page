import { useState, useEffect } from 'react';
import MasterImg from './../images/logo-mastercraft.svg';
import BookImg from './../images/icon-bookmark.svg';
import StyledBookImg from './../images/icon-styled-bookmark copy.svg';
import XBurgerGray from './../images/icon-close-modal.svg';
import thumbsUp from './../images/icon-check.svg'
import { toast } from 'react-toastify';

function Card1() {
  const [isPledgeNo, setIsPledgeNo] = useState('1')
  const [isPledge1, setIsPledge1] = useState('25')
  const [isPledge2, setIsPledge2] = useState('75')
  const [isThanks, setIsThanks] = useState(false)
  const [isBtnActiveNo, setIsBtnActiveNo] = useState(false);
  const [isBtnActive1, setIsBtnActive1] = useState(false);
  const [isBtnActive2, setIsBtnActive2] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Modify Input States
  const handlePledge1Change = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 25) {
      setIsPledge1(value);
    } else {
      toast.error("Must be a number >= 25!");
    }
  };
  

  // Toggle the clicked state
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Done
  const done = () => {
    if ( isBtnActive1 ) { setIsBtnActive1(false) }
    if ( isBtnActive2 ) { setIsBtnActive2(false) }
    setIsThanks(!isThanks)
    closeModal()
  }

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <section className="flex flex-col justify-center items-center relative inset-y-48I 2xs:inset-y-182.4I md:inset-y-300I lg:inset-y-128I xl:inset-y-224I text-black text-center w-full h-32H bg-white h-auto rounded-10BR p-32P pb-0 shadow-xl">
      <div className="relative bottom-60.8I">
        <img className="z-10 mx-auto mb-32M" src={MasterImg} alt="Mastercraft, name of the business" />
        <h1 className="font-bold text-md xs:text-lg sm:text-xl">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-dark-gray my-16M">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between w-full items-center -mb-16M">
          {/* Button to open modal */}
          <button
            className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR"
            onClick={openModal} // Use React's onClick handler
          >
            Back this project
          </button>

          {/* Modal */}
          {isModalOpen && (
            // Modal Body: Apply overflow-hidden here to the background overlay
            <div
              className="fixed inset-0 z-100 bg-black bg-opacity-50 flex justify-center items-center"
              onClick={isThanks ? done : closeModal}
            >
            {/* Modal Card: Make sure the modal content itself can scroll if needed */}
            <div
              className={`modal-box z-100 bg-white rounded-lg shadow-lg w-full mx-auto ${isThanks ? 'max-w-600MW h-3/5 sm:h-2/5 fixed sm:static' : 'p-80P max-w-800MW min-h-screen relative'}  flex flex-col items-center justify-center gap-4  overflow-y-auto`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Modal Content */}
              <div className={`flex flex-col items-center justify-between gap-4 ${isThanks ? 'static' : 'absolute'}  top-16I p-8P`}>
                {isThanks ? (
                  // Render the "Thank you" section
                  <>
                  
                    <div className="text-center flex flex-col justify-center items-center gap-4">
                      <img src={thumbsUp} alt="done" />

                      <h1 className='text-xl font-bold'>Thank you for your support!</h1>

                      <p className='text-dark-gray text-lg'>
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                        an email once our campaign is completed.
                      </p>

                      <button
                        className="btn-lg text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR border-none"
                        onClick={done}
                      >
                        Got it!
                      </button>
                    </div>
                  </>
                )
                :
                (
                <>
                <div className="flex flex-row items-center justify-between gap-4 w-[90vw] md:w-736W">
                  <h2 className=' z-100 text-black text-lg font-bold'>
                    Back this project
                  </h2>
                  <button onClick={closeModal} className='z-100 transition-transform'>
                    <img src={XBurgerGray} alt="close modal" />
                  </button>
                </div>
                <p className='text-dark-gray w-[90vw] xs:w-auto text-start relative md:right-64I'>
                  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                </p>

                <section className={`flex flex-col justify-center items-start gap-10 relative text-black text-start z-100 w-full h-32H bg-white h-auto rounded-10BR leading-8 mt-32M ${isThanks ? 'hidden' : 'block'}`}>
                  {/* Start Block Section */}

                  {/* Block No Reward */}
                  <div className={`solid rounded-10BR p-32P flex flex-col gap-6 ${isBtnActiveNo ? 'border border-5BW border-dark-cyan' : 'border border-dark-gray'}`}>
                          <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center">
                          <div className="form-control">
                            <label className="cursor-pointer label justify-start gap-4">
                              <input 
                                type="checkbox" 
                                checked={isBtnActiveNo}
                                className="checkbox checkbox-success" 
                                onChange={() => {
                                  setIsBtnActiveNo((prev) => {
                                    const newValue = !prev;
                                    if (newValue) { 
                                      setIsBtnActive1(false);
                                      setIsBtnActive2(false);
                                    }
                                    return newValue;
                                  });
                                }} 
                              />
                              <div className="flex flex-col lg:flex-row lg:gap-4">
                                <h3 className={`font-bold ${isBtnActiveNo ? 'text-dark-cyan' : 'text-black'}`}>
                                  Pledge with no reward
                                </h3>
                              </div>
                            </label>
                          </div>
                        </div>

                        <p className="text-dark-gray relative lg:left-48I">
                          Choose to support us without a reward if you simply believe in our project. As a backer, 
                          you will be signed up to receive product updates via email.
                        </p>
                          
                        <div className={`${isBtnActiveNo ? 'block' : 'hidden'}`}>

                        <hr className='w-full mb-7' />

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

                        <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">
                          <p className='text-dark-gray mb-16M'>Enter your pledge</p>

                          <div className="flex gap-4">
                          <div className="flex items-center bg-white border rounded-50BR w-112W px-3">
                            <span className="text-dark-gray font-bold">$</span>
                            <input
                              type="text"
                              value={isPledgeNo}
                              onChange={(e) => {
                                const value = e.target.value.replace(/[^1-9]/g, '');
                                setIsPledgeNo(value);
                              }}
                              className="bg-transparent text-black font-bold w-full pl-2 focus:outline-none"
                            />
                          </div>

                            <button 
                              className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR w-112W"
                              onClick={() => {
                                if (isNaN(isPledgeNo) || isPledgeNo < 1) {
                                  toast.error("Please enter a valid pledge amount (>= $1).");
                                } else {
                                  setIsThanks(!isThanks);
                                  setIsPledgeNo(1);
                                }
                              }}
                            >
                              Continue
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 1 */}
                  <div className={`solid rounded-10BR p-32P flex flex-col gap-6 ${isBtnActive1 ? 'border border-5BW border-dark-cyan' : 'border border-dark-gray'}`}>
                    <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center">
                    <div class="form-control">
                      <label class="cursor-pointer label justify-start gap-4">
                        <input 
                          type="checkbox" 
                          checked={isBtnActive1}
                          className="checkbox checkbox-success" 
                          onChange={() => {
                            setIsBtnActive1((prev) => {
                              const newValue = !prev;
                              if (newValue) {
                                setIsBtnActiveNo(false);
                                setIsBtnActive2(false);
                              }
                              return newValue;
                            });
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div className="flex flex-col lg:flex-row lg:gap-4">
                          <h3 className="font-bold">
                            Bamboo Stand
                          </h3>
                          <span className={`text-dark-cyan ${isBtnActive1 ? 'font-bold' : 'font-normal'}`}>
                            Pledge $25 or more
                          </span>
                        </div>
                      </label>
                    </div>
                    
                    <h1 className="font-bold text-xl flex items-center gap-2 hidden lg:block">
                      101 <span className="text-md text-dark-gray font-semibold">left</span>
                      </h1>
                  </div>

                  <p className="text-dark-gray relative lg:left-48I">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                  </p>

                  <h1 className="font-bold text-xl flex items-center gap-2 block lg:hidden">
                    101 <span className="text-md text-dark-gray font-semibold">left</span>
                  </h1>
                    
                  <div className={`${isBtnActive1 ? 'block' : 'hidden'}`}>

                  <hr className='w-full mb-7' />

                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

                  <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">
                    <p className='text-dark-gray mb-16M'>Enter your pledge</p>

                    <div className="flex gap-4">

                      <div className="flex items-center bg-white border rounded-50BR w-112W px-3">
                            <span className="text-dark-gray font-bold">$</span>
                            <input
                              type="text"
                              value={isPledge1}
                              onChange={(e) => {
                                const value = e.target.value.replace(/[^1-9]/g, '');
                                setIsPledge1(value);
                              }}
                              className="bg-transparent text-black font-bold w-full pl-2 focus:outline-none"
                            />
                        </div>

                      <button 
                        className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR w-112W"
                        onClick={() => {
                          if (isNaN(isPledge1) || isPledge1 < 25) {
                            toast.error("Please enter a valid pledge amount (>= $25).");
                          } else {
                            setIsThanks(!isThanks);
                            setIsPledge1(25);
                          }
                        }}
                      >
                        Continue
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className={`solid rounded-10BR p-32P flex flex-col gap-6 ${isBtnActive2 ? 'border border-5BW border-dark-cyan' : 'border border-dark-gray'}`}>
                    <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center">
                    <div className="form-control">
                      <label className="cursor-pointer label justify-start gap-4">
                        <input 
                          type="checkbox" 
                          checked={isBtnActive2}
                          className="checkbox checkbox-success" 
                          onChange={() => {
                            setIsBtnActive2((prev) => {
                              const newValue = !prev;
                              if (newValue) {
                                setIsBtnActiveNo(false);
                                setIsBtnActive1(false);
                              }
                              return newValue;
                            });
                          }} 
                        />
                        <div className="flex flex-col lg:flex-row lg:gap-4">
                          <h3 className="font-bold">
                            Black Edition Stand
                          </h3>
                          <span className={`text-dark-cyan ${isBtnActive2 ? 'font-bold' : 'font-normal'}`}>
                            Pledge $75 or more
                          </span>
                        </div>
                      </label>
                    </div>
                    
                    <h1 className="font-bold text-xl flex items-center gap-2 hidden lg:block">
                      64 <span className="text-md text-dark-gray font-semibold">left</span>
                      </h1>
                  </div>

                  <p className="text-dark-gray relative lg:left-48I">
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                    you’ll be added to a special Backer member list.
                  </p>

                  <h1 className="font-bold text-xl flex items-center gap-2 block lg:hidden">
                    64 <span className="text-md text-dark-gray font-semibold">left</span>
                  </h1>
                    
                  <div className={`${isBtnActive2 ? 'block' : 'hidden'}`}>

                  <hr className='w-full mb-7' />

                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

                  <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">
                    <p className='text-dark-gray mb-16M'>Enter your pledge</p>

                    <div className="flex gap-4">
                      <div className="flex items-center bg-white border rounded-50BR w-112W px-3">
                            <span className="text-dark-gray font-bold">$</span>
                            <input
                              type="text"
                              value={isPledge2}
                              onChange={(e) => {
                                const value = e.target.value.replace(/[^1-9]/g, '');
                                setIsPledge2(value);
                              }}
                              className="bg-transparent text-black font-bold w-full pl-2 focus:outline-none"
                            />
                        </div>

                      <button 
                        className="btn glass p-16P text-white bg-moderate-cyan hover:bg-dark-cyan rounded-50BR w-112W"
                        onClick={() => {
                          if (isNaN(isPledge2) || isPledge2 < 75) {
                            toast.error("Please enter a valid pledge amount (>= $75).");
                          } else {
                            setIsThanks(!isThanks);
                            setIsPledge2(75);
                          }
                        }}
                      >
                        Continue
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="border border-dark-gray border-solid rounded-10BR p-32P flex flex-col gap-6 opacity-50 cursor-no-drop mb-32M">
            <div className="cursor-no-drop flex justify-between flex-col lg:flex-row items-start lg:items-center">
                    <div class="form-control">
                      <label class="pointer-events-none label justify-start gap-4">
                        <input type="checkbox" class=" cursor-not-allowed checkbox checkbox-success"/>
                        <div className="cursor-no-drop flex flex-col lg:flex-row lg:gap-4">
                          <h3 className="font-bold">
                            Black Edition Stand
                          </h3>
                          <span className='cursor-no-drop text-dark-cyan'>
                            Pledge $75 or more
                          </span>
                        </div>
                      </label>
                    </div>
                    
                    <h1 className="font-bold text-xl flex items-center gap-2 hidden lg:block">
                      0 <span className="text-md text-dark-gray font-semibold">left</span>
                      </h1>
                  </div>

              <p className="cursor-no-drop text-dark-gray">
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                to our Backer member list. Shipping is included.
              </p>

              <div className="cursor-no-drop flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <h1 className="font-bold text-xl flex items-center gap-2 block lg:hidden">
                  0 <span className="text-md text-dark-gray font-semibold">left</span>
                </h1>
              </div>
            </div>
            {/* End Block Section */}
            </section>
            </>
            )}
          </div>
        </div>
      </div>
    )}


    <div className="flex justify-center items-center">
      <img
        className={`relative lg:left-19.2I cursor-pointer ${isClicked ? 'hidden' : 'block'}`}
        src={BookImg}
        alt="save"
        onClick={handleClick}
      />

      <img
        className={`relative lg:left-19.2I cursor-pointer ${isClicked ? 'block' : 'hidden'}`}
        src={StyledBookImg}
        alt="save"
        onClick={handleClick}
      />

        <span className={`hidden lg:block font-bold p-16P pl-32P rounded-r-50BR bg-dark-white ${isClicked ? 'text-dark-cyan' : 'text-dark-gray'}`}>
          {isClicked ? 'Bookmarked' : 'Bookmark'}
        </span>
      </div>
    </div>
  </div>
  </section>
  );
}

export default Card1;
