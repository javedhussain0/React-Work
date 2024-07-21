const Body = () => {
  return (
    <div className="space-y-4 lg:flex" >
    <div className=" flex justify-center items-center lg:flex-1 lg:order-2">
      <img src="./assets/Blue-Shape.svg lg:" alt="image-1" className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]" />
      <img src="./assets/Pink-Shape.svg" alt="image-2" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"/>
      <img src="./assets/Purple-Shape.svg" alt="image-3" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"/>
      <img src="./assets/Hero-Model.png" alt="image-4" className="absolute h-64 md:h-72 lg:h-[400px]" />
</div>
      <div className=" lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-lato font-bold leading-tight"> 
          Host your website in  less than five  minutes 
        </h1>
        <p className=" text-start font-lato font-thin leading-tight ">
          with the monster , got your website up and running in no less than 5 minutes with the most competitive with pakages and deploy your website.
        </p>
        
        <form action="" className="flex flex-col gap-2 md:flex-row">
        
          <input className=" rounded-md px-4 py-3 placeholde:text-gray-400 " type="email" placeholder="Your Email" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white " type="submit">Send Message</button>
        </form>
  
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="check" />
        <p className=" font-lato text-gray-400"> No spam , ever .Unsubscribe anytime </p>
        </div>
      </div>
    </div>
    
  )
}

export default Body
