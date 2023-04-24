import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const Testify = () => {
const testimony = [
{name: 'Woozie blaze',
body: "From sharp suits to casual classics, the quality of men's attire never fails to impress me. The attention to detail and impeccable craftsmanship always leave a lasting impression.",
icon: <AiFillStar/>
},
{
    name: 'Musa Shedrach',
    body: "As a fashion-conscious man, I appreciate the fine fabrics and tailored fit of quality men's attire. It's refreshing to find pieces that are both stylish and functional",
    icon: <AiFillStar/>
},
{
    name: 'Klint Sam',
body: "From business meetings to formal events, I trust quality men's attire to make me look and feel my best. The timeless designs and exceptional quality never disappoint",
icon: <AiFillStar/>
},
{
    name: 'Bob Saucing',
body: "I've been a loyal customer of quality men's attire for years, and the durability and longevity of each piece is truly impressive. It's worth the investment for the long-term value.",
icon: <AiFillStar/>
},
{
    name: 'kell Diesel',
body: "Whether I'm dressing up or keeping it casual, quality men's attire always helps me stand out from the crowd. The unique styles and attention to detail make a statement every time.",
icon: <AiFillStar/>
}

]

const sliderRef = useRef(null)

const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,    
}

    return ( 
        <div style={{margin: '0 auto', width: '80%'}}>
        <Slider {...settings} ref={sliderRef}>
            {testimony.map((testimonials)=>(
                <div className='border border-red-400 py-5 mx-auto mt-5' key={testimonials.name}>
                    <p className='text-center font-lobsterRegular text-3xl'> {testimonials.name}</p>
                    <p className='lg:max-w-xl md:max-w-lg max-w-sm mx-auto'> {testimonials.body}</p>
                    <div className='flex text-red-400 mt-2 justify-center'>
                        <p>{testimonials.icon}</p>
                        <p>{testimonials.icon}</p>
                        <p>{testimonials.icon}</p>
                        <p>{testimonials.icon}</p>
                        <p>{testimonials.icon}</p>
                    </div>
                </div>
            ))}
        </Slider>
        <div className='flex justify-center mt-5'>
            <div onClick={()=>sliderRef.current.slickPrev()} className='bg-gray-200 rounded-full p-3 cursor-pointer'><FaLessThan /></div>
            <div onClick={()=>sliderRef.current.slickNext()} className='bg-gray-500 rounded-full p-3 ml-3 cursor-pointer'><FaGreaterThan/></div>
         </div>
        </div>
     );
}
 
export default Testify;