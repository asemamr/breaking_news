import Loading from "@/app/loading";
import { Suspense } from "react";

export default function layout({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading/>}>{children}</Suspense>
    </div>
  );
}
