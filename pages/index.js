import Navbar from "../components/Navbar"

const style = {
  Wrapper: `h-screen w-screen flex flex-col`
}

export default function Home() {
  return (
    <div className={style.Wrapper}>
      <Navbar />
      <div className={style.main}></div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
        </div>
      </div>
    </div>
  )
}
