import Link from "next/link";
import { Suspense } from "react";
import Loading from "./products/loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <div className="container__button">
        <Link className="button" href='/products'>Comenzar
        </Link>
      </div>
    </Suspense>

  )
}

