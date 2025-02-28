import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookContextProvider } from "@/context/BookContext";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Car Rent Showcase",
  description: "The place where you will find the best cars in your need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <BookContextProvider>
        <html lang="en">
          <body className={`relative`}>
            {children}
            <Script
              id="chatbase-script"
              strategy="lazyOnload"
            >
              {`
                (function(){
                  if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                    window.chatbase=(...arguments)=>{
                      if(!window.chatbase.q){window.chatbase.q=[]}
                      window.chatbase.q.push(arguments)
                    };
                    window.chatbase=new Proxy(window.chatbase,{
                      get(target,prop){
                        if(prop==="q"){return target.q}
                        return(...args)=>target(prop,...args)
                      }
                    })
                  }
                  const onLoad=function(){
                    const script=document.createElement("script");
                    script.src="https://www.chatbase.co/embed.min.js";
                    script.id="Rs2O5Mo-ZkpBzw3FsYqAe";
                    script.domain="www.chatbase.co";
                    document.body.appendChild(script)
                  };
                  if(document.readyState==="complete"){
                    onLoad()
                  }else{
                    window.addEventListener("load",onLoad)
                  }
                })();
              `}
            </Script>
          </body>
        </html>
      </BookContextProvider>
    </ClerkProvider>
  );
}
