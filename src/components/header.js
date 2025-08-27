import Image from "next/image"

const Header = () => {
  return (
    <header className="dashboard_header items-start justify-between flex">
      <p className="app_name text-2xl">STUDENT MANAGMENT</p>
      <div className="profile items-center justify-center flex rounded-full">
        <Image src='/avater.png' alt="avater" width={50} height={50} />
      </div>
    </header>
  )
}
export default Header

