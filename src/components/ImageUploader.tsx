"use client";

import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

export default function ImageUploader() {
  const [image,setImage]=useState("")
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UploadButton
        endpoint='imageUploader'
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImage(res[0].url)
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <Image src={image} width={300} height={300} alt="any"/>
    </main>
  );
}
