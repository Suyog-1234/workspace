import { Fragment } from "react"
import { ComponentCommon } from "../../../type"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import PageWrapper from "@/components/common/PageWrapper"

export default function Layout({ children }: ComponentCommon) {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <main className="pt-[70px] ps-[100px] min-h-screen">
                <PageWrapper>
                    {children}
                </PageWrapper>
            </main>
        </Fragment>
    )
}
