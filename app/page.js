import Image from "next/image"
import { HeadshotPhotos, JewelryCard, Navbar } from "@/components"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="flex flex-col mt-44">
        <HeadshotPhotos />
        <div className='flex flex-row'>
          <JewelryCard />
        </div>

      </div>
    </main>
  )
}
