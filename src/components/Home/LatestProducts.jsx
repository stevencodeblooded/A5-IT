import apple from '../../assets/Apple Ipad.png'
import headphone from '../../assets/headphone.png'
import camera from '../../assets/camera.png'
import cable from '../../assets/cable.png'
import keyboard from '../../assets/keyboard.png'
import bulb from '../../assets/bulb.png'

const LatestProducts = () => {
  return (
    <div className="py-16 px-3">
      <section className=' max-w-6xl mx-auto'>
        <div>
          <h2 className="text-3xl text-center mb-6 font-semibold">Shop all our latest products and prices</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-sm mb-16">
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">All</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Accessories</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Digital Products</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Network Hardware</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Power Equiment</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Printers</button>
            <button className="hover:border-b-4 border-b-4 border-transparent pb-2 hover:border-black">Services</button>
          </div>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={apple} alt="" />
              <p className='font-semibold text-sm text-center'>Apple iPad Pro 12.9" 256GB WiFi</p>
            </div>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={headphone} alt="" />
              <p className='font-semibold text-sm text-center'>JBL CLUB 700BT Wireless On-Ear Headphones </p>
            </div>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={bulb} alt="" />
              <p className='font-semibold text-sm text-center'>Nanoleaf Essentials Matter A60 | E27 Smart Bulb </p>
            </div>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={keyboard} alt="" />
              <p className='font-semibold text-sm text-center'>Logitech Combo Touch keyboard case with trackpad for iPad Pro 11-inch</p>
            </div>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={cable} alt="" />
              <p className='font-semibold text-sm text-center'>JINYA Type C Magnet Cable</p>
            </div>
            <div className="flex flex-col gap-8 items-center hover:bg-blue-300 transition-all p-5 rounded-lg">
              <img src={camera} alt="" />
              <p className='font-semibold text-sm text-center'>Insta360 Ace Action Camera</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestProducts