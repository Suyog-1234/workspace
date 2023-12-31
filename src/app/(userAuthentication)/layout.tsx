import { Fragment } from "react"
import { ComponentCommon } from "../../../type"

export default function Layout({ children }: ComponentCommon) {
    return (
        <Fragment>
            <main className="p-24 flex  justify-center min-h-screen bg-[url('/assets/images/auth-bg.jpg')] bg-cover bg-center bg-black/70 bg-blend-overlay">
                <div className="w-full max-w-[480px] mx-auto">
                    <div className="log-part mb-10">
                        <h1 className="text-white font-700 texte-center text-3xl text-center uppercase">WorkSpace</h1>
                    </div>
                    <div className="form-wrapper p-8 pb-12  bg-dark-intensity-10">
                          {children}
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
