import React,{ useState, useEffect } from 'react'


 function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'images/Sheikh.jpg',
    'images/s1.jfif',
    'images/s2.jpeg',
    'images/s3.png',
    'images/s4.jpg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };
  return (
    <>
    <div className='about'>
      


    <img src="images/ann.gif" width='30%' height='30%' alt="Image" className='pt-2' /><br/>
    <span className='text-primary h4 pt-3'>Celebrating 51 years for serving people </span><span className='icon-heart text-danger h5'></span>
    
      <p className='pt-3'>
     
 Established in <mark>1972</mark>, we stand as one of the oldest and most renowned pharmacy shops in the heart of Janglat Mendi, Anantnag. Over the years, we have built a legacy of excellence and a strong commitment to serving the healthcare needs of our community. Our dedication to providing quality medicines, healthcare products, and expert advice has made us a trusted destination for generations.</p>

<p>As we reflect on our journey since 1972, we take immense pride in being a cornerstone of health and wellness in Janglat Mendi, Anantnag. Our longstanding commitment continues to be a source of pride, and we look forward to many more years of serving and supporting the well-being of our valued customers.</p>
<p className='text-success h3'>Shop Insight</p>
<div className="image-slider">
      <div className="slider-wrapper" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
     
    </div>

<p>Shop No:4</p>
<p>Area:Janglet Mandi Anantnag</p>
<p>Land Mark 1:GMC Anantnag Hospital gate no 1 </p>
<p>Land Mark 2: Near Hanfia Masjid Janglat Madni </p>

 {/* <div className='container'>
 <div className='row'>
 
  <div className='col-3 border'>
<p className='icon-user h2'></p>
<p className='text-primary'>Ali Mohd Sheikh</p>
<p>Almost 55 years of experinece</p>
<p>One of the old and leading chemist in entire area.Has gained much Experinece in field of medicine

</p>
  </div>
  <div className='col-4 border'>
<p>Manzoor Ahmad Sheikh</p>
<p>Experinece: Almost 30 years</p>
  </div>

</div> 
</div> */}
    </div>
    </>
  )
}
export default About