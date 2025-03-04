"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  if(session) console.log(session);


  const signOutHandler = async () => {
    await signOut();
    router.push("/auth");
  }

  useEffect(() => {
    if (!session) {
      router.push("/auth");
    }
  }, [session]);

  return (
    <div>
      {session?.user? <div><Image src={`${session.user.image}`} width={50}
    height={50} alt="User Image"/>
      <p>{session.user.name}</p></div> : <p>Not signed in</p>}

      <button onClick={signOutHandler}> sign out</button>
    </div>
  );
}
