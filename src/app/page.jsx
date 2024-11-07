import Link from "next/link";
import { Suspense } from "react";
import Loading from "./products/loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Link className="comenzar" href='/products' style={{"margin-top": "200px"}}>Comenzar</Link>
      
    </Suspense>

  )
}

