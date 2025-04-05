const OuterLayout = ({ children }) => {
    return (
      <div className="px-[30px]  md:px-[60px] py-[50px] md:py-[100px] flex flex-col gap-y-10 md:gap-y-20">
        {children}
      </div>
    );
  };


const CardLayout = ({image,title,width}) =>{

  return(
    <div className={`${width} flex flex-col justify-center items-center h-auto md:h-[494px]`}>
  <div className='w-full  p-[15px] bg-neutral-pink rounded-[30px]'>
    <img  src={image} className="w-full h-[300px] md:h-[383px]  object-fill rounded-[30px]"/>
  </div>
  <div className="w-full flex justify-center">
  <div className="py-2 px-8 lg:px-4 xl:px-8 bg-neutral-pink w-fit rounded-b-[30px] h-auto flex ">
    <p className=" lg:max-w-[250px] max-w-[300px]  text-center h-[32px] lg:h-[63px] font-montserrat flex items-center justify-center text-base lg:text-base  xl:text-xl font-semibold">
      {title}
    </p>
  </div>
</div>
</div>
  )
} 


export {OuterLayout,CardLayout}  





  