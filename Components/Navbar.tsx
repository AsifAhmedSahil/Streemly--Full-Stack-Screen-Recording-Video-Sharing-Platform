'use client'
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


const user ={}

const Navbar = () => {
  const router = useRouter()
  // const {data:session} = authClient.useSession()
  // const user = session.user

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/sign-out", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/sign-in"); // Or refresh: router.refresh();
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };
  return (
    <header className="navbar">
      <nav>
        <Link href="/" >
        <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
        <h1>Streemly</h1>
        </Link>

         {
        user && (
          <figure>
            <button onClick={()=>router.push("/profile/123")}>
              <Image src="/assets/images/dummy.jpg" alt="dummy" width={36} height={36} className="rounded-full aspect-square"/>
            </button>
            <button onClick={handleLogout}>
              <Image src="/assets/icons/logout.svg" alt="logout" width={24} height={24} className="rotate-180"/>
            </button>
          </figure>
        )
      }
      </nav>

     
      
    </header>
  )
}

export default Navbar