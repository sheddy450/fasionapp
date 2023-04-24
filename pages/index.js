import Testimonial from './Testimonial'
import { useState } from 'react'
import Image from 'next/image'
import {GiPirateCoat} from 'react-icons/gi'
import {GiTireIronCross} from 'react-icons/gi'
import{AiFillStar, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import{BsFillCartCheckFill} from 'react-icons/bs'
import{BsFillEmojiSmileFill} from 'react-icons/bs'
import {FaLessThan, FaGreaterThan, FaGithub, FaTwitter, FaLinkedin, FaMedium} from 'react-icons/fa'
import img1 from '/public/img5.jpg'
import img2 from '/public/img1.jpg'
import img4 from '/public/img4.jpg'
import img3 from '/public/img2.jpg'
import img5 from '/public/img3.jpg'
import img6 from '/public/img6.jpg'
import img7 from '/public/img7.jpg'
import img8 from '/public/img8.jpg'
import img9 from '/public/img9.jpg'
import img10 from '/public/img10.jpg'
import img11 from '/public/img11.jpg'
import person from '/public/129.png'
import man1 from '/public/man1.png'
import man2 from '/public/man2.png'
import man3 from '/public/man3.png'
import shirt1 from '/public/shirt1.png'
import shirt2 from '/public/shirt2.png'
import shirt3 from '/public/shirt3.png' 
import shirt4 from '/public/shirt4.png' 
import photo1 from '/public/photo1.jpg' 
import photo2 from '/public/photo2.jpg' 
import photo3 from '/public/photo3.jpg' 
import photo4 from '/public/photo4.jpg' 
import photo5 from '/public/photo5.jpg' 
import photo6 from '/public/photo6.jpg' 
import photo7 from '/public/photo7.jpg' 
import photo8 from '/public/photo8.jpg' 
import first from '/public/first.png' 
import man4 from '/public/man4.jpg' 
import man5 from '/public/man5.jpg' 
import man6 from '/public/man6.jpg' 
import man7 from '/public/man7.jpg' 
import man8 from '/public/man8.jpg' 
import Testify from './Testimonial'

 function Home() {

  const [showNav, setShowNav] = useState(false)
  return (
    <main className='font-poppins'>

    {/* ---------------Navbar-------------- */}
      <section>
        <nav className='flex lg:justify-between  justify-between relative items-center bg-gray-700 font-poppins text-white' style={{height: '50px'}}>
          <div className='text-orange-500 ml-5 justify-start flex items-center text-xl'>
            <GiPirateCoat/>
            <h1>SheddyFashion</h1>
          </div>
          {
            showNav? ( <ul className='grid mx-auto absolute right-0 p-10 text-lg space-y-10 top-0 bg-white text-black'style={{width: '250px'}}>
            <button onClick={() => setShowNav(!showNav)} className='right-0 absolute mt-4 mr-4 text-2xl'><GiTireIronCross/></button>
            <li className='px-2 hover:text-red-400'><a href="">Home</a></li>
            <li className='px-2 hover:text-red-400'><a href="">About</a></li>
            <li className='px-2 hover:text-red-400'><a href="">New Arrival</a></li>
            <li className='px-2 hover:text-red-400'><a href="">Services</a></li>
          <div className='flex mt-1'>
          <AiOutlineSearch className='ml-1 hover:text-red-400'/>
          <BsFillCartCheckFill className='ml-1 hover:text-red-400'/>
          </div>  
          </ul>) :
          ( <ul className='lg:flex lg:mr-5 text-xl lg:justify-around hidden'>
          <li className='px-2 hover:text-red-400 cursor-pointer'>Home</li>
          <li className='px-2 hover:text-red-400 cursor-pointer'>About</li>
          <li className='px-2 hover:text-red-400 cursor-pointer' >New Arrival</li>
          <li className='px-2 hover:text-red-400 cursor-pointer'>Services</li>
        <div className='flex mr-2 mt-1'>
        <AiOutlineSearch className='ml-1 hover:text-red-400'/>
        <BsFillCartCheckFill className='ml-1 hover:text-red-400'/>
        </div>
        </ul>)
          }
         <button onClick={() => setShowNav(!showNav)} className='mr-5 text-xl lg:hidden'> <AiOutlineMenu/></button>
        </nav>
        <div className=" text-center text-white flex flex-wrap justify-center md:justify-evenly items-center bg-gradient-to-r from-gray-300 to-white h-100 " >
          <div>
            <h1 className='text-3xl max-w-xs font-castoro text-gray-700'>Modern<br/> Men Attire</h1>
            <p className='py-2 text-xl text-black'>Dressing for the occation</p>
            <button className='border text-black text-xl mt-2 border-gray-700 px-5 py-2 mb-2 hover:border-red-400 hover:text-red-400'>View Collection</button>
          </div>
          <div className='mb-2'>
            <Image src={first} height={400} width={300} className='mt-2 lg:shadow-lg '/>
          </div>
        </div>
      </section>
      {/* ------------Section1--------------------- */}

      <section>
        <div className='grid text-center justify-center pt-5'>
          <h1 className='text-2xl'>Trending Products</h1>
          <ul className='flex pt-2 font-DancingScript text-xl font-bold'>
            <li className='px-3'>Featured</li>
            <li className='px-3 text-red-600'>New products</li>
            <li className='px-3'>Best Sales</li>
          </ul>
        </div>
        <div className='grid mt-5 justify-center gap-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 '>
        <div className=' mb-2 mx-auto  inline-block  bg-gray-200 shadow-lg' >
          <Image className=' object-cover' src={img2} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Bohemian fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className=' mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo8} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1> Classic business attire </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className=' mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo7} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Minimalist fashion</h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className=' mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo2} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1> Preppy style</h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className=' mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo6} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Hipster fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo3} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Rocker fashion  </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo4} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Formal wear  </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={photo5} height={100} width={350} style={{width: '400px', height:'30em'}}/>
          <div className='pl-2'>
            <h1>Streetwear fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Flowy, free-spirited, and eclectic clothing style</p>
            <ul className='flex'>
              <li className=''>$3,000</li>
              <li className='px-2 text-gray-500 line-through'>$4,000</li>
              <li className='px-2 text-red-500'>10% off</li>
            </ul>
          </div>
        </div>
        </div>
        </section>
         {/* -----------------wedding wears----------------- */}
        <section>
         <div className='mt-20 m-auto bg-gray-200 lg:grid lg:grid-cols-2 justify-center items-center ' style={{gridTemplateColumns: '2fr 1fr', }} >
           <div className='lg:ml-10 mx-auto grid grid-cols-4 gap-2 left-0 grid-rows-3 items-cent'>
            <div className='  col-start-1 col-end-3 row-start-1 row-end-4  '><Image src={img4} width={400} style={{width: '35em', height:'750px', objectFit:'cover'}} /></div>
            <div  className='ml-0 mr-0 pr-0'><Image src={img3} width={300} style={{height: '15em', width:'17em', objectFit:'cover'}} /></div>
            <div className=' ml-0 pl-0' ><Image src={img5} width={300}  style={{height:'15em', width:'16em', objectFit: 'fit'}}/> </div>
           <div className='col-start-3 col-end-5 row-start-2 row-end-4 -mt-1' > <Image src={img6} width={300} style={{width: '540px', height: '500px',  objectFit:"cover"}}/></div>
          </div>
            <div className=' text-center mt-5'>
              <div className='right-0 lg:text-center'>
                <Image src={person} height={50} width={100} style={{height: '20em'}}  className='m-auto '/>
              </div>
              <div className='m-auto grid justify-center relative -mt-48'>
              <h1 className='text-3xl font-bold font-lobsterRegular my-3'>Wedding Wear</h1>
              <h2 className='text-2xl inline-block w-30 border-b border-b-black mx-auto font-bold mb-2'>Hand</h2>
              <p className='max-w-sm text-xl'>The latest men's fashion trends include tailored blazers, slim-fit pants, and stylish leather shoes</p>
              <button className='bg-red-500 text-white mx-auto mb-14 mt-3 px-5 py-1 rounded-2xl hover:bg-white hover:text-black hover:border-red-400 hover:border'>Shop now</button>
              </div>
            </div>
         </div>
         </section>
         {/* ---------Special suit------------ */}
        <section className='mt-10'>
          <h1 className='text-center text-3xl font-lobsterRegular mb-10'>Special Suit</h1>
          <div className='grid mt-5 justify-center gap-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 '>
          <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={img7} height={100} width={350} style={{width: '400px', height: '30em'}}/>
          <div className='pl-2'>
            <h1>Bohemian fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'>Formal, elegant, tailored, professional, classic </p>
            <ul className='flex'>
              <li className=''>$6,000</li>
              <li className='px-2 text-gray-500 line-through'>$10,000</li>
              <li className='px-2 text-red-500'>40% off</li>
            </ul>
          </div>
        </div>
          <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={img8} height={100} width={350} style={{width: '400px', height: '30em'}}/>
          <div className='pl-2'>
            <h1>Preppy style </h1>
            <p className='max-w-xs font-DancingScript text-xl'>Suave, sophisticated, refined, dapper, sharp</p>
            <ul className='flex'>
              <li className=''>$6,000</li>
              <li className='px-2 text-gray-500 line-through'>$10,000</li>
              <li className='px-2 text-red-500'>40% off</li>
            </ul>
          </div>
        </div>
          <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={img10} height={100} width={350} style={{width: '400px', height: '30em'}}/>
          <div className='pl-2'>
            <h1>Hipster fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Business, corporate, executive, sleek, stylish</p>
            <ul className='flex'>
              <li className=''>$6,000</li>
              <li className='px-2 text-gray-500 line-through'>$10,000</li>
              <li className='px-2 text-red-500'>40% off</li>
            </ul>
          </div>
        </div>
          <div className='mx-auto mb-2 inline-block bg-gray-200 shadow-lg'>
          <Image className='  object-fill' src={img11} height={100} width={350} style={{width: '400px', height: '30em'}}/>
          <div className='pl-2'>
            <h1>Palazzo fashion </h1>
            <p className='max-w-xs font-DancingScript text-xl'> Conservative, understated, chic, traditional, timeless</p>
            <ul className='flex'>
              <li className=''>$6,000</li>
              <li className='px-2 text-gray-500 line-through'>$10,000</li>
              <li className='px-2 text-red-500'>40% off</li>
            </ul>
          </div>
        </div>
          </div>
         
        </section>
      <section className='bg-blue-100 lg:grid lg:grid-cols-2 mt-20 ' style={{gridTemplateColumns: '2fr 1fr'}}>
      <div className='mx-auto md:my-5 md:ml-5 md:grid h-auto grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-3 md:mx-auto w-fit grid'>
        <div className=' bg-gradient-to-r from-lime-100 to-gray-400 flex items-center w-fit md:h-fit'>
          <div><Image src={man1} width={100} height={100} style={{height: '10em', objectFit: 'contain'}}/></div>
          <div className='pl-10'>
            <h1 className='text-3xl py-3 font-DancingScript text-red-600 font-bold'>Spring/Summer</h1>
            <p className='max-w-sm'>A classic button-up shirt paired with a trendy denim jacket and casual sneakers makes for a fashionable outfit</p>
            <button className='border border-black shadow-md hover:bg-white hover:text-black px-7 py-2 mt-3 bg-gray-600 text-white rounded-sm'>Buy now</button>
          </div>
        </div>
        <div className='flex w-fit bg-gradient-to-r from-gray-300 items-center to-white'>
          <div className='pl-10'>
            <h1 className='text-3xl py-3 font-DancingScript text-red-600 font-bold'>Spring/Autum</h1>
            <p className='max-w-sm'>Men's fashion is all about mixing and matching different textures and patterns to create a unique style..</p>
            <button className='border border-black shadow-md hover:bg-white hover:text-black px-7 py-2 mt-3 bg-gray-600 text-white rounded-sm'>Buy now</button>
          </div>
        <div><Image src={man2} width={100} height={100} style={{height: '10em', objectFit: 'contain'}}/></div>
        </div>
        <div className='  md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 bg-gradient-radial flex items-center w-fit from-white to-gray-400'>
        <div className='pl-10'>
            <h1 className='text-3xl py-3 font-DancingScript text-red-600 font-bold'>Spring/winter</h1>
            <p className='max-w-sm'>From bold prints to neutral tones, men's fashion offers a wide range of options to express personal style..</p>
            <button className='border border-black shadow-md hover:bg-white hover:text-black px-7 py-2 mt-3 bg-gray-600 text-white rounded-sm'>Buy now</button>
          </div>
        <div><Image src={man3} width={100} height={100} style={{height: '20em', objectFit: 'contain'}}/></div>
        </div>
      </div>
      <div className='m-auto hidden lg:flex mb-0 mr-0' style={{objectFit: 'contain'}}>
        <Image src={person} height={100} width={100} />
      </div>
      </section>
      {/* ---------------contact & Testimonials-------------- */}
      <div >
        <h1 className='text-center text-3xl mt-10 mb-5 font-lobsterRegular'>Ratings & Reviews</h1>
        <div className='flex flex-wrap md:space-x-10 justify-center text-center'>
          <div>
            <Image className='rounded-full w-20 h-20' src={man4} height={100} width={100}/>
            <h1>Klint</h1>
          </div>
          <div>
            <Image className='rounded-full w-20 h-20' src={man5} height={100} width={100}/>
            <h1>Ufas</h1>
          </div>
          <div>
            <Image className='rounded-full w-20 h-20' src={man6} height={100} width={100}/>
          <h1>Bob</h1>
          </div>
          <div>
            <Image className='rounded-full w-20 h-20' src={img9} height={100} width={100}/>
          <h1>Woozie</h1>
          </div>
          <div >
            <Image className='rounded-full w-20 h-20' src={man8} height={100} width={100}/>
          <h1>Diesel</h1>
          </div>
        </div>
      <div >
        <Testify/>
      </div>
        
      </div>
      <section>
        <div className='flex flex-wrap justify-around bg-gray-300 p-5 mt-10'>
          <Image src={shirt1} height={50} width={60} className='text-gray-500 ' style={{height: '100px'}}/>
          <Image src={shirt2} height={100} width={100} className='text-gray-500' style={{height: '100px'}}/>
          <Image src={shirt3} height={100} width={100} className='text-gray-500' style={{height: '100px'}}/>
          <Image src={shirt4} height={100} width={100} className='text-gray-500' style={{height: '100px'}}/>
          <Image src={shirt1} height={100} width={100} className='text-gray-500' style={{height: '100px'}}/>
        </div>
        <div className='bg-gray-700 flex flex-wrap justify-evenly space-x-5 text-white pt-5 pb-5'>
          <div>
             <GiPirateCoat className='text-6xl text-red-400 text-center' height={300} width={100}/>
            <p className='max-w-sm'> Men's fashion is constantly evolving, but timeless styles like a well-fitted suit or leather shoes never go out of style.!</p>
            <div className='flex mt-2 text-xl'>
              <a className='px-2 hover:text-red-400' href="https://github.com/sheddy450"><FaGithub/></a>
              <a className='px-2 hover:text-red-400' href="https://twitter.com/kungfu_sheddy?t=J4_If_1O7myF67cCSiTDPQ&s=09"><FaTwitter/></a>
              <a className='px-2 hover:text-red-400' href="https://www.linkedin.com/in/shedrach-musa-a6b182231"><FaLinkedin/></a>
              <a className='px-2 hover:text-red-400' href="https://link.medium.com/4tKN1TBsvyb"><FaMedium/></a>
            </div>
          </div>
          <div>
            <h1 className='text-2xl py-3'>Men Attires</h1>
            <ul className='space-y-2'>
              <li>Preppy style</li>
              <li>Streetwear Fashion</li>
              <li>Athletic wear</li>
              <li>Hipster fashion</li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl py-3'>our services</h1>
            <ul className='space-y-2'>
              <li>Sewing</li>
              <li>Export</li>
              <li>Quality designs</li>
              <li>Sells</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl py-3'>Contact us</h1>
            <p className='max-w-sm'>You can contact me through the number or the email address below. </p>
            <p>+234 915 779 5092</p>
            <p>Shedrachmusa420@gmail.com</p>

            <div>
            <input className='p-1 bg-black' type="text" placeholder='Message'/>
            <button className='bg-red-500 p-2'><BsFillEmojiSmileFill/></button>
            </div>
          </div>
        </div>
        <div className='flex bg-black text-white justify-center'>
            <h1 className=' text-center py-3'>Copyright @Musa Shedrach</h1>
          </div>
      </section>
    </main>
  )
}

export default Home
