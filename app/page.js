import Image from "next/image"
import { HeadshotPhotos, JewelryCard, Navbar, BestSellers, Footer, New } from "@/components"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="content__container">
        <HeadshotPhotos />
        <div className='jewelry__card_container'>
          <JewelryCard jewelry={'Earrings'} />
          <JewelryCard jewelry={'Bracelets'} />
          <JewelryCard jewelry={'Necklaces'} />
          <JewelryCard jewelry={'Waist Beeds'} />

        </div>
        <div className="best__sellers_container">
          <BestSellers />
        </div>
      </div>
      <New />
      <Footer />
    </main>
  )
}
