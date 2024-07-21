
const Footer = () => {
  return (
    <div className="flex  flex-col gap-12 md:flex-row md:justify-between">
      <ul className=" flex  gap-6 text-gray-400 font-bold"> 
        <li >
          <a href="#">Facebook</a>
        </li>
           <li>
        <a href="#">Instagram</a>

             </li>
        <li>
        <a href="#">Twitter</a>

        </li>

      </ul>
      <div>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className="  font-lato font-bold">Have any question?</p>
          <a className="font-lato font-bold" href="#">Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
